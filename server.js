var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));

app.get('/', function(req, res){
	res.readFile('index.html')
});

app.get('/api/location', function(req, res) {
	var gameName = req.params.gameName;
	fs.readFile(gameName + '.json', function(err, data) {
		res.setHeader('Cache-Control', 'no-cache');
		res.json(JSON.parse(data));
	});
});

app.post('/api/location', function(req, res) {
	var myData = req.body;
	fs.writeFile(myData.gameName + '.json', JSON.stringify(myData), function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log(JSON.stringify(myData) + " saved to "
	      	+ myData.gameName + '.json');
	    }
	}); 
});

app.listen(3000);
