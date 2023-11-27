import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Contato{

    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    nome: string

    @Column()
    num_identificacao: string // é necessário validar

}
