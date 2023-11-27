import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Generated, Column, BaseEntity } from "typeorm"

@Entity()
export class Empresa{

    @PrimaryColumn()
    CNPJ: number 

    @Column()
    @Generated()
    id_empresa: number

    @Column()
    nome: string

    @Column()
    status: boolean

}
