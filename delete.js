const {MongoClient, ObjectID} = require('mongodb')
// const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'test';
const id = new ObjectID();
console.log(id.getTimestamp());
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    };

    const db = client.db(databaseName);
    // const deleteOne = db.collection("user").deleteOne({ name: "sjidkhanfgfftidjugfiudjd7iqw2"});
    const deleteMany = db.collection("user").deleteMany({ password: "1234"});

    deleteMany.then(() =>{console.log("deleted successfully")});
    deleteMany.catch(() =>{console.log("Failed to delete")});

})