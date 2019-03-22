const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     console.log('we are connected!');
     
});

const UserSchema = new Schema({
    id:String,
    loginname: String,
    password: String,
    role:{type:Number, default:1},
    data: { type: Date, default: Date.now }
});
module.exports = UserSchema;