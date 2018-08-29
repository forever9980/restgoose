import { Request, Response } from 'express';
import { InstanceType, Typegoose } from 'typegoose';

export interface Constructor<T> {
    new(...args: any[]): T;
}

export type Promisable<T> = T | Promise<T>;

export type MiddlewarePreFetchExpress = ((req: Request, res: Response, next: () => void) => void);
export type MiddlewarePreFetchPromise = ((req: Request) => Promise<void>);
export type MiddlewarePreFetch = MiddlewarePreFetchExpress | MiddlewarePreFetchPromise;

export type MiddlewareFetchOne<T extends Typegoose> = (req: Request) => Promise<InstanceType<T>>;
export type MiddlewareFetchAll<T extends Typegoose> = (req: Request) => Promise<InstanceType<T>[]>;
export type MiddlewareFetch<T extends Typegoose> = MiddlewareFetchOne<T> | MiddlewareFetchAll<T>;

export type MiddlewarePostFetch<T extends Typegoose> = (req: Request, entity: T) => Promisable<T>;

export type HttpMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT' | 'PATCH';

export type RestMethodName = 'all' | 'one' | 'create' | 'update' | 'remove' | 'removeAll' | 'custom';

export type RestRequest = Request & {
    filter?: object;
};
