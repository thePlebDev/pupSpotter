const {MONGODB_URI} = require('../enviromentConfig')
const mongoose = require('mongoose');
const session = require("express-session");
const MongoStore = require('connect-mongo')(session)

const mongooseLoader =(function(){

  return{
    connection: function(app){
      const url =MONGODB_URI;
      const db = mongoose.connection
      const connection = mongoose.createConnection(url)
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

      mongoose.connect(url,{useUnifiedTopology: true,
      useNewUrlParser: true});
      db.once('open',()=>{
        console.log('Database connected',url)
      })
      db.once('error',err=>{
        console.error('connection error',err)
      })
    },
  }

}())

module.exports = mongooseLoader
