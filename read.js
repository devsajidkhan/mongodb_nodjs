// CRUD create read update delete

const {MongoClient, ObjectID} = require('mongodb')
// const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'test'
const id = new ObjectID()
console.log(id.getTimestamp())
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    db.collection("user").findOne({ _id : new ObjectID("638f2607cd05fe845ac7e132")}, (err , res) => {console.log(res)})
    // db.collection("user").find({password : "1234"}).limit(2).toArray((err, res) => {console.log(res)})
    db.collection("user").find({password : "1234"}).forEach(res => { console.log(res)});

})
