/*
 * The data store for my desk app, what can this package do:
 * 1. fetch data from server and return an observable object.
 * */
import {GraphQLClient} from 'graphql-request';

import {Observable, Subject} from 'rxjs';
type Headers = { [key: string]: string };
type MetaData = any;
type ResponseInterceptor = <T = any>(response: T) => T;
type ErrorMessage = { err: any, meta: any };


let client: GraphQLClient | null = null;
let serverUrl = '';
let afterRequest: ResponseInterceptor = <T>(res: T): T => res;

const errorSubject = new Subject<ErrorMessage>();
export const requestError$ = errorSubject.asObservable();

export interface DataStoreOptions {
  /* the path of graphql server, required,
   if no value passed. throw an error. */
  server: string;
  /* process before request send */
  responseInterceptor?: ResponseInterceptor;
  headers?: Headers;
}

/* initialize data store*/
export function initDataStore(options: DataStoreOptions) {
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
export function setResponseInterceptor(interceptor: ResponseInterceptor) {
  afterRequest = interceptor;
}


/* used in this module to request data, can't export outside. */
export function request<T = any>(
  query: string,
  variables: { [key: string]: any } = {},
  headers: Headers = {}, meta: MetaData = null) {
  if (!client) {
    throw Error('Please invoke `initDataStore` first.');
  }

  return new Observable<T>((obser) => {
    client?.request<T>(query, variables, headers).then((response) => {
      const res = afterRequest<T>(response);
      obser.next(res);
    }).catch((err) => {
      errorSubject.next({
        err,
        meta,
      });
    });
  });
}

