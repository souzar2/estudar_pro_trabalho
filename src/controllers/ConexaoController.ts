import { NextFunction, Response, Router } from "express";
import { TypedRequestBody } from "./common/Controller";

import express = require("express")
const axios = require('axios');

const headers = {
    'Content-Type': 'application/json',
    'apikey': 'B6D711FCDE4D4FD5936544120E713976'
}


//Instance Controller
export class ConexaoController {
    postCreateInstance (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/instance/create';
         
        const apiConfig = {
            instanceName: '1',
            token: '2',
            qrcode: true,
        };

        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    getInstanceConnect (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/instance/connect/aaaaaa';

        const apiConfig = {
            instanceName: '1',
            token: '2',
            qrcode: true,
        };

        axios.get(apiUrl,  { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });

    };

    getConnectionStatus (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/instance/connectionState/aaaaaa';

        axios.get(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });

    };

    getFetchInstances (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/instance/fetchInstances';
         
        axios.get(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    putRestartConnection (req: TypedRequestBody<any>, res: Response, next: NextFunction) {

        const apiConfig = {
            instanceName: 'aaaaaa',
            token: 'bbbbbbbb',
            qrcode: true,
        };

        const apiUrl =  'http://localhost:8000/instance/restart/aaaaaa';

        axios.put(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    deleteLogoutInstance (req: TypedRequestBody<any>, res: Response, next: NextFunction) {

        const apiUrl = 'http://localhost:8000/instance/logout/1';

        axios.delete(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    deleteInstance (req: TypedRequestBody<any>, res: Response, next: NextFunction) {

        const apiUrl = 'http://localhost:8000/instance/delete/aaaaaa';

        axios.delete(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };


    //Send Message Controller
    postSendMessageText (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/message/sendText/aaaaaa';

        const apiConfig = {
            //number: {{groupJid}}
            number: "5563981133108",
            options: {
                delay: 1200,
                presence: "composing",
                linkPreview: false
            },
            textMessage: {
                text: 
                "Texto da mensagem enviado pela API do whatsapp\n\n😉🤣🤩🤝👏👍🙏"
            }
        };

        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    postSendReplyQuoteText (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/message/sendText/1';

        const apiConfig = {
            //number: {{groupJid}}
            number: "5563981133108",
            options: {
                delay: 1200,
                presence: "composing",
                quoted: {
                    key: {
                        remoteJid: "{{remoteJid}}@s.whatsapp.net",
                        fromMe: true,
                        id: "BAE5B4A2BDFEEFE3",
                        participant: ""
                    },
                    message: {
                        conversation: "Texto da mensagem enviado pela API do whatsapp\n\n😉🤣🤩🤝👏👍🙏"
                    }
                }
            },
            textMessage: {
                text: 
                "Reply quote text message, sent with the *Evolution-API* 🚀.\n\nHere you can send texts in *bold*, _italic_, ~strikethrough~ and ```monospaced```.\n\nYou can also use any available emoticon on WhatsApp, like these examples below:\n\n😉🤣🤩🤝👏👍🙏"
            }
        };

        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    postSendMentionText (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/message/sendText/1';

        const apiConfig = {
            //number: {{groupJid}}
            number: "5563981133108",
            options: {
                delay: 1200,
                presence: "composing",
                mentions: {
                    everyOne: false,
                    mentioned: [
                        "5563981133108"
                    ]
                }
            },
            textMessage: {
                text: 
                "Reply quote text message, sent with the *Evolution-API* 🚀.\n\nHere you can send texts in *bold*, _italic_, ~strikethrough~ and ```monospaced```.\n\nYou can also use any available emoticon on WhatsApp, like these examples below:\n\n😉🤣🤩🤝👏👍🙏"
            }
        };

        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    postSendStatusText (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/message/sendStatus/1';

        const apiConfig = {
            statusMessage: {
                type: "text", /* text */
                content: "Hi, how are you today?", /* text or url */
                backgroundColor: "#FFFFFF", /* Optional for text only. Accepts any color code. Examples:
                                                 #FFFFFF = White
                                                 #0000FF = Blue
                                                 #008000 = Green
                                                 #FFFF00 = Yellow
                                                 #FF0000 = Red
                                                 #800080 = Purple
                                                 #808080 = Gray
                                                 #FFC0CB = Pink */
                font: 1, /* Optional for text only. Accept the options below:
                              1 = SERIF
                              2 = NORICAN_REGULAR
                              3 = BRYNDAN_WRITE
                              4 = BEBASNEUE_REGULAR
                              5 = OSWALD_HEAVY */
                allContacts: false, /* true to send to all contacts or
                                       false to send to statusJidList below */ 
                statusJidList: [
                    //"{{remoteJid}}@s.whatsapp.net"
                    "5563981133108@s.whatsapp.net"
                ]
            }
        };

        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    postSendStatusImg (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/message/sendStatus/1';
    
        const apiConfig = {
            statusMessage: {
                    type: "image", /* text */
                    content: "https://evolution-api.com/files/evolution-api.jpg", /* text or url */
                    caption: "This is my status/storie image", /* Optional for image or video */
                   
                    allContacts: false, /* true to send to all contacts or
                                           false to send to statusJidList below */ 
                    statusJidList: [
                        //"{{remoteJid}}@s.whatsapp.net"
                        "5563981133108@s.whatsapp.net"
                    ]
                }
            };

        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    postSendStatusAudio (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/message/sendStatus/1';
    
        const apiConfig = {
            statusMessage: {
                    type: "audio", /* text */
                    content: "https://evolution-api.com/files/narratedaudio.mp3", /* text or url */
                    
                    allContacts: false, /* true to send to all contacts or
                                           false to send to statusJidList below */ 
                    statusJidList: [
                        //"{{remoteJid}}@s.whatsapp.net"
                        "5563981133108@s.whatsapp.net"
                    ]
                }
            };

        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    postsendMediaURL (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/message/sendMedia/1';
    
        const apiConfig = {
            //number: "{{remoteJid}}",
            number: "5563981133108",
            options: {
                delay: 1200,
                presence: "composing"
            },
            mediaMessage: {
                mediatype: "image",
                caption: "This is an example JPG image file sent by Evolution-API via URL.",
                media: "https://evolution-api.com/files/evolution-api.jpg"
            }
        }
        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };


    //Chat Controller

    postIsWhatsApp (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = 'http://localhost:8000/chat/whatsappNumbers/1';
    
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

export const conexaoRouter = Router();

const controller = new ConexaoController();

//Instance Controller
conexaoRouter.post('/ceateInstance', controller.postCreateInstance)
conexaoRouter.get('/reconnectInstance', controller.getInstanceConnect)
conexaoRouter.get('/connectionStatus', controller.getConnectionStatus)
conexaoRouter.get('/fetchInstances', controller.getFetchInstances)
conexaoRouter.put('/restartConnection', controller.putRestartConnection)
conexaoRouter.delete('/logoutInstance', controller.deleteLogoutInstance)
conexaoRouter.delete('/deleteInstance', controller.deleteInstance)


//Send Message Controller
conexaoRouter.post('/sendMessageText', controller.postSendMessageText)
conexaoRouter.post('/sendMessageReplyQuoteText', controller.postSendReplyQuoteText)
conexaoRouter.post('/sendMentionText', controller.postSendMentionText)
conexaoRouter.post('/sendStatusText', controller.postSendStatusText)
conexaoRouter.post('/sendStatusIMG', controller.postSendStatusImg)
conexaoRouter.post('/sendStatusAudio', controller.postSendStatusAudio)
conexaoRouter.post('/postsendMediaURL', controller.postsendMediaURL)

//Chat Controller
conexaoRouter.post('/isWhatsApp', controller.postIsWhatsApp)


export default conexaoRouter;