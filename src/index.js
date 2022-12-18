const express = require('express');
require('./db/mongoose');
const User = require('./models/user');

app  = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then((res) => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
