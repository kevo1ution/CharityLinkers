var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var MongoUrl = "mongodb://localhost:27017/mydb";
var client = new MongoClient(MongoUrl);

var dbo;


client.connect(function(err){
	//open update database
	dbo = client.db("mydb");

	/*testing stuff
	addUser({
		username: "kevin",
		password: "pass",
		prefArr: ['pref1', 'pref2', 'pref3']
	});
	*/
	
	/*
	addNP("", {name: "", item: "" })
	*/
	/*
	dbo.collection("NP").insertMany(
		[{name: "TEXAS WOMENS FOUNDATION", item: "water bottle"},
		{name: "Young Women's Preparatory Network", item: "water bottle"},
		{name: "Women In Need of Generous Support", item: "clothes"},
		{name: "Womens Foodservice Forum", item: "clothes"},
		{name: "H.I.S. BRIDGEBUILDERS", item: "water bottle"},
		{name: "SKILL QUEST", item: "clothes"},
		{name: "Inclusive Communities Housing Development Corporation", item: "water bottle"},
		{name: "GREEN CAREERS DALLAS", item: "clothes"},
		{name: "H.I.S. BRIDGEBUILDERS", item: "clothes"},
		{name: "SKILL QUEST", item: "clothes"},
		{name: "Inclusive Communities Housing Development Corporation", item: "water bottle"},
		{name: "GREEN CAREERS DALLAS", item: "water bottle"}]
	);
	*/
});

//non profit information
 function addNP(name, table){
	//table = { itemsWanted: {food: true, water: false, papertowels: false, clothes: true} }
	dbo.collection("NP").insertOne(table, function(err, res){
		if(err) throw err;
	});
}

function getNP(item, callback, charity){
	dbo.collection("NP").find({'item': item}).toArray(function(err,docs){
		callback(docs);
	});
}

//user functions
function addUser(table, res){
	//see if the user exists
	userExists(table.username, function(temp){
		if(temp){ 
			res.json({auth: false});
			res.end();
			return; 
		};
		
		dbo.collection("Users").insertOne(table, function(err, temp){
			if(err) throw err;
			
			res.json({auth: true});
			res.end();
		});
	});
}

function updateUser(table, callback){
	dbo.collection("Users").updateOne({'username': table.username}, 
		{ $set: table },
		{upsert: true}
	);
}

function getUser(name, callback){
	dbo.collection("Users").find({'username': name}).toArray(function(err,docs){
		callback(docs[0]);
	});
}

function userExists(name, callback){
	dbo.collection("Users").find({'username': name}).toArray(function(err,docs){
		callback(docs.length > 0);
	});	
}

//transactions
function donateItem(user, name, Np){
	
}

function donateMoney(user, name, Np, amount){
	
}




function closeDB(){
	client.close(); //close out the database
}

module.exports = {
	addNP: addNP,
	addUser: addUser,
	donateItem: donateItem,
	donateMoney: donateMoney,
	getUser: getUser,
	getNP: getNP,
	userExists: userExists,
	closeDB: closeDB,
};


