const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./Models/User')

const app = express()
const port = 3001
const url ='';
const db = mongoose.connection

mongoose.connect(url,{useUnifiedTopology: true,
useNewUrlParser: true,});
db.once('open',()=>{
  console.log('Database connected',url)
})
db.once('error',err=>{
  console.error('connection error',err)
})
app.use(bodyParser.json())

app.get('/',(req,res)=>{
  res.send('THis should be all the pups spotted')
})

app.post('/register',(req,res,next)=>{
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username:username},function(err,user){
    if(err){ return next(err)}
    if(user){
        return res.send('user already here m8')
    }
    const newUser = new User({
      username,
      password
    });
    newUser.save(next)
    console.log()
    res.send('created new user')

  })

})

app.listen(port,()=>{
  console.log('listening on port 3000')
})
