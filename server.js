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
})

app.get('/api/location', function(req, res) {
  fs.readFile('location.json', function(err, data) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/api/location', function(req, res) {
	var myData = req.body;
	fs.writeFile('location.json', JSON.stringify(myData), function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log(JSON.stringify(myData) + "saved as JSON saved to " + 'location.json');
	    }
	}); 
});

app.listen(3000);