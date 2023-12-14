import { Response, Router } from "express";
import { TypedRequestBody, urlBase, headers } from "../common/controller";
import { ChatModel } from "../../../models/chat.model";

//import express = require("express")
const axios = require('axios');

var urlCategoriarequest = 'chat/'


export class ChatController {

    

    postIsWhatsApp (req: TypedRequestBody<any>, res: Response) {
        const apiUrl = urlBase+urlCategoriarequest+'whatsappNumbers/'+req.params.instance;
        const apiConfig = {
            numbers: [
                "55911111111",
                "55922222222",
                "55933333333",
                "55944444444",
                "55955555555"
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
/*
    postfindMessages (req: TypedRequestBody<any>, res: Response) {
        const apiUrl = urlBase+urlCategoriarequest+'findMessages/'+req.params.instance;
        const apiConfig = { }
        axios.post(apiUrl, apiConfig, { headers })
            .then(response => {
                const modeloChat = new ChatModel();
                modeloChat.remoteJid = response.data.key.remoteJid;
                modeloChat.fromMe = response.data.key.fromMe;
                modeloChat.id = response.data.key.id;
                modeloChat.pushName = response.data.pushName;
                modeloChat.messageType = response.data.messageType;
                modeloChat.message = response.data.message;
                modeloChat.messageTimestamp = response.data.messageTimestamp

                if(response.data.messageType == "conversation")
                console.log(response);
                  
                res.status(201).send(modeloChat);
            })
            .catch(error => {
                res.status(500).send("OI"+error.message);
            });
};

 /** */
    postfindMessages (req: TypedRequestBody<any>, res: Response) {
        const apiUrl = urlBase+urlCategoriarequest+'findMessages/'+req.params.instance;

        axios.post(apiUrl, {}, { headers })
        
        .then((response: any) => {
            res.status(201).send(ChatModel.formatMsgs(response.data));
        }) 
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    postBase64MediaMessage (req: TypedRequestBody<any>, res: Response) {
    
        const apiUrl = urlBase+urlCategoriarequest+'getBase64FromMediaMessage/'+req.params.instance;
        const apiConfig = {
            message: {
                key:{
                    id: req.body.id
                }
            },
        }
        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };
}


export const chatRouter = Router();
export default chatRouter;