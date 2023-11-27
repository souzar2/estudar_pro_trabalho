import { TypedRequestBody } from "../src/controllers/common/controller";

import { Permissoes } from "../src/entity/Permissoes";
import { NextFunction, Response } from "express";
import { AppDataSource } from "../src/data-source";

export class UsuarioController {
    save(req: TypedRequestBody<Permissoes>, res: Response, next: NextFunction){
        AppDataSource.getRepository(Permissoes).save(req.body).then( permissoes => {
            res.status(200).send(permissoes)
        }).catch(error => next(error))
    }
}
