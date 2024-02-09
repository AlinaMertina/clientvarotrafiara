
class Message {
    constructor(idmessage, from,idconversation,content,creat_at) {
      this.idmessage = idmessage;
      this.from = from;
      this.idconversation = idconversation;
      this.content = content;
      this.create_at = creat_at;
    }
}
export default Message;