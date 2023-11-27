import { AppDataSource_vrp } from "../data-souce-vrp";
import { TypedRequestBody } from "./common/controller";
import { Request, Response, Router } from "express";
import { UserTokenSecuritykey } from "../config/security";
import { ILike } from "typeorm";
import bcrypt = require('bcrypt');
import jwt = require('jsonwebtoken');
import { isValid } from "../service/functionService";
import { VTPassWordEncoder } from "../passwordEncoder";
import { Usuario } from "../entityVt/Usuario";

export class LoginController {
    static repository = {
        user: AppDataSource_vrp.getRepository(Usuario),
    }
    /**
     * 
     * @param req login unico ou email unico do usuário senha em md5
     * @param res 200 + token
     * @param next 
     */
    login(req: TypedRequestBody<{ login: string, senha: string }>, res: Response, next: any) {
            console.log(req.body)
        LoginController.repository.user.findOneOrFail({
            where: { nome: ILike(req.body.login) }
        }).then(user => {
            new VTPassWordEncoder().encode(req.body.senha).then(pass => {
                if (pass === user.senha) {
                    const token = jwt.sign({ name: user.nome }, UserTokenSecuritykey, { expiresIn: '8h' })
                    res.status(200).send({ token: token, expiresIn: '8h' });
                } else {
                    res.status(401).send('Usuário ou senha não confere!')
                }
            }).catch(err => res.status(500).send(err.message))
        }).catch(err => res.status(500).send(err.message))
    }

    /**
     * 
     * @param req login unico do usuário senha em md5 email válido
     * @param res 
     * @param next 
     */
    async SaveUser(req: TypedRequestBody<{ login: string, senha: string, email: string }>, res: Response, next: any) {
        const newUser = LoginController.repository.user.create(req.body);
        bcrypt.genSalt(10).then(salt => {
            console.log(salt);

            bcrypt.hash(newUser.senha, salt).then(hash => {
                newUser.senha = hash;
                LoginController.repository.user.save(newUser).catch(err => next(err))
                res.status(200).send()
            }).catch(err => next(err))
        }).catch(err => next(err))
    }

    // async UpdateUser(req: TypedRequestBody<Usuario>, res: Response, next: any) {
    //     const newUser = LoginController.repository.user.findOneOrFail({ where: { id_empresa: req.body.id_empresa } }).then(() => {
    //         LoginController.repository.user.save(req.body);
    //         res.status(200).send();
    //     }).catch(err => res.status(404).send(`Usuário não encontrado: ${err.message}`));

    // }

    /**
     * @description Filtro do token JWT
     * @param req 
     * @param res 
     * @param next 
     * @returns 
     */
    VerifyToken(req: TypedRequestBody<{ userLogin: string }>, res: Response, next: any) {
        var token = req.get('Authorization');

        if (!token) return res.status(400).send('Authorization token must be provided!');

        token = token.replace('Bearer ', '');

        const verify = jwt.verify(token, UserTokenSecuritykey, (err, decoded) => {
            if (err) res.status(401).send(`Authentication Failed! \n${err}`);
            req.body.userLogin = (decoded as jwt.JwtPayload).name;
            next();
        })
    }

    // GetUserByToken(req: TypedRequestBody<{ userLogin: string }>, res: Response, next: any) {
    //     if (!isValid(req.body.userLogin)) {
    //         res.status(401).send('User token not found!');
    //     }

    //     LoginController.repository.user.findOneOrFail({ where: { login: req.body.userLogin } }).then(u => {
    //         if (isValid(u)) {
    //             res.status(200).send({
    //                 id_empresa: u.id_empresa,
    //                 login: u.login,
    //                 email: u.email,
    //                 perfil: u.perfil,

    //             })
    //         } else {
    //             throw new Error('User not Found!')
    //         }
    //     }).catch(err => next(err))

    // }

    // GetAllUsers(req: TypedRequestBody<any>, res: Response, next: any) {
    //     LoginController.repository.user.find({ select: ['id_empresa', 'login', 'email', 'perfil'], order: { id_empresa: "ASC" } }).then(u => {
    //         res.status(200).send(u);
    //     }).catch(err => next(err));
    // }

}

export const LoginRouter = Router();

const controller = new LoginController();

LoginRouter.post('/', controller.login);
// LoginRouter.get('/', controller.VerifyToken);

export default LoginRouter; 
