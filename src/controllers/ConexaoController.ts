import { NextFunction, Response, Router } from "express";
import { TypedRequestBody } from "./common/Controller";

export class ConexaoController {
    post (req: TypedRequestBody<any>, res: Response, next: NextFunction) {
        res.status(201).send('Requisição POST recebida com sucesso!');
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

conexaoRouter.post('/conectarPOST', controller.post)
conexaoRouter.put('/conectarput', controller.post)
conexaoRouter.delete('/conectardel', controller.post)

export default conexaoRouter;