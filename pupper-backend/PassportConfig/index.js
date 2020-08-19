const passport = require('passport');
const User = require("../Models/User")

const LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
  passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

}

passport.use('login', new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.User not found!' });
      }
       user.checkPassword(password,function(err,isMatch){
         if(err){return done(err)}
         if(isMatch){
           return done(null,user);
         }else{
           return done(null,false,{message:"Invalid password"})
         }
       });
    });
  }));
