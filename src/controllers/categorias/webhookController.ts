import { NextFunction, Response, Router } from "express";
import { TypedRequestBody, urlBase, headers } from "../common/controller";

import express = require("express")
import { ChatModel } from "../../../models/chat.model";
import { ChatController } from "./chatController";
import { request } from "http";
import { Chat } from "../../entity/Chat";
const axios = require('axios');

var urlCategoriarequest = 'webhook/'

export class WebhookController {
    postSetWebHook(req: TypedRequestBody<any>, res: Response) {

        const apiUrl = urlBase + urlCategoriarequest + 'set/' + req.params.instance;

        const apiConfig = {
            enabled: true,
            url: "http://192.168.10.55:3000/newevent",
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
                //this.newEvent(req.body, res)
                res.status(201).send(response.data);
            })
            .catch(error => {
                res.status(500).send(error.message);
            });
    };

    newEvent(req: TypedRequestBody<any>, res: Response) {

        if (req.body.event == 'messages.upsert') {
            let formatadoMsg = ChatModel.formatarMensagem(req.body.data)
            formatadoMsg.instance = req.body.instance;
            console.log(formatadoMsg);

            const dataChat = ChatModel.conveterPadraoBanco(formatadoMsg)

            console.log(dataChat);
            
            let instance = new Chat();
           //instance.save(dataChat);

           
        }
        res.status(200).send();
    };

}

export const webhookRouter = Router();

const controller = new WebhookController();

webhookRouter.post('/', controller.newEvent);

export default webhookRouter;
