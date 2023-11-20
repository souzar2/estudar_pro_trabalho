import { NextFunction, Response, Router } from "express";
import { TypedRequestBody, urlBase } from "../common/controller";
import { headers } from "../common/controller";

import express = require("express")
const axios = require('axios');

var urlCategoriarequest = 'chat/'

export class ChatController {

    postIsWhatsApp (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
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
}


export const chatRouter = Router();
export default chatRouter;