const messageSchema = require("../model/messegemd");
module.exports = class Message{
    constructor(props){
        this.props = props
    }
    async create(data){
        const {id,replyname,content} = data;
        let ms = new messageSchema({
            id:id,replyname:replyname,content:content
        });
        await ms.save(
            function(err){
                if (err) {
                    console.log(err);
                    
                } else {
                    console.log(err);
                    
                }
            }
        )
    }
}