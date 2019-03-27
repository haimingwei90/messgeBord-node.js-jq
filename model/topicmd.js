const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     console.log('we are connected!');
     
});

const topicSchema = mongoose.model('topicSchema',{
    id:String,
    title: String,
    content: String,
    imgurl: String,
    hidden:{type:Boolean,default:false},
    votes:{type:Number,default:0},
    messages:{type:Array,default:[]},
    date: { type: Date, default: Date.now }
});
module.exports = topicSchema;