const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ParkJoyeong:abc1234@simple-boiler.z32rj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    {useNewUrlParser: true}).then(() => console.log('DB connected'))
                            .catch(err => console.log(err));

app.get('/', (req, res)=>{
    res.send('hello world')
});




app.listen(5000);