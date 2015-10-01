//var adventure = require('./adventure');

var yCoord = 0;
var xCoord = 0;

// Initializing the corrdinates of the target cell 
var endX = 2;
var endY = 2;

//Adding a function to replace the winning cell with a picture of dead Abe Simpson
var killAbe = function () {
    document.getElementById(endY.toString() + endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
};

//Adding a function to place an image at the target cell
var target = function(){
    document.getElementById(endY.toString() + endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
};
    
var movAbe = function(){
    document.getElementById(yCoord.toString() + xCoord.toString()).innerHTML = "<img src=\"small_abe.png\"></img>";
};

//refactoring hideAbe

var hideAbe = function (xChange, yChange) {
    document.getElementById((yCoord + yChange).toString() + (xCoord + xChange).toString()).innerHTML = "";
}

var holdon = new Audio('holdon.wav');
var coon = new Audio('racoon.wav');
var dead = new Audio('dead.wav')


movAbe();
target();

function mov(xDel, yDel, x, y, bound) {
    
    if(xCoord === (endX + xDel) && yCoord === (endY + yDel)) {
        xCoord += x;
        yCoord += y;
        hideAbe(xDel, yDel);    
        killAbe();
        dead.play();
        alert("Whuuthaa!!??");
    }
    else if (yCoord === bound && yDel != 0) {
        holdon.play();
        alert("D'oh!!!");
    }
    else if (xCoord === bound && xDel != 0) {
        coon.play();
        alert("D'oh!!!");
    }
        else {
        xCoord += x;
        yCoord += y;
        hideAbe(xDel, yDel);
        movAbe();
    };
}

function movDown() {
    mov(0, -1, 0, 1, 2);
}; 
function movUp() {
    mov(0, 1, 0, -1, 0);
}; 
function movLeft() {
    mov(1, 0, -1, 0, 0);
}; 
function movRight() {
    mov(-1, 0, 1, 0, 2);
};

function reset() {
    hideAbe(0,0);
    xCoord = 0;
    yCoord = 0;
    movAbe();
    target();
}


