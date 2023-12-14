import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Generated, Column, BaseEntity, CreateDateColumn } from "typeorm"

@Entity()
export class Chat{

    @PrimaryGeneratedColumn()
    id_chat: number 

    @Column({ unique: true }) //qual cliente está atendendo o cliente
    id_cliente: number
    
    @Column()
    nome_instancia: string //instancia que está sendo usada para enviar a mensagem

    @Column({ unique: true }) //quem está atendendo o cliente
    id_atentente: number  

    @Column("int", { array: true })
    id_mensagens: number[]

    @Column() //indica se o cliente ja está sendo atendido pelo suporte
    atendido: boolean 

    
}
