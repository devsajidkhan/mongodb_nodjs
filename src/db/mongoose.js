const mongoose = require('mongoose');
// const connectionURL = 'mongodb://localhost:27017';

// const connection = mongoose.connect(connectionURL, { useNewUrlParser: true });

// connection.then(() => {
//     console.log('Connected to MongoDB');
// });
const connection = mongoose.createConnection('mongodb://localhost:27017/Persons'); //  create a custom connection
const user = connection .model('Users', {
    name: { type: String},
    age: {type: Number},
    address: {type : String}
});

const insert = new user({
    name : "sajid khan",
    age : 25,
    address : "lahore"
});

insert.save().then((response) =>{
    console.log(response);
}).catch((err) => {console.log(err)});