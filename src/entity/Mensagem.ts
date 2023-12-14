import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Generated, Column, BaseEntity, CreateDateColumn } from "typeorm"
import { StatusMsgEnum } from "../enums/statusMsgEnum";

@Entity()
export class Mensagem{

    @PrimaryGeneratedColumn()
    id_mensagem: number 

    @Column()
    texto_mensagem: string

    @CreateDateColumn({ type: "timestamp without time zone", default: () => "CURRENT_TIMESTAMP" })
    data_envio: string;

    @Column()
    remetente_id: string

    @Column()
    vizualizada: boolean

    @Column()
    fromMe: boolean

    @Column()  //o cliente ainda nao foi atendido pelo suporte, quando começar o atendimento essa variavel será falsa
    aguardando_atendimento: boolean     //se for true será mostrada em uma tela de clientes ainda nao atendidos

    /*@Column({enum: StatusMsgEnum}) //true para enviada e false para recebida
    enviada_ou_recebida: StatusMsgEnum */ 

    @Column("text", { array: true })
    destinatarios_id: string[]
}
