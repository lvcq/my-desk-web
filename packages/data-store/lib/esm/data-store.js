/*
 * The data store for my desk app, what can this package do:
 * 1. fetch data from server and return an observable object.
 * */
import { GraphQLClient } from 'graphql-request';
import { Observable, Subject } from 'rxjs';
var client = null;
var serverUrl = '';
var afterRequest = function (res) { return res; };
var errorSubject = new Subject();
export var requestError$ = errorSubject.asObservable();
/* initialize data store*/
export function initDataStore(options) {
    if (!options.server || typeof options.server !== 'string') {
        throw Error('The server is required, and must be string');
    }
    serverUrl = options.server;
    client = new GraphQLClient(serverUrl, {
        mode: 'cors',
    });
    if (options.headers) {
        client.setHeaders(options.headers);
    }
    if (options.responseInterceptor) {
        afterRequest = options.responseInterceptor;
    }
}
/* update request interceptor */
export function setResponseInterceptor(interceptor) {
    afterRequest = interceptor;
}
/* used in this module to request data, can't export outside. */
export function request(query, variables, headers, meta) {
    if (variables === void 0) { variables = {}; }
    if (headers === void 0) { headers = {}; }
    if (meta === void 0) { meta = null; }
    if (!client) {
        throw Error('Please invoke `initDataStore` first.');
    }
    return new Observable(function (obser) {
        client === null || client === void 0 ? void 0 : client.request(query, variables, headers).then(function (response) {
            var res = afterRequest(response);
            obser.next(res);
        }).catch(function (err) {
            errorSubject.next({
                err: err,
                meta: meta,
            });
        });
    });
}
//# sourceMappingURL=data-store.js.map