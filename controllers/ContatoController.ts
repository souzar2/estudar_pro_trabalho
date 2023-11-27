
import { TypedRequestBody } from "../src/controllers/common/controller";

import { Contato } from "../src/entity/Contato";
import { NextFunction, Response } from "express";
import { AppDataSource } from "../src/data-source";

export class ContatoController {
    save(req: TypedRequestBody<Contato>, res: Response, next: NextFunction){
        AppDataSource.getRepository(Contato).save(req.body).then( contato => {
            res.status(200).send(contato)
        }).catch(error => next(error))
    }
}
