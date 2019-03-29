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
    let topics =  await Topic.getTopic();
    let arrstr = ``;
    topics.forEach(item => {
        let str = `
                    <li>
                    <div class="topic">
                            <p>${item.title}</p>
                            <p>${item.content}</p>
                            <p> 
                                <a >作者</a>
                                <a >${item.date}</a>
                                <a >${item.votes}</a>
                            </p>
                        </div>
                    </li>
                 `
        arrstr = arrstr +str;
    });
    res.send(arrstr);
})
module.exports = router;