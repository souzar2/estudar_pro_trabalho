import { Router } from 'express'
import conexaoRouter, { ConexaoController } from './controllers/ConexaoController';


export const router = Router();
router.use('/conexao', conexaoRouter)

export default router;