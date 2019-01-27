var http = require('http');
var express = require('express');
var url = require('url');
var bodyparser = require('body-parser');
var request = require('request');
var fs = require('fs');
var cleanup = require('./cleanup.js');
var DataBase = require('./database.js');
var CharitySearch = require('./charity.js');

var subscriptionKey = '506c4842d0de4dbb924262eed9728352';
var uriBase = 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze';

var app = express();
app.use(bodyparser.json({limit: '50mb'}));
//app.use(bodyparser.urlencovded({limit: '50mb', extended: true}));

//search requests by res and by image
var idToKeyword = ["Women", "Poverty", "Animal", "Education", "First Responders", "Veterans", "Museums", "LGBT", "Cancer", "Disaster Relief"];
app.post('/search', (req,res) =>{
	var city = req.body.city || "Dallas";
	var state = req.body.state || "TX";
	var zipcode = "";
	var maxdist = 50; //in miles
	var numresults = 4;
	var ids1 = req.body.val1;
	var ids2 = req.body.val2;
	var ids3 = req.body.val3;
	console.log(city, state, ids1, ids2, ids3);
	var keywords = [idToKeyword[ids1], idToKeyword[ids2], idToKeyword[ids3]];
	
	CharitySearch.getNP(0, keywords[0], [city], [state], zipcode, maxdist, numresults, function(q1){
		CharitySearch.getNP(0, keywords[1], [city], [state], zipcode, maxdist, numresults, function(q2){
			CharitySearch.getNP(0, keywords[1], [city], [state], zipcode, maxdist, numresults, function(q3){
				res.json({results: q1.concat(q2).concat(q3)});
			});
		});
	});
});

var itemKeywords = {
	water: 0,
	bottle: 0,
	clothes: 1,
	clothing: 1,
	shirt: 1,
	pants: 1, 
	sweater: 1,	
	shoes: 1,
	shoe: 1,
}
var keywordsToItems = ["water bottle", "clothes"];
app.post('/image', (req, res) =>{
	var buff = new Buffer(req.body.image, 'base64');
	fs.writeFileSync('./pics/imageSearch.png', buff);
	var dat = fs.readFileSync('./pics/imageSearch.png');

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
		var jsonResponse = JSON.parse(body);
		var tags = jsonResponse.description.tags;
		
		//handle the search
		var arrKeywords = [false, false];
		for(i = 0; i < tags.length; i++){
			if(itemKeywords.hasOwnProperty(tags[i])){
				arrKeywords[itemKeywords[tags[i]]] = true;
			}
			//console.log(tags[i]);
		}
		
		//find all the charities that need this
		console.log(tags);
		console.log(arrKeywords);
		if(arrKeywords[0]){
			if(arrKeywords[1]){
				DataBase.getNP(keywordsToItems[0], function(q1){
					DataBase.getNP(keywordsToItems[1], function(q2){
						res.json({
							items: arrKeywords, 
							results: q1.concat(q2)
						});
					});
				});
			}else{
				
				DataBase.getNP(keywordsToItems[0], function(q2){
					console.log(q2);
					res.json({
						hello: "hello"
					});
				});
			}
		}else if(arrKeywords[1]){
			DataBase.getNP(keywordsToItems[1], function(q2){
				console.log(q2);
				res.json({
					hello: "hello"
				});
			});
		}else{
			res.json({
				hello: "hello"
				items: [],
				results: []
			});
		}
		
		//console.log();		
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
