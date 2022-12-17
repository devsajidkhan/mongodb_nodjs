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
    db.collection("user").findOne({ name : "sjidkhanfgfftidjugfiudjd7iqw2"}, (err , res) => {console.log(res)})

})
