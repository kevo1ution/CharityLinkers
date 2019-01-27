var http = require('http');
var express = require('express');
var url = require('url');
var bodyparser = require('body-parser');
var request = require('request');
var fs = require('fs');


var subscriptionKey = '506c4842d0de4dbb924262eed9728352';
var uriBase = 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0';

var app = express();
app.use(bodyparser.json({limit: '50mb'}));
//app.use(bodyparser.urlencovded({limit: '50mb', extended: true}));

app.get('/search', (req,res) =>{
	var q = url.parse(req.url, true).query;
	console.log(q);
	res.json(q);

});

app.post('/image', (req, res) =>{
	var { img } = req.body;
	var buff = new Buffer(img, 'base64');
	fs.writeFileSync('/pics/imageSearch.png', buff);
	var data = fs.readFileSync('/pics/imageSerach.png');
	console.log(data);

	//res.json({msg: "nice69696969"})
});


app.listen(8080, ()=>{
	
});

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
