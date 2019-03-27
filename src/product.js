const  pruductSchema = require ("../model/pruductmb");
module.exports = class Pruduct {
    constructor(props){
        this.props = props;
    }
    async create(data){
        const {id,name,desc,imgurl,price} = data;
        let prudct = await new pruductSchema({
            id:id,
            name:name,
            desc:desc,
            imgurl:imgurl,
            price:price
        })
        await prudct.save(function (err) {
            if (err) {
                console.log(err);

            } else {
                console.log(err);
            }
        });
    }
    async delete(data){
        const {id} = data;
        await pruductSchema.findOneAndRemove({ id: id });
    }
    async change(data){
       const { name, desc, imgurl, price} = data;
        await UserSchema.findOneAndUpdate({ id: id },
             { name:name,imgurl:imgurl,desc:desc,price:price });

    }

}