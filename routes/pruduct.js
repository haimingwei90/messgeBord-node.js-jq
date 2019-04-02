var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
router.get('/', function (req, res, next) {
    let name = req.session.user;
    if (!name) {
        name = "请登录"
    }
    res.render('pruduct', {title: "pruduct",user:name})
});
router.post('/addpruduct',upload.single('img'),function(req,res,next){
        // let path = req.file.destination+req.file.filename;
        console.log(req.body);
        console.log(req.file);
        
        res.send(req.file)
})
module.exports = router;