var mongodb = require("mongodb");
var express = require('express'); 
var mongoclient = mongodb.MongoClient;
var url = "mongodb://localhost:27017";
app  = express()
var DatabaseName = "test";
app.post('/mongo',(req, res) => {
  app.use(bodyParser.urlencoded({extended: false}))
  console.log(req.body)
  mongoclient.connect(url, { useNewUrlParser: true}).then((client)=>{
    db = client.db(DatabaseName)
    
    db.collection("users").insertOne({name :  "John", age : "16"})
    .then(result =>{
      let responsewithMessage = {
        result : result,
        message : "User added successfully",
        
      };
      let response = {
        "statusCode": 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        "body": JSON.stringify(responsewithMessage),
        // "isBase64Encoded": false
      };
      res.send(response)
    })
    .catch(err => res.send(err))
    //console.log({db})
  }).catch(err =>{
      console.log(err)
  })
  });
app.listen(3000);