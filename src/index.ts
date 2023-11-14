import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import express = require("express")
import cors = require("cors")

AppDataSource.initialize().then(async () => {

    const app =  express()
    app.use(cors())
    app.use(express.json())
    
    app.get('/teste', (req, res, nex)=>{
        res.send('asdasfadsa')
    })
    
    
    app.listen(8000, ()=>{

    })
}).catch(error => console.log(error))
