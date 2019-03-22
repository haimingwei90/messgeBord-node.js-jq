const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     console.log('we are connected!');
     
});

const topicSchema = new Schema({
    id:String,
    title: String,
    content: String,
    imgurl: String,
    hidden:Boolean,
    votes:Number,
    messages:[],
    date: { type: Date, default: Date.now }
});
module.exports = topicSchema;