import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name:'clientes'})
export class Clientes{
    @PrimaryColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    celular1: string;
}