import { ChatModel } from "../../models/chat.model";

export class ChatService{

    constructor( ) { }
      

separaTipoMsg(msg: ChatModel) {
    switch (msg.messageType) {
        case "conversation":
            msg.text = msg.message.conversation;
            break;
        case "extendedTextMessage":
            msg.text = msg.message.extendedTextMessage.text;
            break;
        case "imageMessage":
            if (msg.pushName == "") {
                msg.imagemBase64 = 'data:image/jpg;base64,' + msg.message.imageMessage.jpegThumbnail
                msg.text = msg.message.caption
            } else {
                msg.imagemBase64 = 'data:image/jpg;base64,' + msg.message.base64;
            }

            break;
        case "stickerMessage":
            msg.text = "Sticker img";
            break;
        default: msg.text = "Arquivo";
    }
}
}

/*

export class InstanceService {
  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }
  
  listarIntancias() : Observable<any>{
    console.log(this.auth.getHeaders());
    
    return this.http.get(`${enviroment.apiUrl}fetchInstances/`, { headers: this.auth.getHeaders()});
  }* */