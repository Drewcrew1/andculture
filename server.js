const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const openBrew = require('./routes/api/openBrew');
const favs = require('./routes/api/favs');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;


mongoose.connect(db,{useNewUrlParser: true}).then(() => {
    console.log('mongo connected');
}).catch((err) => {
    console.log(err);
});



app.use('/api/users', users);
app.use('/api/openBrew', openBrew);
app.use('/api/favs', favs);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 6050;

app.listen(PORT);