import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Permissoes{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    descricao: string

    @Column()
    ativo: boolean // é necessário validar

}