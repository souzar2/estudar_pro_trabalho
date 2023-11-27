import { AppDataSource } from "../src/data-source"
import { Contato } from "../src/entity/Contato"

export const contatoRepositorio= AppDataSource.getRepository(Contato)