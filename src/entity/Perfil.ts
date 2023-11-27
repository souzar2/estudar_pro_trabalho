import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Perfil{

    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    numero: number

}
