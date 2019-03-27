const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     console.log('we are connected!');
     
});
const messageSchema = mongoose.model('messageSchema',{
    content: String,
    id: String,
    replyname: String,
   
});
module.exports = messageSchema;