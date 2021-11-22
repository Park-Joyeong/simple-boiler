const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb+srv://ParkJoyeong:abc1234@simple-boiler.z32rj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    {useNewUrlParser: true}).then(() => console.log('DB connected'))
                            .catch(err => console.log(err));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());



app.listen(5000);