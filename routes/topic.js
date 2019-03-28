var express = require('express');
var router = express.Router();
const Topic = require('../src/topic.js');
router.get('/', function (req, res, next) {
    let name = req.session.user;
    if (!name) {
        name = "请登录"
    }
    res.render('topic', { title: "topic",user:name })
});
router.post('/publish',async function(req,res,next){
    let {title,content,imgurl} = req.body;
         if (!imgurl) {
            imgurl = [];
         }
    await Topic.publish({title,content,imgurl})      
    res.send({sucess:true});
});
router.get('/topiclist',async function(req,res,next){
    console.log("topiclist routes");
    
    let topics =  await Topic.getTopic();
    res.send({topics:topics});
})
module.exports = router;