import { Observable } from 'rxjs';
declare type Headers = {
    [key: string]: string;
};
declare type MetaData = any;
declare type ResponseInterceptor = <T = any>(response: T) => T;
declare type ErrorMessage = {
    err: any;
    meta: any;
};
export declare const requestError$: Observable<ErrorMessage>;
export interface DataStoreOptions {
    server: string;
    responseInterceptor?: ResponseInterceptor;
    headers?: Headers;
}
export declare function initDataStore(options: DataStoreOptions): void;
export declare function setResponseInterceptor(interceptor: ResponseInterceptor): void;
export declare function request<T = any>(query: string, variables?: {
    [key: string]: any;
}, headers?: Headers, meta?: MetaData): Observable<T>;
export {};
//# sourceMappingURL=data-store.d.ts.map