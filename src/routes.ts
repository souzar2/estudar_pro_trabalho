import { Router } from 'express'
import conexaoRouter from './controllers/conexaoController';
import { UsuarioController } from '../controllers/UsuarioController';
import { ContatoController } from '../controllers/ContatoController';
import { EmpresaController } from '../controllers/Empresa.Controlelr';


export const router = Router();
router.use('/conexao', conexaoRouter)
router.post('/contato', new ContatoController().save)
router.post('/empresa', new EmpresaController().save)
 
export default router;