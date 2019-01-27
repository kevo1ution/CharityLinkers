var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var MongoUrl = "mongodb://localhost:27017/mydb";

var db;
var dbo;


MongoClient.connect(MongoUrl,  { useNewUrlParser: true }).then((err, tempdb) =>{
	//open update database
	db = tempdb;
	dbo = db.db("mydb");
});

 function addNP(name, table){
	//table = { itemsWanted: {food: true, water: false, papertowels: false, clothes: true} }
	this.dbo.collection("NP").insertOne(table, function(err, res){
		if(err) throw err;
	});
}
	
function addUser(name, table){
	this.dbo.collection("Users").insertOne(table, function(err, res){
		if(err) throw err;
	});
}
	
function donateItem(user, name, Np){
		
}
	
function donateMoney(user, name, Np, amount){
		
}

function closeDB(){
	db.close(); //close out the database
}

module.exports = {
	addNP: addNP,
	addUser: addUser,
	donateItem: donateItem,
	donateMoney: donateMoney,
	closeDB: closeDB,
};


