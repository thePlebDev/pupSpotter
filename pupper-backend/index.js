const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session)
const passport = require('passport');
const passportConfig = require('./passportConfig')

const cors = require("cors");

const User = require('./Models/User')
const Spotting = require('./Models/Spotting')

function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    console.log('AUTHENTICATED')
    next();
  }else {
    res.send('not authenticated')
  }
}

const app = express()
const port = 3001
const url ='';
const db = mongoose.connection
const connection = mongoose.createConnection(url)

mongoose.connect(url,{useUnifiedTopology: true,
useNewUrlParser: true,});
db.once('open',()=>{
  console.log('Database connected',url)
})
db.once('error',err=>{
  console.error('connection error',err)
})
passportConfig()
const twoHours = 1000 * 60 * 60

app.use(bodyParser.json())
const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' })
app.use(session({
 secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
 resave: false,
 saveUninitialized: true,
 store:sessionStore,
 cookie:{
   maxAge: 1000 *60*60*24
 }

}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}));


app.get('/',(req,res)=>{
  res.send('THis should be all the pups spotted')
})
app.get('/thing',(req,res)=>{
  console.log(req.user)
})
app.get('/profile',ensureAuthenticated,function(req,res){
  res.send(`${req.user} profile`)
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
//login
})

app.post("/login",passport.authenticate('login'),
  function(req,res){
    res.send("authentication sucessful")
  }
)

app.get("/logout",function(req,res){
  req.logout();
  res.redirect("/")
});

app.listen(port,()=>{
  console.log('listening on port 3000')
})
