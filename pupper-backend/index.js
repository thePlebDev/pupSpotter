const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require("express-session");
const MongoStore = require('connect-mongo')(session)
const passport = require('passport');
const passportConfig = require('./passportConfig')
const cors = require("cors");
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean');

const User = require('./Models/User')

//Routers
const loginRouter = require('./Routes/Login');
const registerRouter = require('./Routes/Register');
const spottingRouter = require('./Routes/Spots');
const profileRouter = require('./Routes/Profile');


const app = express()
passportConfig()
const port = 3001
const url ='';
const db = mongoose.connection
const connection = mongoose.createConnection(url)
const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' })


mongoose.connect(url,{useUnifiedTopology: true,
useNewUrlParser: true,});
db.once('open',()=>{
  console.log('Database connected',url)
})
db.once('error',err=>{
  console.error('connection error',err)
})

//Data sanitization against NoSQL query injection
app.use(mongoSanitize());
app.use(xss())

app.use(bodyParser.json())
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
app.get('/testing', (req,res)=>{
 res.json({name:'frodo'})
})

app.use('/user',loginRouter)
app.use('/spot',spottingRouter)
app.use('/profile',profileRouter)
app.use('/register',registerRouter)

app.all('*',(req,res,next)=>{
  const err = new Error(`Can not find ${req.originalUrl}`)
  err.status = 'fail';
  err.statusCode = 404;
  next(err)
});

// this will get triggered when we use next(error;)
app.use((err,req,res,next)=>{
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error'

  res.status(err.statusCode).json({
    status:err.status,
    message:err.message
  });
});








app.listen(port,()=>{
  console.log('listening on port 3000')
})

module.exports = app
