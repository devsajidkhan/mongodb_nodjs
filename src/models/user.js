const validator = require('validator');
const mongoose = require('mongoose');



const User = mongoose.model('Users', {
    name: { 
        type : String, 
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        trim : true,
        minlength : 6,
        validate(value){
            if(value.includes('password')){
                throw new Error('password cannot contain password');
            }
        }
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

module.exports = User;