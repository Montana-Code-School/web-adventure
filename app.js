

//Adding a function to replace the winning cell with a picture of dead Abe Simpson
var killAbe = function () {
	document.getElementById(newAdventure.endY.toString() + newAdventure.endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
};

//Adding a function to place an image at the target cell
var target = function(){
	document.getElementById(newAdventure.endY.toString() + newAdventure.endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
};
    
var movAbe = function(){ 
	document.getElementById(newAdventure.yCoord.toString() + newAdventure.xCoord.toString()).innerHTML = "<img src=\"small_abe.png\"></img>";
};

//refactoring hideAbe

var hideAbe = function (xChange, yChange) {
	document.getElementById((newAdventure.yCoord + yChange).toString() + (newAdventure.xCoord + xChange).toString()).innerHTML = "";
}

var holdon = new Audio('holdon.wav');
var coon = new Audio('racoon.wav');
var dead = new Audio('dead.wav');


movAbe();
target();

