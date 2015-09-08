//autocomplete.js

//this is really UI stuff.
//capturing the user input and displaying choices
//those choices could be local or remote.
//it could be a local js array for example
//or the results of an Xhr call to a server (a query)

window.onload = function(){

	//which element are we using
	var searchEl = document.getElementById('autocomplete');

	//attach an event handler to handle user input
	//searchEl.oninput =handleInput;
	searchEl.oninput =handleInputWithDelay;
	var dropdown = document.getElementById('selector');
	dropdown.addEventListener('click',printSelection);
};

//this could come from anywhere...
//but it could be an array of objects...
//var sdata = [{name: 'david', dob:'12/12/46'}, {name: etc..etc.}]
//so something has to deal with that incoming data 
//we need some way to identify which bits appear in the dropdown list man..
var sourceData = ['david','daniel','danny','dimitry','dylan','dick','damian'];
//input handlers

//each digit is simply logged out

function handleInput(e){
	//print the value entered by user
	console.log(e.srcElement.value);
	
}
//add throttling...

function handleInputWithDelay(e){
	var minChars = 2;
	//console.log(e.srcElement.value.length);
	if (e.srcElement.value.length >= minChars) {
		return searchLocal(sourceData,e.srcElement.value);
		//return console.log(e.srcElement.value)
	};
	//console.log(e.srcElement.value);
}

//make a query to a local source...
//how do we search for a value in an array of values?


function searchLocal(path, searchTerm){
	//given an array of values to search...
	//we need to loop through the the search term letter by letter
	//to find a match
	//if any digit does not match exit early ...
	//print the results to console.


	var results = path.filter(filterResults);
	
	function filterResults(item){
		for (var i = 0; i < searchTerm.length; i++) {
			if(searchTerm[i] !== item[i]){
				return false;
			};
			
		};
		return true;
	}	
	updateUi(results);
	console.log(results);
}

//show the results in a drop-down list....
function updateUi(results){
	var dd = document.getElementById('selector');
	dd.innerHTML = "";
	results.forEach(function(result){
		var opt = document.createElement('option');
		opt.setAttribute('value',result);
		opt.innerHTML = result;
		dd.appendChild(opt);
	});
	
}


function printSelection(selectedItem){
	var selectedText = document.getElementById('selectedtext');
	selectedText.innerHTML = selectedItem.srcElement.value;
	
}