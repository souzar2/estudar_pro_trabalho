import { NextFunction, Response, Router } from "express";
import { TypedRequestBody, urlBase } from "../common/controller";
import { headers } from "../common/controller";
import { gerarToken } from "../common/controller";

import express = require("express")
const axios = require('axios');

var instanceName = "012345"

//Instance Controller
var urlCategoriarequest = 'instance/'

export class InstanceController {
    postCreateInstance (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        var tk = gerarToken(20)

        const apiConfig = {
            instanceName: instanceName,
            token: tk,
            qrcode: true,
        };

        const apiUrl = urlBase+urlCategoriarequest+'create';
        
        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
            console.error(error)
        });
    };

    getInstanceConnect (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = urlBase+urlCategoriarequest+'connect/'+req.params.instance;

        axios.get(apiUrl,  { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });

    };

    getConnectionStatus (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = urlBase+urlCategoriarequest+'connectionState/'+req.params.instance;

        axios.get(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });

    };

    getFetchInstances (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = urlBase+urlCategoriarequest+'fetchInstances';
         
        axios.get(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    putRestartConnection (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = urlBase+urlCategoriarequest+'restart/'+req.params.instance;

        const apiConfig = {
            instanceName: req.params.instance,
            qrcode: true,
        };

        axios.put(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    deleteLogoutInstance (req: TypedRequestBody<any>, res: Response, next: NextFunction) {

        const apiUrl = urlBase+urlCategoriarequest+'logout/'+req.params.instance;

        axios.delete(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    deleteInstance (req: TypedRequestBody<any>, res: Response, next: NextFunction) {

        const apiUrl = urlBase+urlCategoriarequest+'delete/'+req.params.instance;

        axios.delete(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

}


export const instanceRouter = Router();
export default instanceRouter;