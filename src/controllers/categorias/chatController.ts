import { Response, Router } from "express";
import { TypedRequestBody, urlBase, headers } from "../common/controller";
import { ChatModel } from "../../../models/chat.model";
import { Chat } from "../../entity/Chat";
import { NextFunction } from "express"
import { AppDataSource } from "../../data-source";

//import express = require("express")
const axios = require('axios');

var urlCategoriarequest = 'chat/'


export class ChatController {
    
    static repository = {
        user: AppDataSource.getRepository(Chat),
    }

    public saveMessagesFromWebhook(req: TypedRequestBody<Chat>, res: Response, next: NextFunction) {
        const et = new Chat();
        et.save(req.body).then(chat => {
            res.status(200).send(chat)
        }).catch(error => next(error));
    }

    FindMessagesFromDB(req: TypedRequestBody<any>, res: Response, next: any) {
        ChatController.repository.user.find({
            select: ['remoteJid','fromMe', 'id', 'pushName', 'text', 'messageType', 'messageTimestamp', 'thumb', 'instance', 'chatWith'],
            order: { messageTimestamp: "DESC" },
        })
            .then(u => {
                res.status(200).send(u);
            }).catch(err => next(err));
    }

    postIsWhatsApp(req: TypedRequestBody<any>, res: Response) {
        const apiUrl = urlBase + urlCategoriarequest + 'whatsappNumbers/' + req.params.instance;
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
    postfindMessages(req: TypedRequestBody<any>, res: Response) {
        const apiUrl = urlBase + urlCategoriarequest + 'findMessages/' + req.params.instance;
        console.log(req.params.instance);
        

        axios.post(apiUrl, {order:{messageTimestamp: "ASC"}}, { headers })

            .then((response: any) => {
                //res.status(201).send(response.data);
                res.status(201).send(ChatModel.formatarMensagens(response.data));//.sort((a, b) => a.messageTimestamp > b.messageTimestamp));
            })
            .catch(error => {
                res.status(500).send(error.message);
            });
        /*
         static repository = {
         user: AppDataSource_vrp.getRepository(Clientes),
     }
  
     GetContatos(req: TypedRequestBody<any>, res: Response, next: any) {
         const page: number = req.body.page || 1; 
         const pageSize: number = req.body.pageSize || 0;  
         const skip = (page - 1) * pageSize;
         var nomePesquisa: string = req.body.pesquisaNome;
         
         if(pageSize==0){
             contatoClientesController.repository.user.find({ 
                 select: ['id', 'nome', 'celular1'],
                 order: { id: "ASC" },
                 where: {celular1: Not(IsNull()) && Not(''),
             }
                })
                 .then(u => {
                      res.status(200).send(u);
                 }).catch(err => next(err));
         }else{
         contatoClientesController.repository.user.find({ 
             select: ['id', 'nome', 'celular1'],
             order: { nome: "ASC" },
             skip: skip,
             take: pageSize,
             where: {celular1: Not(IsNull()) && Not(''),
                     nome: ILike(`%${nomePesquisa}%`),
                     },})
             .then(u => {
                  res.status(200).send(u);
             }).catch(err => next(err));
     }}
 }
 * */

    };

    postBase64MediaMessage(req: TypedRequestBody<any>, res: Response) {

        const apiUrl = urlBase + urlCategoriarequest + 'getBase64FromMediaMessage/' + req.params.instance;
        const apiConfig = {
            message: {
                key: {
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