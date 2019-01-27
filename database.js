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
});

 function addNP(name, table){
	//table = { itemsWanted: {food: true, water: false, papertowels: false, clothes: true} }
	dbo.collection("NP").insertOne(table, function(err, res){
		if(err) throw err;
	});
}
	
function addUser(table){
	dbo.collection("Users").insertOne(table, function(err, res){
		if(err) throw err;
	});
}

function donateItem(user, name, Np){
	
}
	
function donateMoney(user, name, Np, amount){
	
}

//getter information
function getUser(name, callback){
	dbo.collection("Users").find({'username': name}).toArray(function(err,docs){
		console.log(docs);
		callback(docs);
	});
}

function closeDB(){
	client.close(); //close out the database
}



module.exports = {
	addNP: addNP,
	addUser: addUser,
	getUser: getUser,
	donateItem: donateItem,
	donateMoney: donateMoney,
	closeDB: closeDB,
};


