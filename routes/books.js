var express = require('express');
var router = express.Router();

var books = ['book one','book two', 'book three'];
router.get('/',function(req,res,next){
	res.send(books);
});

module.exports = router;