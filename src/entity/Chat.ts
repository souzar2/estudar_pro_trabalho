import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Generated, Column, BaseEntity, CreateDateColumn } from "typeorm"
import { AppDataSource } from "../data-source"

@Entity()
export class Chat {

    @PrimaryGeneratedColumn()
    id_chat: number

    @Column()
    instance: string

    @Column()
    remoteJid: string

    @Column()
    chatWith: string  //Numero do cliente

    @Column()
    fromMe: boolean

    @Column()
    id: string

    @Column()
    pushName: string

    @Column({ nullable: true })
    text: string

    @Column()
    messageType: string

    @Column()
    messageTimestamp: Date

    @Column({ nullable: true })
    thumb: string

    @Column({ nullable: true })
    midia: string

    
    public save(data): Promise<any> {
        return AppDataSource.getRepository(Chat).save(data);
    }

}

/*@Column({ unique: true }) //qual cliente está atendendo o cliente
id_cliente: number
 
@Column()
nome_instancia: string //instancia que está sendo usada para enviar a mensagem

@Column({ unique: true }) //quem está atendendo o cliente
id_atentente: number  

@Column("int", { array: true })
id_mensagens: number[]

@Column() //indica se o cliente ja está sendo atendido pelo suporte
atendido: boolean 


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
    
        
        
        
        remoteJid: string | undefined;
        fromMe: boolean | undefined;
        id: string | undefined;
        pushName: string | undefined;
        text: string | undefined;
        message: any | undefined;
        messageType: string | undefined;
        messageTimestamp: any | undefined;
        thumb: string | undefined;
        midia: string | undefined;
        * */


