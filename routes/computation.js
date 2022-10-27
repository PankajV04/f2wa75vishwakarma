var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var x = Math.random();
  res.render('bonus', { title: `${Math.log(x)}` });
});

module.exports = router;
