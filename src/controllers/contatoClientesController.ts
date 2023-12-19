import { AppDataSource_vrp } from "../data-souce-vrp";
import { TypedRequestBody } from "./common/controller";
import { Request, Response, Router } from "express";
import { ILike, IsNull, Not } from "typeorm";
import { Clientes } from "../entityVt/Clientes";

export class contatoClientesController {
    static repository = {
        user: AppDataSource_vrp.getRepository(Clientes),
    }

    GetContatos(req: TypedRequestBody<any>, res: Response, next: any) {
        const page: number = req.body.page || 1; 
        const pageSize: number = req.body.pageSize || 0;  
        const skip = (page - 1) * pageSize;
        var pesquisa: string = req.body.pesquisaNome;

        if(pageSize==0){
            contatoClientesController.repository.user.find({ 
                select: ['id', 'nome', 'celular1'],
                order: { id: "ASC" },
                where: {celular1: Not(IsNull()) && Not(''),
            }
               })
                .then(u => {
                     res.status(200).send(u);
                }).catch(err => next(err));
        }else{
        contatoClientesController.repository.user.find({ 
            select: ['id', 'nome', 'celular1'],
            order: { nome: "ASC" },
            skip: skip,
            take: pageSize,
            where: [
                {
                    celular1: Not(IsNull()) && Not(''),
                    nome: ILike(`%${pesquisa}%`)
                },
                {
                    celular1: Not(IsNull()) && Not('') && ILike(`%${pesquisa}%`)
                }
            ],
        })
            .then(u => {
                 res.status(200).send(u);
            }).catch(err => next(err));
    }}
}

export const ClientesRouter = Router();

const controller = new contatoClientesController();

ClientesRouter.post('/', controller.GetContatos);

export default ClientesRouter;