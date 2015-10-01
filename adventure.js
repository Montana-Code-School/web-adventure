//var yCoord = 0;
//var xCoord = 0;
//
//// Initializing the corrdinates of the target cell 
//var endX = 2;
//var endY = 2;

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
    this.alienAttack = function (){
        document.getElementById(this.crangY.toString() + 
            this.crangX.toString()).innerHTML = "<img src=\"krangkodos.png\"></img>";
    };
    
}
var adventure = new Adventure(0, 0, 8, 8, 4, 4);


document.onkeydown = function(e) {
   switch (e.keyCode) {
       case 37, 65:
           movLeft();
           break;
       case 38, 87:
           movUp();
           break;
       case 39, 68:
           movRight();
           break;
       case 40, 83:
           movDown();
           break;
        case 82:
        reset();
        break;
   }
};



//var adventure = {
//    yCoord: 0,
//    xCoord: 0,
//    endX: 8,
//    endY: 8,
//    crangX: 4,
//    crangY: 4,
//    movAbe: function(){
//        document.getElementById(adventure.yCoord.toString() + 
//            adventure.xCoord.toString()).innerHTML = "<img src=\"small_abe.png\"></img>";
//    },
//    target: function(){
//        document.getElementById(adventure.endY.toString() + 
//            adventure.endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
//    },
//    killAbe: function(){
//        document.getElementById(adventure.endY.toString() + 
//            adventure.endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
//    },
//    hideAbe: function (xChange, yChange) {
//        document.getElementById((adventure.yCoord + yChange).toString() + 
//            (adventure.xCoord + xChange).toString()).innerHTML = "";
//    },
//    alienAttack: function (){
//        document.getElementById(adventure.crangY.toString() + 
//            adventure.crangX.toString()).innerHTML = "<img src=\"krangkodos.png\"></img>";
//    }
//};


