var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.render('topics');
});
router.get('/serverside',function(req,res){
	res.render('serverside');
});
router.get('/javascript',function(req,res){
	//do some data based stuff here and pass it to the template.
	res.render('items/javascript',{myValue:'my new value'});
});
router.get('/autocomplete',function(req,res){
	//present a page with an autocomplete input element for search
	res.render('items/autocomplete');
});
router.get('/dynamicdata/:name',function(req,res){
	//I want to receive some data in the request, process it and return some
	//dynamic data to the client
	var incomingValue = req.params.name.toUpperCase();
	var qstring = req.query.age;
	console.log(incomingValue);
	res.render('items/dynamic-data',{nameParam:incomingValue, age:qstring});
});
router.post('/dynamicdata/:name',function(req,res){
	var bodyvalue = req.body.occupation;
	res.render('items/dynamic-data',{occupation:bodyvalue});
});
module.exports = router;