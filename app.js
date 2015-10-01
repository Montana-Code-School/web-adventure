//var adventure = require('./adventure');

// hello

//Adding a function to replace the winning cell with a picture of dead Abe Simpson


//Adding a function to place an image at the target cell

    


//refactoring hideAbe

function Adventure(yCoord, xCoord, endX, endY, crangX, crangY) {
    this.yCoord = yCoord;
    this.xCoord = xCoord;
    this.endX = endX;
    this.endY = endY;
    this.crangX = crangX;
    this.crangY = crangY;
    this.movAbe = function(){
        document.getElementById(this.yCoord.toString() + 
            this.xCoord.toString()).innerHTML = "<img src=\"small_abe.png\"></img>";
    };
    this.target = function(){
        document.getElementById(this.endY.toString() + 
            this.endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
    };
    this.killAbe = function(){
        document.getElementById(this.endY.toString() + 
            this.endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
    };
    this.hideAbe = function (xChange, yChange) {
        document.getElementById((this.yCoord + yChange).toString() + 
            (this.xCoord + xChange).toString()).innerHTML = "";
    };
    
    
}

Adventure.prototype.alienAttack = function (){
    document.getElementById(this.crangY.toString() + 
        this.crangX.toString()).innerHTML = "<img src=\"krangkodos.png\"></img>";
};
var adventure = new Adventure(0, 0, 8, 8, 4, 4);

var holdon = new Audio('holdon.wav');
var coon = new Audio('racoon.wav');
var dead = new Audio('dead.wav')


adventure.movAbe();
adventure.target();
adventure.alienAttack();

function mov(xDel, yDel, x, y, bound) {
    
    if(adventure.xCoord === (adventure.endX + xDel) && adventure.yCoord === (adventure.endY + yDel)) {
        adventure.xCoord += x;
        adventure.yCoord += y;
        adventure.hideAbe(xDel, yDel);    
        adventure.killAbe();
        dead.play();
        alert("Whuuthaa!!??");
    }
    else if (adventure.yCoord === bound && yDel != 0) {
        holdon.play();
        alert("D'oh!!!");
    }
    else if (adventure.xCoord === bound && xDel != 0) {
        coon.play();
        alert("D'oh!!!");
    }
    else if ((adventure.xCoord === adventure.crangX) && (adventure.yCoord === adventure.crangY - 1)){
      alert("Are you Bart?");
      alienAttack();  
      adventure.hideAbe();
      dead.play();
      adventure.reset();

    }
    else if ((adventure.xCoord === adventure.crangX) && (adventure.yCoord === adventure.crangY + 1)){
      alert("Are you Bart?");
      adventure.alienAttack();  
      adventure.hideAbe();
      dead.play();
      adventure.reset();

    }   
    else if ((adventure.xCoord - 1 === adventure.crangX) && (adventure.yCoord === adventure.crangY)){
      alert("Are you Bart?");
      adventure.alienAttack();  
      adventure.hideAbe();
      dead.play();
      adventure.reset();

    } 
    else if ((adventure.xCoord + 1 === adventure.crangX) && (adventure.yCoord === adventure.crangY)){
      alert("Are you Bart?");
      adventure.alienAttack();  
      adventure.hideAbe();
      dead.play();
      adventure.reset();

    }            
    else {
        adventure.xCoord += x;
        adventure.yCoord += y;
        adventure.hideAbe(xDel, yDel);
        adventure.movAbe();
    }
}

function movDown() {
    mov(0, -1, 0, 1, 8);
}; 
function movUp() {
    mov(0, 1, 0, -1, 0);
}; 
function movLeft() {
    mov(1, 0, -1, 0, 0);
}; 
function movRight() {
    mov(-1, 0, 1, 0, 8);
};

function reset() {
    adventure.hideAbe(0,0);
    adventure.xCoord = 0;
    adventure.yCoord = 0;
    adventure.movAbe();
    adventure.target();
    adventure.alienAttack();
}




