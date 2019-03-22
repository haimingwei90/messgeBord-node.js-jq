import {UserSchema} from '../model/usermd';
export default class Uer{
    constructor(props){
        this.props = props;
    }
    async add(data){
        const {loginname,password,role} = data;
        let user =  await new UserSchema({
            id:id,
            loginname:loginname,
            password:password,
            role:role,
        })
        await user.save();
        return {loginname};
    }
    async delete(data){
        const {id} = data;
        await UserSchema.findOneAndRemove({id:id});
        
    }
    async updatePassword(data){
        const {password,id} = data;
        await UserSchema.findOneAndUpdate({id:id},{password:password});

    }
    async  updateRole(data){
        const {role,id} = data;
        await UserSchema.findOneAndUpdate({id:id},{role:role})
    }
    
} 