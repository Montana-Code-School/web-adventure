var holdon = new Audio('sounds/holdon.wav');
var coon = new Audio('sounds/racoon.wav');
var dead = new Audio('sounds/dead.wav');

function Adventure(startX, startY, endX, endY, ident, stuff) {
	this.coord = new Thing("coord", startX, startY);
	this.start = new Thing("start", startX, startY);
    this.end = new Thing("end", endX, endY);
    this.stuff = stuff;
	this.isGhost = false;
    this.ident = ident;
}

Adventure.prototype.endAction = function(xChange, yChange) {
    this.hide(this.coord);
    this.coord.x += xChange;
    this.coord.y += yChange;
    alert("Whuuthaa!!??");
    this.killAbe();
    dead.play();
    this.isGhost = true;
};

Adventure.prototype.burnsAction = function(xChange, yChange) {
    alert("You're fired!");
    reset();
}

Adventure.prototype.portalAction = function(xChange, yChange) {
    myAdventure = adventures[1];
    myAdventure.generateGrid();
}

Adventure.prototype.atPosition = function(xChange, yChange, position) {
    return this.coord.x + xChange === position.x && this.coord.y + yChange === position.y;
};

Adventure.prototype.moveStuff = function(xChange, yChange) {
    for (var i = 0; i < this.stuff.length; i++) {
        if(!this.isGhost && this.atPosition(xChange, yChange, this.stuff[i])) {
            // use Object.call to ensure "this" is the adventure object
            this.stuff[i].action.call(this, xChange, yChange);
            return true;
        }
    }
    return false;
}

Adventure.prototype.mov = function(xChange, yChange) {
    if (this.moveStuff(xChange, yChange)) {
    }
	else if ((this.coord.x + xChange) < 0 || (this.coord.x + xChange) > this.end.x) {
        holdon.play();
        //alert("D'oh!!!");
    }
    else if ((this.coord.y + yChange) < 0 || (this.coord.y + yChange) > this.end.y) {
        coon.play();
        //alert("D'oh!!!");
    }
    else {
 		this.hide(this.coord);
        this.coord.x += xChange;
        this.coord.y += yChange;
		this.movAbe();
	};
}

Adventure.prototype.getID = function(thing) {
    return thing.x.toString() + "-" + thing.y.toString();
};

//Adding a function to replace the winning cell with a picture of dead Abe Simpson
Adventure.prototype.killAbe = function () {
    document.getElementById(this.getID(this.coord)).innerHTML = this.makeImageElement("dead.jpg");
    this.isGhost = true;
};

Adventure.prototype.place = function(thing) {
    var imageElement = this.makeImageElement(thing.image);
    console.log("place: " + thing.image + " at " + this.getID(thing));
    document.getElementById(this.getID(thing)).innerHTML = imageElement;
};
    
Adventure.prototype.movAbe = function() {
    if (this.isGhost) {
        imageElement = this.makeImageElement("ghost.png");
    } else {
        imageElement = this.makeImageElement("small_abe.png");
    }
    document.getElementById(this.getID(this.coord)).innerHTML = imageElement;
};

Adventure.prototype.makeImageElement = function(image) {
    return "<img class=\"img-responsive center-block\" src=\"img/"
        + image + "\"></img>";
}

Adventure.prototype.hide = function (location) {
    document.getElementById(this.getID(location)).innerHTML = "";
};

Adventure.prototype.generateGrid = function() {
    var tableContents = "";
    for (var row = 0; row <= this.end.y; row++) {
        tableContents += "<tr class=\"row\">\n";

        for (var col = 0; col <= this.end.x; col++) {
            tableContents += " <td id=\"" + col + "-" + row + 
                "\" class=\"cell\"></td>\n";
        }
        tableContents += "</tr>";
    }
    console.log("generated grid for " + this.ident);
    document.getElementById(this.ident).innerHTML = tableContents;
    this.reset();
};

Adventure.prototype.reset = function() {
    this.hide(this.coord);
    this.coord.x = this.start.x;
    this.coord.y = this.start.y;
    this.isGhost = false;
    this.movAbe();
    for (var i = 0; i < this.stuff.length; i++) {
        this.place(this.stuff[i]);
    }
}

function Thing(kind, x, y, action, image) {
    this.kind = kind;
    this.x = x;
    this.y = y;
    this.action = action;
    this.image = image;
}
