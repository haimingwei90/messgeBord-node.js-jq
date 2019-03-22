const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     console.log('we are connected!');
     
});

const userSchema = new Schema({
    id: String,
    loginname: String,
    password: String,
    role:Number, 
    data: { type: Date, default: Date.now }
});
module.exports = userSchema;