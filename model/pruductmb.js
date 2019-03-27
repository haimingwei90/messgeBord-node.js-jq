const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     console.log('we are connected!');
     
});
const pruductSchema = mongoose.model('pruductSchema',{
    id:String,
    name: String,
    desc: String,
    price:Number,
    imgurl:String 
});
module.exports = pruductSchema;