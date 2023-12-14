import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Setores{

    @PrimaryGeneratedColumn()
    id_setor: number 

    @Column()
    nome_setor: string

}
