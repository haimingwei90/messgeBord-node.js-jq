const topicSchema = require("../model/topicmd");
module.exports = class Topic {
    constructor(props){
        this.props = props
    }
    static async getTopic(){
        console.log("gettopic Topic类");
        
        let topics =  await topicSchema.find();
        return topics; 
    }
   static async publish(data){
        let { title,content ,imgurl} = data;

        let topic = await new topicSchema({
            title:title,
            content:content,
            imgurl:imgurl,
        });
        await topic.save(
            function (err) {
                if (err) {
                    console.log(err);

                } else {
                    console.log(err);
                }
            }
        )
        return topic;
    }
    static async delete(data) {
        const { id } = data;
        await topicSchema.findOneAndRemove({ id: id });
    }
    static async changebody(data) { 
        const { title, content, imgurl } = data;
        await topicSchema.findOneAndUpdate({ id: id },
            { title:title,content:content,imgurl:imgurl});

    }
    static async changeHidden(data){
        const {id,hidden} = data;
        await topicSchema.findOneAndUpdate({id:id},{
            hidden:hidden        
        })
    }
    static async addVotes(data){
        const {id} = data;
        let topic = await topicSchema.find({id:id});
        topic.votes++
        await topic.save(
            function (err) {
                if (err) {
                    console.log(err);

                } else {
                    console.log(err);
                }
            }
        ); 
    }
    static async minusVotes(data){
        const id = data;
        let topic = await topicSchema.find({ id: id });
        topic.votes--;
        await topic.save(
            function (err) {
                if (err) {
                    console.log(err);

                } else {
                    console.log(err);
                }
            }
        ); 
    }
    static async messages(data){
        const {messages,topicid,replyname} = data;
        let topic = await topicSchema.find({id:topicid});
        topic.messages.push({
            messages:messages,
            replyname:replyname
        })
        await topic.save(
            function (err) {
                if (err) {
                    console.log(err);

                } else {
                    console.log(err);
                }
            }
        )
    }
}