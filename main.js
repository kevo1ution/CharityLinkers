var http = require('http');
var express = require('express');
var url = require('url');
var bodyparser = require('body-parser');
var request = require('request');
var fs = require('fs');
var cleanup = require('./cleanup.js');
var DataBase = require('./database.js');

var subscriptionKey = '506c4842d0de4dbb924262eed9728352';
var uriBase = 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze';

var app = express();
app.use(bodyparser.json({limit: '50mb'}));
//app.use(bodyparser.urlencovded({limit: '50mb', extended: true}));

app.post('/search', (req,res) =>{
	//{city: city, state: state, idArr: [id1, id2, id3]}	
	console.log(req.body.city);
	console.log(req.body.state);
	console.log(req.body.idArr);
	res.json({});
});

app.post('/image', (req, res) =>{
	var buff = new Buffer(req.body.image, 'base64');
	fs.writeFileSync('./pics/imageSearch.png', buff);
	var dat = fs.readFileSync('./pics/imageSearch.png');
	//console.log(data.toString());

	const params = {
		'visualFeatures': 'Categories,Description,Tags,Color',
		'details': '',
		'language': 'en'
	};
	const options = {
		uri: uriBase,
		qs: params,
		body: dat,
		headers: {
			'ocp-apim-subscription-key' : '506c4842d0de4dbb924262eed9728352',
			'Content-Type': 'application/octet-stream'
		}
	}

	request.post(options, (err, response, body) => {
		if (err) {
			console.log('Error: ', err);
			return;
		}
		jsonResponse = JSON.stringify(JSON.parse(body), null, '	');
		console.log(jsonResponse);	
	});
	//res.json({msg: "nice69696969"})
});

//user changes
app.post('/user/createUser', (req, res) =>{
	DataBase.addUser(req.body, res);
});

app.post('/user/updateUser', (req, res) =>{
	DataBase.updateUser(req.body, function(temp){
	});
});

app.post('/user/login', (req,res) =>{
	DataBase.getUser(req.body.username, function(temp){
		res.json({ auth: req.body.password == temp.password});
	});
});

app.post('/user/userExists', (req, res) =>{
	DataBase.userExists(req.body.username, function(temp){
		res.json({result: temp});
	});
});

app.post('/user/getUser', (req, res)=>{
	DataBase.getUser(req.body.username, function(temp){
		res.json(temp);
	});
})

//setup port
app.listen(8080, ()=>{
	
});

//cleaning up
cleanup.Cleanup(function(){
	console.log("cleaning up");
	DataBase.closeDB();
});
