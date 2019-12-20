const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

var Request = require("request");
var MongoClient = require('mongodb').MongoClient;


app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});

app.use(cors());


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");

// app.get('/updateprices', function(req,res){

//   dbo.collection("cryptocurrencies").find({step:2} ).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);


//    dbo.collection("cryptocurrencies").remove(result[0], function(err, obj) {
//   });

//     Request.get("https://min-api.cryptocompare.com/data/price?fsym="+result[0].cryptocurrency_code+"&tsyms=EUR", (error, response, body) => {
  
// 	result[0]["price"]=JSON.parse(body).EUR;
	
// 	console.log(result);

//    dbo.collection("cryptocurrencies").insertOne(result[0], function(err, res) {
//       });

//   });



//   });
//     db.close();
// });

// res.send("done");
// });

var cron = require('node-cron');

function updatep(index) {
  // body...
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

 
  dbo.collection("cryptocurrencies").find({step:index+1} ).toArray(function(err, result) {
    if (err) throw err;
  //  console.log(result);


  Request.get("https://min-api.cryptocompare.com/data/price?fsym="+result[0].cryptocurrency_code+"&tsyms=EUR", (error, response, body) => {
   
console.log(JSON.parse(body).EUR);


console.log("ikindi"+result)
//result = this.result;

   dbo.collection("cryptocurrencies").remove(result[0], function(err, obj) {
  });

console.log("utundu"+result)
  result[0]["price"]= JSON.parse(body).EUR;
  console.log(result[0]);

   dbo.collection("cryptocurrencies").insertOne(result[0], function(err, res) {
      });

    
  });





});

dbo.collection("cryptocurrencies").find({}).toArray(function(err, result) {
    if (err) throw err;
  index++;  
if (index<result.length) {
console.log(index)
console.log(result.length)

   updatep(index);}
db.close();
  });  
 });
}


cron.schedule('*/5 * * * *', () => {
  
  console.log('running  task every 5 minutes');



    updatep(0)


});


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
     console.log(resq.body)

   });




 app.post('/add', function(req,res){
   

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  Request.get("https://min-api.cryptocompare.com/data/price?fsym="+req.body.cryptocurrency_code+"&tsyms=EUR", (error, response, body) => {

   dbo.collection("cryptocurrencies").find({}).toArray(function(err, result) {
  req.body.step= result.length+1;
  req.body.price = JSON.parse(body).EUR;

  dbo.collection("cryptocurrencies").insertOne(req.body, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  });

  });

});

     res.json(req.body);
     console.log(req.body)

   });
