import { Request } from "express";

export interface TypedRequestBody<T> extends Express.Request, Request {
    body: T
}
