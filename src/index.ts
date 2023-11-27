import { AppDataSource } from "./data-source"
import express = require("express")
import cors = require("cors")
import router from "./routes";
import 'reflect-metadata'
import { UsuarioController } from "../controllers/UsuarioController";
import LoginRouter, { LoginController } from "./controllers/loginController";
import { AppDataSource_vrp } from "./data-souce-vrp";
const path = require('path')

AppDataSource_vrp.initialize().then(async () => {
    AppDataSource.initialize().then(async () => {


        const app = express()
        const port = 3000;
        app.use(cors())
        app.use(express.json())

        app.use(new LoginController().VerifyToken, router)
        app.use('/login', LoginRouter)

        app.get('/connect', (req, res, nex) => {
            res.sendFile(path.join(__dirname, '../', 'views', 'connect.html'))
        })

        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        })


    }).catch(error => console.log(error));

}).catch(error => console.log(error));