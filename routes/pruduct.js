var express = require('express');
var router = express.Router();
var multer  = require('multer');
var fs = require("fs");
const Pruduct = require('../src/product.js');
// var upload = multer({ dest:'uploads/',filename:file.filename })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
var upload = multer({ storage: storage })
router.get('/', function (req, res, next) {
    let name = req.session.user;
    if (!name) {
        name = "请登录"
    }
    res.render('pruduct', {title: "pruduct",user:name})
});
router.post('/addpruduct',upload.single('img'),async function(req,res,next){
        const {pruductname,desc,price} = req.body;  
        var imgurl = 'http://' + req.headers.host + '/pruduct/uploads/' + req.file.filename;
        await Pruduct.create({pruductname,desc,imgurl,price})
        res.send({data:"sucess"})
})
router.post('/editpruduct',upload.single('img'),async function(req,res,next){
    const {pruductname,desc,price,id} = req.body;
    var imgurl = null;
    if(req.file){
        imgurl = 'http://' + req.headers.host + '/pruduct/uploads/' + req.file.filename;
    }  
    await Pruduct.change({pruductname,desc,imgurl,price,id})
    res.send({data:"sucess"})
})

router.get("/uploads/:imgname",function (req,res) {
    const rs =  fs.createReadStream("uploads/"+req.params.imgname);
    rs.pipe(res);
})
router.get('/pruductlist',async function(req,res,next){
    let products =  await Pruduct.getPruduct();
    let arrstr = ``;
    products.forEach(item => {
        let imgurl = item.imgurl;
        let str = `
                   
                    <div class="pruduct">

                            <div class='pruduct-desc'>
                                <p><img class='pruduct-img' src='${imgurl}'></img></p>
                                <p>${item.name}</p>
                                <p>${item.desc}</p>
                                <p> 
                                 ${item.price}
                                </p>
                                
                            </div>
                           
                            <div class = "pruduct-bt">
                                    <button  class='pruduct-edit' activeid='${item.id}'>编辑</button>
                                    <button  class='pruduct-dele' activeid='${item.id}' >删除</button>
                            </div>
                          
                        </div>
                
                 `
        arrstr = arrstr +str;
    });
    res.send(arrstr);
})
module.exports = router;