import { Router } from 'express'
import conexaoRouter from './controllers/conexaoController';


export const router = Router();
router.use('/conexao', conexaoRouter)
export default router;