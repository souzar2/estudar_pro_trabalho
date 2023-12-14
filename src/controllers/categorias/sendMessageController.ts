import { NextFunction, Response, Router } from "express";
import { TypedRequestBody, headers,  gerarDelay, urlBase } from "../common/controller";

import express = require("express")
const axios = require('axios');

var urlCategoriarequest = 'message/'

export class SendMessageController {
    //Send Message Controller
    postSendMessageText (req: TypedRequestBody<any>, res: Response) {
        const apiUrl = urlBase+urlCategoriarequest+'sendText/'+req.params.instance;

        let quoted = req.body.respondendo != undefined ?  {
            key: {
                remoteJid: req.body.number,
                fromMe: true,
            },
            message: {
                conversation: req.body.textMessage.text
            }
        } : undefined;

        const apiConfig = {
            //number: {{groupJid}}
            number: req.body.number,
            options: {
                delay: 1000,
                presence: req.body.options.presence,
                linkPreview: req.body.options.linkPreview,
            },
            textMessage: {
                text: req.body.textMessage.text
            }
        };

        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error.response.data);
        });
    };

    postSendManyMessageText (req: TypedRequestBody<any>, res: Response) {
        const apiUrl = urlBase+urlCategoriarequest+'sendText/'+req.params.instance;

        let quoted = req.body.respondendo != undefined ?  {
            key: {
                remoteJid: req.body.number,
                fromMe: true,
            },
            message: {
                conversation: req.body.textMessage.text
            }
        } : undefined;

        const apiConfig = {
            //number: {{groupJid}}
            number: req.body.number,
            options: {
                delay: gerarDelay(),
                presence: req.body.options.presence,
                linkPreview: req.body.options.linkPreview,
            },
            textMessage: {
                text: req.body.textMessage.text
            }
        };

        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error.response.data);
        });
    };

    postSendReplyQuoteText (req: TypedRequestBody<any>, res: Response) {
        const apiUrl = urlBase+urlCategoriarequest+'sendText/'+req.params.instance;

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
                        conversation: "oi"
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
            res.status(500).send(error.response.data);
        });
    };

    postsendImageMediaBase64 (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = urlBase+urlCategoriarequest+'sendMedia/'+req.params.instance;
    
        const apiConfig = {
            //number: "{{remoteJid}}",
            number: req.body.number,
            options: {
                delay: req.body.options.delay,
                presence: req.body.options.presence
            },
            mediaMessage: {
                mediatype: req.body.mediaMessage.mediatype,
                caption: req.body.mediaMessage.caption,
                media: req.body.mediaMessage.media,
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

    postsendAudioVoiceBase64 (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = urlBase+urlCategoriarequest+'sendWhatsAppAudio/'+req.params.instance;
    
        const apiConfig = {
            //number: "{{remoteJid}}",
            number: req.body.number,
            options: {
                delay: req.body.options.delay,
                presence: req.body.options.presence,
                encoding: true
            },
            audioMessage: {
                audio: req.body.audioBase64,
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
   
    /*
    postSendMentionText (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const apiUrl = urlBase+urlCategoriarequest+'sendText/'+req.params.instance;

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
        const apiUrl = urlBase+urlCategoriarequest+'sendStatus/'+req.params.instance;

        const apiConfig = {
            statusMessage: {
                type: "text",
                content: "Hi, how are you today?", 
                backgroundColor: "#FFFFFF", // Optional for text only. Accepts any color code. Examples:
                                            //     #FFFFFF = White
                                            //     #0000FF = Blue
                                            //     #008000 = Green
                                            //     #FFFF00 = Yellow
                                            //     #FF0000 = Red
                                            //     #800080 = Purple
                                            //     #808080 = Gray
                                            //     #FFC0CB = Pink 
                font: 1, // Optional for text only. Accept the options below:
                            //  1 = SERIF
                            //  2 = NORICAN_REGULAR
                            //  3 = BRYNDAN_WRITE
                            //  4 = BEBASNEUE_REGULAR
                            //  5 = OSWALD_HEAVY 
                allContacts: false // true to send to all contacts or
                                     //  false to send to statusJidList below 
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
        const apiUrl = urlBase+urlCategoriarequest+'sendStatus/'+req.params.instance;
    
        const apiConfig = {
            statusMessage: {
                    type: "image", // text 
                    content: "https://evolution-api.com/files/evolution-api.jpg", // text or url 
                    caption: "This is my status/storie image", // Optional for image or video 
                   
                    allContacts: false, // true to send to all contacts or
                                        //   false to send to statusJidList below  
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
        const apiUrl = urlBase+urlCategoriarequest+'sendStatus/'+req.params.instance;
    
        const apiConfig = {
            statusMessage: {
                    type: "audio", // text 
                    content: "https://evolution-api.com/files/narratedaudio.mp3", // text or url
                    
                    allContacts: false, // true to send to all contacts or
                                        //   false to send to statusJidList below  
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
        const apiUrl = urlBase+urlCategoriarequest+'sendMedia/'+req.params.instance;
    
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
*/
}

export const messageRouter = Router();
export default messageRouter;