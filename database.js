var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var MongoUrl = "mongodb://localhost:27017/mydb";

class Database{
	constructor(){
		//open update database
		this.dbo = db.db("mydb");		
	}

	addNP(name, table){
		//table = { itemsWanted: {food: true, water: false, papertowels: false, clothes: true} }
		this.dbo.collection("NP").insertOne(table, function(err, res){
			if(err) throw err;
		});
	}
	
	addUser(name, table){
		this.dbo.collection("Users").insertOne(table, function(err, res){
			if(err) throw err;
		});
	}
	
	donateItem(user, name, Np){
		
	}
	
	donateMoney(user, name, Np, amount){
		
	}

	close(){
		this.dbo.close(); //close out the database
	}
}


