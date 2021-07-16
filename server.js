const express = require('express');
const connectDB = require('./config/db');
const User = require('./model/User');

const app = express();

// Connect Database
connectDB();
//Init Middleware
app.use(express.json({ extended: false }));


// create user route
app.use('/createUser',(req,res)=>{
    let myUser = new User(req.body);

    myUser.save()
    .then(()=>{
        res.status(200).json({"message":"user created"})
    })
    .catch((err)=>{
        res.status(400).json({"message":err})
    })
})

//get user route
app.use('/getUser',(req,res)=>{
    let firstname = req.body.firstName;
    User.findOne({firstName:firstname})
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.status(400).json({"message" : err});
    })
})

//default route
app.use('/',(req,res)=>{
    res.status(404).json({"message" : "Wrong route"});
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})