
import { TypedRequestBody } from "../src/controllers/common/controller";

import { Usuario } from "../src/entity/Usuario";
import { NextFunction, Response } from "express";
import { AppDataSource } from "../src/data-source";

export class UsuarioController {
    save(req: TypedRequestBody<Usuario>, res: Response, next: NextFunction){
        AppDataSource.getRepository(Usuario).save(req.body).then( user => {
            res.status(200).send(user)
        }).catch(error => next(error))
    }
}
