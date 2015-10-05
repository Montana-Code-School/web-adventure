// var tracks = ['dead.wav'];

// function playlist(tracks){
//     this.tracklist = [tracks];
//     this.willPlay = function() {
//         this.trackNum = Math.floor( (Math.random() * (tracks.length() - 1)) );
//         this.soundWillPlay = thistracklist[this.trackNum];
//     };
// };

// var playit = new Audio(tracks);
// playit.play();

// function makeTable(rows, cols){
//   document.write('<table class="burns">');
//   for (var i = 0; i < rows; i++) {
//     document.write('<tr>'); 
//       for (var j = 0; j < cols; j++){
//         document.write('<td class="cell" id="' + i.toString() + j.toString() + '"></td>');
//       };
//     document.write('</tr>');
//     };
//   document.write('</table>');
// };


// makeTable(9,9);

//function makeTable(rows, cols, gridClassName){
//  var grid = document.createElement('table');
//  grid.className = gridClassName.toString();
//  for (var i = 0; i < rows; i++) {
//    var newRow = createElement('tr');
//    table.appendchild('newRow');
//    for (var j = 0; j < cols; j++){
//      var newCell = createElement('td');
//      grid.newRow.appendchild('newCell');
//      grid.newRow.cell.setAttribute("id", i.toString() + j.toString());
//    };
//  ;}
//};
//
//makeTable(9,9,burns);



//Adventure OBJECT CONTSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function Adventure(yCoord, xCoord, endX, endY, crangX, crangY) {
    this.yCoord = yCoord;
    this.xCoord = xCoord;
    this.endX = endX;
    this.endY = endY;
    this.crangX = crangX;
    this.crangY = crangY;
    this.movAbe = function(){
        document.getElementById(this.yCoord.toString() + 
            this.xCoord.toString()).innerHTML = "<img id=\"abe\" src=\"aberight.png\"></img>";
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

// ATTEMPT AT 'THING' CONSTRUCTOR##################################################
function Character(name, xCoord, yCoord, pictures){
  this.name = name;
  this.xCoord = xCoord;
  this.yCoord = yCoord;
  this.pictures = pictures;
  this.sounds = [];
  this.place = function (){
        document.getElementById(this.yCoord.toString() + 
            this.xCoord.toString()).innerHTML = "<img id=\"" + name + "\" src=\"" + this.pictures[0] + "\"></img>";
    };
  
  };
  this.hide = function(xChange, yChange){
      document.getElementById((this.yCoord + yChange).toString() + 
            (this.xCoord + xChange).toString()).innerHTML = "";
  };
  this.move = function(){
    this.yCoord += 1;
    this.place();
    this.hide(0,1);
  };

  // this.move = function(){
 //        document.getElementById(this.yCoord.toString() + 
 //            this.xCoord.toString()).innerHTML = "<img id=\"" + name + "\" src=\"" + this.pictures[0] + "\"></img>";//this should be the 
 //        //final line of large movement function
 //    };
 //    this.reset = function(){
 //     this.hide(0,0);
  //     this.xCoord = 0;
  //     this.yCoord = 0;
  //     this.movAbe();
  //     this.target();
  //     this.alienAttack();
 //    };
 //    this.hide =function(xChange, yChange){
 //      document.getElementById((this.yCoord + yChange).toString() + 
 //            (this.xCoord + xChange).toString()).innerHTML = "";
 //    };
 //    this.jump = function(){
 //     this.sounds.spring.play();
 //     this.move.movUp();
 //     setTimeout(movUp, 150);
 //     setTimeout(movDown, 300);
 //     setTimeout(movDown, 450);
  // };
  // this.kill = function(){
  //  document.getElementById(this.endY.toString() + 
 //            this.endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
  // };


var krang = new Character('Krang', 4, 4, ['krang.jpg', 'krangkodos.png']);
//LEVEL Instantiation #############################################################

var adventure = new Adventure(0, 0, 8, 8, 4, 4);

//MOVEMENT FUNCTION using 'adventure' instantiation above+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//ADD THIS AS A METHOD/PROTOYPE OF Adventure??? ++++++++

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
        
    }
    else if (adventure.xCoord === bound && xDel != 0) {
        coon.play();
        
    }
   else if ((adventure.xCoord === adventure.crangX) && (adventure.yCoord === adventure.crangY - 1)){
     alert("Are you Bart?");
     alienAttack();  
     adventure.hideAbe();
     dead.play();
     adventure.reset()
   }
   else if ((adventure.xCoord === adventure.crangX) && (adventure.yCoord === adventure.crangY + 1)){
     alert("Are you Bart?");
     adventure.alienAttack();  
     adventure.hideAbe();
     dead.play();
     adventure.reset()
   }   
   else if ((adventure.xCoord - 1 === adventure.crangX) && (adventure.yCoord === adventure.crangY)){
     alert("Are you Bart?");
     adventure.alienAttack();  
     adventure.hideAbe();
     dead.play();
     adventure.reset()
   } 
   else if ((adventure.xCoord + 1 === adventure.crangX) && (adventure.yCoord === adventure.crangY)){
     alert("Are you Bart?");
     adventure.alienAttack();  
     adventure.hideAbe();
     dead.play();
     adventure.reset()
   }            
   else {
       adventure.xCoord += x;
       adventure.yCoord += y;
       adventure.hideAbe(xDel, yDel);
       adventure.movAbe();
   }
};

//MOVEMENTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
};
function scrollWin(x, y) {
    window.scrollBy(x, y);
}


//Keyboard controls//////////////////////////////////////////////////

document.onkeydown = function(e) {
   switch (e.keyCode) {
        case 65:
           movLeft();
           break;
        case 87:
           movUp();
           break;
        case 68:
           movRight();
           break;
        case 83:
           movDown();
           break;
        case 82:
           reset();
          break;
        case 74:
           jump();
          break;
   }
};

// scrolling keyboard controls


var holdon = new Audio('holdon.wav');
var coon = new Audio('racoon.wav');
var dead = new Audio('dead.wav');
var spring = new Audio('jump.mp3');


adventure.movAbe();
adventure.target();
krang.place();
krang.move();

function jump(){
  spring.play();
  movUp();
  setTimeout(movUp, 150);
  setTimeout(movDown, 300);
  setTimeout(movDown, 450);
};




