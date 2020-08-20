const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require('passport');
const passportConfig = require('./passportConfig')

const User = require('./Models/User')
const Spotting = require('./Models/Spotting')

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
app.use(cookieParser());
app.use(session({
 secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
 resave: true,
 saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig()


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

app.post('/spot',(req,res,next)=>{
  const {name,image,location} = req.body
  const newSpotting = new Spotting({
    name,
    image,
    location
  })
  newSpotting.save()
  .then(data=>res.send(data))
  .catch(error=>res.send(error))

})
app.post("/login",passport.authenticate("login",{
  successRedirect:"/",
  failureRedirect:"/login"
}))
app.get("/logout",function(req,res){
  req.logout();
  res.redirect("/")
});

app.listen(port,()=>{
  console.log('listening on port 3000')
})
