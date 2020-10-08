const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
const passport = require('passport');
const passportConfig = require('./passportConfig')
const cookieParser = require('cookie-parser');
const cors = require("cors");
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean');

const mongooseLoader = require('./Loaders/mongooseLoader')


const User = require('./Models/User')

//Routers
const loginRouter = require('./Routes/Login');
const registerRouter = require('./Routes/Register');
const spottingRouter = require('./Routes/Spots');
const authenticatedCheckRouter = require('./Routes/isAuthenticated')

const app = express()
passportConfig()

// MONGOOSE LOADER
mongooseLoader.connection(app)

//Data sanitization against NoSQL query injection

app.use(mongoSanitize());
app.use(xss())
//SET UP STUFF
app.use(bodyParser.json())

 app.use(cookieParser("TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX"))
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}));


//BASIC SET UP
app.use('/user',loginRouter)
app.use('/spot',spottingRouter)
app.use('/register',registerRouter)
app.use('/isAuthenticated',authenticatedCheckRouter)
app.all('*',(req,res,next)=>{
  const err = new Error(`Can not find ${req.originalUrl}`)
  err.status = 'fail';
  err.statusCode = 404;
  next(err)
});


//THIS SHOULD BE AN ERROR LOADER
const unhandledRejections = new Map();
process.on('unhandledRejection', function(reason, promise){
  //ANY global unhandled promise rejections.
  unhandledRejections.set(promise, reason);

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



module.exports = app
