import topicSchema from "../model/topicmd";
export default class Topic {
    constructor(props){
        this.props = props
    }
    async publish(data){
        const { title,content ,imgurl, id} = data;
        let topic = await new topicSchema({
            title:title,
            content:content,
            imgurl:imgurl,
            id:id
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
    }
    async delete(data) {
        const { id } = data;
        await topicSchema.findOneAndRemove({ id: id });
    }
    async changebody(data) {
        title content imgurl  hidden votes  messages 
        const { title, content, imgurl } = data;
        await topicSchema.findOneAndUpdate({ id: id },
            { title:title,content:content,imgurl:imgurl});

    }
    async changeHidden(data){
        const {id,hidden} = data;
        await topicSchema.findOneAndUpdate({id:id},{
            hidden:hidden        
        })
    }
    async addVotes(data){
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
    async minusVotes(data){
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
    async messages(data){
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