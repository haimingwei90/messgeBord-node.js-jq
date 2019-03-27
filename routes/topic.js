var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    let name = req.session.user;
    if (!name) {
        name = "请登录"
    }
    res.render('topic', { title: "topic",user:name })
});

module.exports = router;