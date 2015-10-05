function makeTable(rows, cols, gridClassName, cellClassName, containerId){
	var grid = document.createElement('table');
	grid.className = gridClassName;
	grid.setAttribute('id', 'table1');
	document.getElementById(containerId).appendChild(grid);
	for (var i = 0; i < rows; i++) {
		var row = grid.insertRow(i);
		for (var j = 0; j < cols; j++){
			var cell = row.insertCell(j);
			cell.className = cellClassName;
			cell.setAttribute('id', i.toString() + j.toString());
		};
	}
};

// function makeNewTable(rows, cols, gridClassName, cellClassName, containerId){
// 	var grid = document.createElement('table');
// 	grid.className = gridClassName;
// 	document.getElementById(containerId).replaceChild(table2, table1);
// 	for (var i = 0; i < rows; i++) {
// 		var row = grid.insertRow(i);
// 		for (var j = 0; j < cols; j++){
// 			var cell = row.insertCell(j);
// 			cell.className = cellClassName;
// 			cell.setAttribute('id', i.toString() + j.toString());
// 		};
// 	}
// };

// var table1 = new makeTable(12, 12, 'burns', 'cell', 'mytable');
// var table2 = new makeNewTable(12, 12, 'lebowski', 'cell', 'mytable');


//var secondTable = new makeTable(12, 12, 'lebowski', 'cell', 'histable');


// var forbiddenCells = [];//THIS GOES IN NEW TABLE INSTANCE
// var numCells = forbiddenCells.length();//THIS GOES IN NEW TABLE INSTANCE
// var portals = [];//THIS GOES IN THE NEW TABLE INSTANCE
// var portalmagic = function(){
// 	makeTable();
// }

// function levelStyle(){
// 	for (var i = 0; i < forbiddenCells.length(); i++){
// 		document.getElementById(forbiddenCells[i]).setAttribute('id', 'whatever');
// 	}
// }


// this.movement = function(xDel,yDel){
// 	var xToBe = xCoord + xDel;
// 	var yToBe = yCoord + yDel;
// 	var newCoords = xCoord.toString() + yCoord.toString();
// 	for (var i = 0; i < numCells; i++){
// 		if (newCoords === TABLE.forbiddenCells[i]){
// 			play.sounds[0](); //"BONK" SOUND
// 		} else if (newCoords === TABLE.portal[i]){
// 			TABLE.portalmagic();//THIS WOULD BE DEFINED IN TABLE INSTANCE
// 		} else if (newCoords === CREATURES.COORD[i]){
// 			CREATURES.collisionmagic();
// 		} else {
// 			move();
// 		}

// };
