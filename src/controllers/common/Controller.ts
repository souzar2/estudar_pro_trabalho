import { Request } from "express";

export interface TypedRequestBody<T> extends Express.Request, Request {
    body: T
}

export const urlBase = 'http://localhost:8000/'

export const headers = {
            'Content-Type': 'application/json',
            'apikey': 'B6D711FCDE4D4FD5936544120E713976'
        }


export function gerarToken(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}