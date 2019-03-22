const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     console.log('we are connected!');
     
});
const messegeSchema = new Schema({
    content: String,
    id: String,
    toid: String,
   
});
module.exports = messegeSchema;