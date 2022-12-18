const mongoose = require('mongoose');

// const connectionURL = 'mongodb://localhost:27017';

const connection = mongoose.connect('mongodb://localhost:27017/Persons', { useNewUrlParser: true });

connection.then(() => {
    console.log('Connected');
});
// const connection = mongoose.createConnection('mongodb://localhost:27017/Persons'); //  create a custom connection



// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// module.exports = connection;