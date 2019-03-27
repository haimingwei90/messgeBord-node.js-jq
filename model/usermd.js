const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     console.log('we are connected!');
     
});

const UserSchema = mongoose.model('UserSchema',{
    id:String,
    loginname: String,
    password: String,
    role:{type:Number, default:1},
    data: { type: Date, default: Date.now }
});
module.exports = UserSchema;