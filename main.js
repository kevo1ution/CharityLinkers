var http = require('http');
var express = require('express');
var url = require('url');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('', (req,res) =>{
	var q = url.parse(req.url, true).query;
	res.json(q);
}).listen(8080);

/*
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.write(txt);
	res.statusCode = 404;
	res.end();
}).listen(8080);
*/
