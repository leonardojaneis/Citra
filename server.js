var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = 8080;
app.listen(port);

var db = new mongodb.Db(
'Contas',
new mongodb.Server('localhost', 27017, {}),
{}
);

console.log('Server funcional na porta:' + port);


//readFiles from mongoDb
app.get('/', function(req, res){

	db.open(function(err, mongoclient){
		mongoclient.collection('Conta', function(err, collection){
			collection.find().toArray(function(err, results){
				if(err){
					res.json(err);	
					
				} else{
					res.json(results);	
				}
			mongoclient.close();

	});
});
});
});