var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    let name = req.session.user;
    if (!name) {
        name = "请登录"
    }
    res.render('pruduct', {title: "pruduct",user:name})
});

module.exports = router;