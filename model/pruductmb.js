const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     console.log('we are connected!');
     
});
const pruductSchema = new Schema({
    id:String,
    name: String,
    desc: String,
    price:Number,
    imgurl:String 
});
module.exports = pruductSchema;