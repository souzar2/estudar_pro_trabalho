
export class ChatModel {
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

    constructor(chat?: Object) {
        if (chat != undefined) {
            Object.keys(chat).forEach((key) => {
                this[key] = chat[key];
            });
        }
    }

    static formatMsgs(msg: any[]) {
        return msg.map((msg) => this.formatPorTipo(msg));
    }

    private static formatPorTipo(msg: any) : ChatModel {
        
        let model = this.formatBase(msg);

        switch (model.messageType) {
            case "conversation":
                model.text = msg.message.conversation;
                break;
            case "extendedTextMessage":
                model.text = msg.message.extendedTextMessage.text;
                break;
            case "imageMessage":
                this.fromImageMessageFormat(model, msg);
                break;
            case "strickerMessage":
                this.fromStickerMessageFormat(model, msg);
                break;
            case "audioMessage":
                    this.fromAudioFormat(model, msg);
                    break;
            case "locationMessage":
                    this.fromLocationFormat(model, msg);
                    break;
            case "videoMessage":
                model.messageType = 'video';
                model.thumb = 'data:image/jpg;base64,' + msg.message.videoMessage.jpegThumbnail;
                //this.getImagemBase64FromId(msg);
                break;
            default: msg.text = undefined;
        }

        return model;
    }

    private static getText(): ChatModel {
        return new ChatModel();
    }

    private static fromImageMessageFormat(model: ChatModel, toFormat: any) {
            model.text = toFormat.message.caption;
            model.thumb = 'data:image/jpg;base64,' + toFormat.message.imageMessage.jpegThumbnail;
    }

    private static fromStickerMessageFormat(model: ChatModel, toFormat: any) {
        model.thumb = '';
    }

    private static fromAudioFormat(model: ChatModel, toFormat: any) {
        model.text = ''
    }

    private static fromLocationFormat(model: ChatModel, toFormat: any) {
        model.thumb = 'data:image/jpg;base64,' + toFormat.message.locationMessage.jpegThumbnail;
    }

    private static formatBase(msg: any): ChatModel {
        const model: ChatModel = new ChatModel({
            remoteJid: msg.key.remoteJid,
            fromMe: msg.key.fromMe,
            id: msg.key.id,
            pushName: msg.pushName,
            messageType: msg.messageType,
            message: msg.message,
            messageTimestamp: msg.messageTimestamp,
        });

        return model;
    }
}