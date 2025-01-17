/*! MIT License © Sindre Sorhus */
import type { KyInstance } from "./types/ky.js";
declare const ky: KyInstance;
export default ky;
export type { Options, NormalizedOptions, RetryOptions, SearchParamsOption, DownloadProgress, HttpMethod, } from "./types/options.js";
export type { Hooks, BeforeRequestHook, BeforeRetryHook, BeforeRetryState, BeforeErrorHook, AfterResponseHook, } from "./types/hooks.js";
export type { ResponsePromise } from "./types/ResponsePromise.js";
export type { KyResponse } from "./types/response.js";
export { HTTPError } from "./errors/HTTPError.js";
export { TimeoutError } from "./errors/TimeoutError.js";
