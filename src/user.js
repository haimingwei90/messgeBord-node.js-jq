const UserSchema = require ('../model/usermd');
module.exports =class Uer{
    constructor(){
        
    }
    static  async create(data){
        UserSchema.remove();
        const {loginname,password,id} = data;
        const olduser  = await UserSchema.findOne({loginname:loginname});
        if(olduser){
            return {message:"该用户已注册"};
        }else{
            let user = await new UserSchema({
                id: id,
                loginname: loginname,
                password: password,
            })
            await user.save(function (err) {
                if (err) {
                    console.log(err);
                }
            });
            console.log(await UserSchema.find());

            return { message: true, id: user.id };
        }
        
    }
    static async delete(data){
        const {id} = data;
        await UserSchema.findOneAndRemove({id:id});
        
    }
    static async updatePassword(data){
        const {password,id} = data;
        await UserSchema.findOneAndUpdate({id:id},{password:password});

    }
   static async  updateRole(data){
        const {role,id} = data;
        await UserSchema.findOneAndUpdate({id:id},{role:role})
    }
    
} 
