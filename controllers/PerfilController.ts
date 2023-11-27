
import { TypedRequestBody } from "../src/controllers/common/controller";

import { Perfil } from "../src/entity/Perfil";
import { NextFunction, Response } from "express";
import { AppDataSource } from "../src/data-source";

export class EmpresaController {
    save(req: TypedRequestBody<Perfil>, res: Response, next: NextFunction){
        AppDataSource.getRepository(Perfil).save(req.body).then( perfil => {
            res.status(200).send(perfil)
        }).catch(error => next(error))
    }
}
