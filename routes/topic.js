var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('topic', { title: "topic" })
});

module.exports = router;