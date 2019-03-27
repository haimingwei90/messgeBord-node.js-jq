var express = require('express');
var router = express.Router();

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
  res.redirect('/');
})
router.post('/register',function(req,res,next){

})
module.exports = router;
