import { NextFunction, Response, Router } from "express";
import { TypedRequestBody, urlBase } from "../common/controller";
import { headers } from "../common/controller";

import express = require("express")
const axios = require('axios');

var urlCategoriarequest = 'webhook/'

export class WebhookController {
    //WebHook
    postSetWebHook (req: TypedRequestBody<any>, res: Response, next: NextFunction) {

        
        const apiUrl = urlBase+urlCategoriarequest+'set/'+req.params.instance;

        const apiConfig = {
            enabled: true,
            url: "http://192.168.10.55:3000/conexao/newevent",
            webhook_by_events: false,
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
                "CHATS_SET",
                // "CHATS_UPSERT",
                "CHATS_UPDATE",
                "CHATS_DELETE",
                // "GROUPS_UPSERT",
                // "GROUP_UPDATE",
                // "GROUP_PARTICIPANTS_UPDATE",
                "CONNECTION_UPDATE",
                "CALL"
                // "NEW_JWT_TOKEN",
                // "TYPEBOT_START",
                // "TYPEBOT_CHANGE_STATUS",
            ]    
            }
       
        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    newEvent (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
            console.log(req.body)
    };

}

export const webhookRouter = Router();

export default webhookRouter;