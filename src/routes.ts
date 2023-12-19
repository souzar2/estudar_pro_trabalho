import { Router } from 'express'
import conexaoRouter from './controllers/conexaoController';
import { UsuarioController } from '../controllers/UsuarioController';
import { ContatoController } from '../controllers/ContatoController';
import { EmpresaController } from '../controllers/Empresa.Controller';
import { ChatController } from './controllers/categorias/chatController';


export const router = Router();
router.use('/conexao', conexaoRouter)
router.post('/contato', new ContatoController().save)
router.post('/newchat', new ChatController().saveMessagesFromWebhook)
router.post('/empresa', new EmpresaController().save)
 
export default router;