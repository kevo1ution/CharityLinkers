var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var MongoUrl = "mongodb://localhost:27017/mydb";

MongoClient.connect(MongoUrl, function(err, db){

	if(err) throw err;
	var dbo = db.db("mydb");
	var myobj = {name: "Company Inc", address: "Highway 37" };
	dbo.collection("customers").insertOne(myobj, function(err, res){
		console.log("1 document insterted");
		db.close();
	});
});

class Database{
	constructor(){
		//open update database
		this.dbo = db.db("mydb");
	}

	

	close(){
		this.dbo.close(); //close out the database
	}
}


