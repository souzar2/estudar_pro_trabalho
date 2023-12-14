import { Router } from "express";
import express = require("express")
import { InstanceController } from "./categorias/instanceControllers";
import { SendMessageController } from "./categorias/sendMessageController";
import { ChatController } from "./categorias/chatController";
import { WebhookController } from "./categorias/webhookController";
const axios = require('axios');


export const conexaoRouter = Router();

const controllerInstance = new InstanceController
const controllerSendMessage = new SendMessageController
const controllerChat = new ChatController
const controllerWebhook = new WebhookController

//Instance Controller
conexaoRouter.post('/createInstance/', controllerInstance.postCreateInstance)
conexaoRouter.get('/reconnectInstance', controllerInstance.getInstanceConnect)
conexaoRouter.get('/connectionStatus/:instance', controllerInstance.getConnectionStatus)
conexaoRouter.get('/fetchInstances', controllerInstance.getFetchInstances)
conexaoRouter.put('/restartConnection/:instance', controllerInstance.putRestartConnection)
conexaoRouter.delete('/logoutInstance/:instance', controllerInstance.deleteLogoutInstance)
conexaoRouter.delete('/deleteInstance/:instance', controllerInstance.deleteInstance)

//Send Message Controller
conexaoRouter.post('/sendMessageText/:instance', controllerSendMessage.postSendMessageText)
conexaoRouter.post('/sendImgBase64/:instance', controllerSendMessage.postsendImageMediaBase64)
conexaoRouter.post('/sendMessageReplyQuoteText/:instance', controllerSendMessage.postSendReplyQuoteText)
conexaoRouter.post('/sendVoiceAudio/:instance', controllerSendMessage.postsendAudioVoiceBase64)
/*conexaoRouter.post('/sendMentionText/:instance', controllerSendMessage.postSendMentionText)
conexaoRouter.post('/sendStatusText/:instance', controllerSendMessage.postSendStatusText)
conexaoRouter.post('/sendStatusIMG/:instance', controllerSendMessage.postSendStatusImg)
conexaoRouter.post('/sendStatusAudio/:instance', controllerSendMessage.postSendStatusAudio)
conexaoRouter.post('/postsendMediaURL/:instance', controllerSendMessage.postsendMediaURL)*/

//Chat Controller
conexaoRouter.post('/isWhatsApp/:instance', controllerChat.postIsWhatsApp)
conexaoRouter.post('/getmessages/:instance', controllerChat.postfindMessages)
conexaoRouter.post('/getBase64MediaMessage/:instance', controllerChat.postBase64MediaMessage)

//WebHook
conexaoRouter.post('/setwebhook/:instance', controllerWebhook.postSetWebHook)
conexaoRouter.post('/newevent', controllerWebhook.newEvent)

export default conexaoRouter;

