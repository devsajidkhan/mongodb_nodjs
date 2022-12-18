const mongoose = require('mongoose');
const validator = require('validator');

// const connectionURL = 'mongodb://localhost:27017';

// const connection = mongoose.connect(connectionURL, { useNewUrlParser: true });

// connection.then(() => {
//     console.log('Connected to MongoDB');
// });
const connection = mongoose.createConnection('mongodb://localhost:27017/Persons'); //  create a custom connection

const user = connection .model('Users', {
    name: { 
        type : String, 
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    age: {
        type : Number,
        default : 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number');
            }
        }
    },
    address: {
        type : String
    },
});

const insert = new user({
    name : "usama",
    email : "usama@gmail.com",
    age : 25,
    address : "khanpur"
});

insert.save().then((response) =>{
    console.log(response);
}).catch((err) => {console.log(err)});