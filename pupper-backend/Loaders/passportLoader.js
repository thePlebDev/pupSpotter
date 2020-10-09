const expressSession = require('express-session');
const passport = require('passport');
const passportConfig = require('../passportConfig');
const cookieParser = require('cookie-parser');

const passportLoader = (function(){
  return{
    init: function(app){
      app.use(expressSession({
        secret:'secret',
        resave:true,
        saveUninitialized:true
      }))
      passportConfig()
      app.use(cookieParser("TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX"))
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
}())

module.exports = passportLoader
