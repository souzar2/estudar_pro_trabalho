import { NextFunction, Response, Router } from "express";
import { TypedRequestBody } from "./common/Controller";
import { Headers } from "./common/Headers";

import express = require("express")
import cors = require("cors")
const path = require('path')


//Instance Controller
export class ConexaoController {
    postCreateInstance (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const axios = require('axios');
        const apiUrl = 'http://localhost:8000/instance/create';
        const key = 'B6D711FCDE4D4FD5936544120E713976';

        const apiConfig = {
            instanceName: 'aaaaaa',
            token: 'bbbbbbbb',
            qrcode: true,
        };

        const headers = {
            'Content-Type': 'application/json',
            'apikey': key
        }
        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    getConnectionStatus (req: TypedRequestBody<any>, res: Response, next: NextFunction) {

        const app =  express()
        const port = 3000;
        app.use(cors())
        app.use(express.json())

        const axios = require('axios');
        const key = 'B6D711FCDE4D4FD5936544120E713976';

        const apiUrl = 'http://localhost:8000/instance/connectionState/aaaaaa';
     

        const headers = {
            'Content-Type': 'application/json',
            'apikey': key
        }
        
        axios.get(apiUrl, { Headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });

    };

    getFetchInstances (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const axios = require('axios');
        const apiUrl = 'http://localhost:8000/instance/fetchInstances';
        const key = 'B6D711FCDE4D4FD5936544120E713976';

        const headers = {
            'Content-Type': 'application/json',
            'apikey': key
        }

        axios.get(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    putRestartConnection (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const axios = require('axios');
        const key = 'B6D711FCDE4D4FD5936544120E713976';

        const apiConfig = {
            instanceName: 'aaaaaa',
            token: 'bbbbbbbb',
            qrcode: true,
        };

        const apiUrl = 'http://localhost:8000/instance/restart/aaaaaa';

        const headers = {
            'Content-Type': 'application/json',
            'apikey': key
        }

        axios.put(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    deleteLogoutInstance (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const axios = require('axios');
        const key = 'B6D711FCDE4D4FD5936544120E713976';


        const apiUrl = 'http://localhost:8000/instance/logout/aaaaaa';

        const headers = {
            'Content-Type': 'application/json',
            'apikey': key
        }

        axios.delete(apiUrl, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };

    deleteInstance (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        const axios = require('axios');
        const key = 'B6D711FCDE4D4FD5936544120E713976';


        const apiUrl = 'http://localhost:8000/instance/delete/aaaaaa';

        const headers = {
            'Content-Type': 'application/json',
            'apikey': key
        }

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
        const axios = require('axios');
        const apiUrl = 'http://localhost:8000/message/sendText/aaaaaa';
        const key = 'B6D711FCDE4D4FD5936544120E713976';
        

        const apiConfig = {
            instanceName: 'aaaaaa',
            number: "5563981133108",
            token: 'gvhwsbva',
            qrcode: true,
            options: {
                delay: 1200,
                presence: "composing",
                linkPreview: false
            },
            textMessage: {
                text: 
                "Texto da mensagem etc etc\n\n😉🤣🤩🤝👏👍🙏"
            }
        };

        const headers = {
            'Content-Type': 'application/json',
            'apikey': key
        }

        axios.post(apiUrl, apiConfig, { headers })
        .then(response => {
            res.status(201).send(response.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    };


    put (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        res.status(201).send('Requisição PUT recebida com sucesso!');
    };



    delete  (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        res.status(201).send('Requisição DEL recebida com sucesso!');
    };
}
export const conexaoRouter = Router();

const controller = new ConexaoController();

//Instance Controller
conexaoRouter.post('/ceateInstance', controller.postCreateInstance)
conexaoRouter.get('/connectionStatus', controller.getConnectionStatus)
conexaoRouter.get('/fetchInstances', controller.getFetchInstances)
conexaoRouter.put('/restartConnection', controller.putRestartConnection)
conexaoRouter.delete('/logoutInstance', controller.deleteLogoutInstance)
conexaoRouter.delete('/deleteInstance', controller.deleteInstance)


//Send Message Controller
conexaoRouter.post('/sendMessageText', controller.postSendMessageText)

conexaoRouter.put('/conectarPUT', controller.put)
conexaoRouter.delete('/conectarDEL', controller.delete)

export default conexaoRouter;