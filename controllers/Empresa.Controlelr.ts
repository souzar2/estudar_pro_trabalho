
import { TypedRequestBody } from "../src/controllers/common/controller";

import { Empresa } from "../src/entity/Empresa";
import { NextFunction, Response } from "express";
import { AppDataSource } from "../src/data-source";

export class EmpresaController {
    save(req: TypedRequestBody<Empresa>, res: Response, next: NextFunction){
        AppDataSource.getRepository(Empresa).save(req.body).then( empresa => {
            res.status(200).send(empresa)
        }).catch(error => next(error))
    }
}
