import { AppDataSource } from "./data-source"
import express = require("express")
import cors = require("cors")
import router from "./routes";
const path = require('path')


AppDataSource.initialize().then(async () => {
    
    const app =  express()
    const port = 3000;
    app.use(cors())
    app.use(express.json())
    app.use(router)

    // app.get('/teste', (req, res, nex)=>{
    //     res.send('asdasfadsa')
    // })

    // app.get('/teste/:nome', (req, res, nex)=>{
    //     res.send('oi, '+req.params.nome)
    // })

    app.get('/connect', (req, res, nex)=>{
        res.sendFile(path.join(__dirname, '../', 'views', 'connect.html'))
        
    })
    
    app.listen(port, ()=>{
        console.log(`Servidor rodando em http://localhost:${port}`);
    })



}).catch(error => console.log(error));

