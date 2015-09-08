
//GLOBAL
var mything = (function(){
	'use strict';
	var myBook = "My Big Book";
	var booklist = ['one','two','three'];
	var bookProto = {
		name:'book one',
		cost:20
	};
	
	function makeBook(){
		var book = Object.create(bookProto);
		return book;
	}
	function showMessage(){
		alert('here is the message');
	}
	return {
		makeBook:makeBook,
		showMessage:showMessage,
		booklist:booklist,
		myBook:myBook
	} ;
})();