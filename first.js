var first = function(){
	console.log("inside first");
}

var second = function(){

	var third = function(){
		console.log("I am insde thid")
	}
	third();
}

second();