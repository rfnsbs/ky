// eslint-lint-disable-next-line @typescript-eslint/naming-convention
export class HTTPError extends Error {
    constructor(response, request, options) {
        const code = response.status || response.status === 0 ? response.status : "";
        const title = response.statusText || "";
        const status = `${code} ${title}`.trim();
        const reason = status ? `status code ${status}` : "an unknown error";
        super(`Request failed with ${reason}`);
        Object.defineProperty(this, "response", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = "HTTPError";
        this.response = response;
        this.request = request;
        this.options = options;
    }
    async json() {
        return this.response.clone().json();
    }
}
//# sourceMappingURL=HTTPError.js.map