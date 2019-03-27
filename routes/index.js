var express = require('express');
var router = express.Router();
const uuid = require('uuid').v1;
const User = require('../src/user.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  let name = req.session.user;
  if(!name){
    name = "请登录"
  }
  res.render('index', { title: '首页' ,user:name});
});
router.post('/login',function(req,res,next){
  const {name} = req.body;
  req.session.user = name;
  res.render('index',{title:'首页',user:name})
})
router.post('/register',async function(req,res,next){
    const {loginname,password} = req.body;
    const id = uuid();   
    let name = "请登录"
    let message = await User.create({loginname,password,id})
    console.log(message);
    if(message.message == true){
      req.session.user = loginname;
     
      name = loginname;
    }else{
      name = "该用户已注册"
    }
    res.render('index', { title: '首页', user: name })
  })
module.exports = router;
