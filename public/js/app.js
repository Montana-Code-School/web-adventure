var myAdventure;
var adventures = [];

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

function loadGame(){
    var locationToLoad;
    $.get( "http://localhost:3000/api/location", function( data ) {
        locationToLoad = data;
        console.log(locationToLoad);
    });
}

function saveGame(){
    var gameName = document.getElementById("game-name-text").value;
    var ok = /^\w+$/.exec(gameName);
    console.log(gameName);
    if (!ok) {
        alert("The game name must have only characters a-z, A-Z, 0-9, and _!");
    } else {
        var locationToSave = {
            "game-name": gameName,
            "adventures": saveAdventures()
        };
        console.log(locationToSave);
        $.ajax({
            url: "http://localhost:3000/api/location",
            type: 'POST',
            data: locationToSave
        }).done(function(data){
            console.log(data);
        });
    }
}

function saveAdventures() {
    var advs = [];
    for (var i = 0; i < adventures.length; i++) {
        advs.push(saveAdventure(adventures[i]));
    };
    return advs;
}

function saveAdventure(adv) {
    var adventureData = {
        "coord": {x: adv.coord.x, y: adv.coord.y},
        "start": {x: adv.start.x, y: adv.start.y},
        "end":  {x: adv.end.x, y: adv.end.y},
        "isGhost": adv.isGhost,
        "stuff": saveStuff(adv.stuff)
    };
    return adventureData;
}

function saveStuff(stuff) {
    var stuffList = [];
    for (var i = 0; i < stuff.length; i++) {
        stuffList.push({
            x: stuff[i].x,
            y: stuff[i].y,
            kind: stuff[i].kind,
            image: stuff[i].image
        });
    };
    return stuffList;
}

var setup = function() {
    var endX = Math.floor(5 + Math.random()*6)-1;
    var endY = Math.floor(5 + Math.random()*6)-1;
    var adv = new Adventure(0, 0, endX, endY, "adventureScreen");
    adv.stuff = 
        [
            new Thing("burns", endX-1, endY-1, adv, Adventure.prototype.burnsAction, "burns.jpg"),
            new Thing("portal", endX, endY, adv, Adventure.prototype.portalAction, "portal.jpg")
        ]
    console.log("about to generate the grid " + endX + "," + endY);
    adv.generateGrid();
    adventures.push(adv);
    myAdventure = adv;

    endX = Math.floor(5 + Math.random()*6)-1;
    endY = Math.floor(5 + Math.random()*6)-1;
    adv = new Adventure(0, 0, endX, endY, "adventureScreen");
    adv.stuff = 
        [
            new Thing("retire", endX, endY, adv, Adventure.prototype.endAction, "retire.png"),
            new Thing("burns", endX-1, endY-1, adv, Adventure.prototype.burnsAction, "burns.jpg"),
        ]
    //adv.generateGrid();
    adventures.push(adv);
};

var reset = function() {
    if (myAdventure != adventures[0]) {
        myAdventure.reset();
        myAdventure = adventures[0];
    }
    myAdventure.generateGrid();
}

window.onload = function () { 
    setup("adventureScreen");
}

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