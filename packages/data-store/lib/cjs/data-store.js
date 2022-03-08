"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.setResponseInterceptor = exports.initDataStore = exports.requestError$ = void 0;
/*
 * The data store for my desk app, what can this package do:
 * 1. fetch data from server and return an observable object.
 * */
var graphql_request_1 = require("graphql-request");
var rxjs_1 = require("rxjs");
var client = null;
var serverUrl = "";
var afterRequest = function (res) { return res; };
var errorSubject = new rxjs_1.Subject();
exports.requestError$ = errorSubject.asObservable();
/* initialize data store*/
function initDataStore(options) {
    if (!options.server || typeof options.server !== 'string') {
        throw Error('The server is required, and must be string');
    }
    serverUrl = options.server;
    client = new graphql_request_1.GraphQLClient(serverUrl, {
        mode: 'cors'
    });
    if (options.headers) {
        client.setHeaders(options.headers);
    }
    if (options.responseInterceptor) {
        afterRequest = options.responseInterceptor;
    }
}
exports.initDataStore = initDataStore;
/* update request interceptor */
function setResponseInterceptor(interceptor) {
    afterRequest = interceptor;
}
exports.setResponseInterceptor = setResponseInterceptor;
/* used in this module to request data, can't export outside. */
function request(query, variables, headers, meta) {
    if (variables === void 0) { variables = {}; }
    if (headers === void 0) { headers = {}; }
    if (meta === void 0) { meta = null; }
    if (!client) {
        throw Error('Please invoke `initDataStore` first.');
    }
    return new rxjs_1.Observable(function (obser) {
        client === null || client === void 0 ? void 0 : client.request(query, variables, headers).then(function (response) {
            var res = afterRequest(response);
            obser.next(res);
        }).catch(function (err) {
            errorSubject.next({
                err: err,
                meta: meta
            });
        });
    });
}
exports.request = request;
