const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://admino:maraton1@cluster0-shard-00-00-jlznx.mongodb.net:27017,cluster0-shard-00-01-jlznx.mongodb.net:27017,cluster0-shard-00-02-jlznx.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';



app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});

app.use(cors());


app.get('/index', function(req,res){

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("cryptocurrencies").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.json(result);
    db.close();
  });
});


});



 app.post('/delete', function(req,res){
   
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("cryptocurrencies").remove(req.body, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });

 });


     res.json(req.body);
     console.log(req.body)

   });




 app.post('/add', function(req,res){
   

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("cryptocurrencies").insertOne(req.body, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

     res.json(req.body);
     console.log(req.body)

   });