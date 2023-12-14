import { AppDataSource } from "./data-source"
import express = require("express")
import cors = require("cors")
import router from "./routes";
import 'reflect-metadata'
import LoginRouter, { LoginController } from "./controllers/loginController";
import { AppDataSource_vrp } from "./data-souce-vrp";
import ClientesRouter from "./controllers/contatoClientesController";
import bodyParser = require("body-parser");

AppDataSource_vrp.initialize().then(async () => {
    AppDataSource.initialize().then(async () => {
        const app = express();
        const port = 3000;
        app.use(cors());
        app.use(express.json({limit:'50mb'}));
        app.use('/login', LoginRouter);
        app.use('/clientes', ClientesRouter);

        app.use(new LoginController().verifyToken, router);


        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        })

    }).catch(error => console.log(error));

}).catch(error => console.log(error));