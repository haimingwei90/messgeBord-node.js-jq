const  pruductSchema = require ("../model/pruductmb");
const uuid = require('uuid').v1;
module.exports = class Pruduct {
    constructor(props){
        this.props = props;
    }
    static async getPruduct() {
        // await pruductSchema.remove();
        let prudcts = await pruductSchema.find();
        let rz = prudcts.map(item => {
            let arr =  {
                id: item.id,
                name: item.name,
                desc: item.desc,
                price:item.price,
                imgurl: item.imgurl,
            }
            return arr;
        })
        return rz;
    }
    static async  create(data){
        
        const {pruductname,desc,imgurl,price} = data;
        let prudct = await new pruductSchema({
            id:uuid(),
            name:pruductname,
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
    static async delete(data){
        const {id} = data;
        await pruductSchema.deleteOne({ id: id },function(err, res){
            if (err) {
                console.log("Error:" + err);
            }
        });
       
    }
    static async change(data){
        const { pruductname, desc, imgurl, price,id} = data;
        if(imgurl){
            await pruductSchema.findOneAndUpdate(
                { id: id },
                { name:pruductname,imgurl:imgurl,desc:desc,price:price }
            );
        }else{
            await pruductSchema.findOneAndUpdate(
                { id: id },
                { name:pruductname,desc:desc,price:price }
            );
        }
       

    }

}