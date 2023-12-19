import { NextFunction, Response, Router } from "express";
import { TypedRequestBody, urlBase, headers } from "../common/controller";
import { gerarToken } from "../common/controller";

import express = require("express")
import { WebhookController } from "./webhookController";
import conexaoRouter from "../conexaoController";
const axios = require('axios');


//Instance Controller
var urlCategoriarequest = 'instance/'
var urlBaseWebhook = "http://192.168.10.55:3000/"

export class InstanceController {
    postCreateInstance (req: TypedRequestBody<any>, res: Response) //, next: NextFunction 
    {
        var tk = gerarToken(20)
        var instName = gerarToken(15)

        const apiConfig = {
            instanceName: instName,
            token: tk,
            qrcode: true,
            webhook: urlBaseWebhook+'newevent',
            events: [
                // "APPLICATION_STARTUP",
                "QRCODE_UPDATED",
                // "MESSAGES_SET",
                "MESSAGES_UPSERT",
                "MESSAGES_UPDATE",
                "MESSAGES_DELETE",
                "SEND_MESSAGE",
                // "CONTACTS_SET",
                // "CONTACTS_UPSERT",
                // "CONTACTS_UPDATE",
                // "PRESENCE_UPDATE",
                // "CHATS_SET",
                // "CHATS_UPSERT",
                // "CHATS_UPDATE",
                // "CHATS_DELETE",
                // "GROUPS_UPSERT",
                // "GROUP_UPDATE",
                // "GROUP_PARTICIPANTS_UPDATE",
                "CONNECTION_UPDATE",
                "CALL"
                // "NEW_JWT_TOKEN",
                // "TYPEBOT_START",
                // "TYPEBOT_CHANGE_STATUS",
            ]    
        };

        const apiUrl = urlBase+urlCategoriarequest+'create';
        
        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
            
        })
        .catch(error => {
            res.status(500).send(error.response);
            console.error(error)
        });
    };

    getInstanceConnect (req: TypedRequestBody<any>, res: Response) {
        const apiUrl = urlBase+urlCategoriarequest+'connect/'+req.query.instance;
        console.log(req, apiUrl)
        axios.get(apiUrl,  { headers })
        
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error.response.data);
        });

    };

    getConnectionStatus (req: TypedRequestBody<any>, res: Response) {
        const apiUrl = urlBase+urlCategoriarequest+'connectionState/'+req.params.instance;

        axios.get(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            console.log(error);
            
            res.status(500).send(error.response.data);
        });

    };

    getFetchInstances (req: TypedRequestBody<any>, res: Response) {
        const apiUrl = urlBase+urlCategoriarequest+'fetchInstances';
         
        axios.get(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.response.data);
        });
    };

    putRestartConnection (req: TypedRequestBody<any>, res: Response) {
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
            res.status(500).send(error.response.data);
        });
    };

    deleteLogoutInstance (req: TypedRequestBody<any>, res: Response) {

        const apiUrl = urlBase+urlCategoriarequest+'logout/'+req.params.instance;

        axios.delete(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.response.data);
        });
    };

    deleteInstance (req: TypedRequestBody<any>, res: Response) {

        const apiUrl = urlBase+urlCategoriarequest+'delete/'+req.params.instance;

        axios.delete(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.response.data);
        });
    };

}


export const instanceRouter = Router();
export default instanceRouter;