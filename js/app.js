var myAdventure;

var movDown = function() {
    myAdventure.mov(0, 1);
};

var movUp = function() {
    myAdventure.mov(0, -1);
};

var movLeft = function() {
    myAdventure.mov(-1, 0);
};

var movRight = function() {
    myAdventure.mov(1, 0);
};

var setupBase = function(adventureID, endX, endY, adventureSize) {
    myAdventure = new Adventure(0, 0, endX, endY, adventureSize, adventureID);

    //myAdventure2 = new Adventure(0, 0, adventureSize-1, adventureSize-1, adventureSize);
    //myAdventure2.generateGrid();
};

var setup = function(adventureID) {
    var adventureSize = Math.floor(5 + Math.random()*6);
    var endX = adventureSize-1;
    var endY = adventureSize-1;
    setupBase(adventureID, endX, endY, adventureSize);
    myAdventure.stuff = 
        [
            new Thing(endX-1, endY-1, myAdventure, Adventure.prototype.burnsAction, "burns.jpg"),
            new Thing(endX, endY, myAdventure, Adventure.prototype.portalAction, "portal.jpg")
        ]
    myAdventure.generateGrid();

    //myAdventure2 = new Adventure(0, 0, adventureSize-1, adventureSize-1, adventureSize);
    //myAdventure2.generateGrid();
};

var setup2 = function(adventureID) {
    var adventureSize = Math.floor(5 + Math.random()*6);
    var endX = adventureSize-1;
    var endY = adventureSize-1;
    setupBase(adventureID, endX, endY, adventureSize);
    myAdventure = new Adventure(0, 0, endX, endY, adventureSize, adventureID);
    myAdventure.stuff = 
        [
            new Thing(endX, endY, myAdventure, Adventure.prototype.endAction, "retire.png"),
            new Thing(endX-1, endY-1, myAdventure, Adventure.prototype.burnsAction, "burns.jpg"),
        ]
    myAdventure.generateGrid();
}

var reset = function() {
    myAdventure.reset();
}

setup("adventureScreen");
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            movLeft();
            break;
        case 38:
            movUp();
            break;
        case 39:
            movRight();
            break;
        case 40:
            movDown();
            break;
        case 32:
            reset();
            break;
    }
};