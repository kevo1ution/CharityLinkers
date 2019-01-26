var http = require('http');
var url = require('url');
var bparser = require('body-parser');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.write(txt);
	res.statusCode = 404;
	res.end();
}).listen(8080);

