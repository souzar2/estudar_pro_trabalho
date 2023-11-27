import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TipoUsuario {
    ADMINISTRADOR= 'Administrador',
    OPERADOR= 'Operador'
}

@Entity({name:'usuarios'})
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    senha: string;
    @Column({enum: TipoUsuario, nullable: true})
    tipo: TipoUsuario;
}