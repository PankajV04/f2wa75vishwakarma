var express = require('express');
var router = express.Router();
var x = Math.random();
var y = Math.random();

var val1="Math.log(x) of value "+ x + " is "+ Math.log(x) 
var val2="Math.imul(x, y) of value "+ x +"and"+ y +" is "+ Math.imul(x, y)
var val3= "Math.log10(x) of value "+ x + " is "+ Math.log10(x);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'Pankaj Sanjay Vishwakarma ',value1: val1, value2:val2, value3:val3 });
});

module.exports = router;
