const passport = require('passport');
const User = require("../Models/User")

const LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
  console.log('serialzed')
  passport.serializeUser(function(user, done) {
    console.log(user._id)
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('login', new LocalStrategy(
  function(username, password, done) { // username and password will get extracted from req by Passport,
    console.log(username)
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.User not found!' });
      }
       user.checkPassword(password,function(err,isMatch){
         if(err){return done(err)}
         if(isMatch){
           //console.log(user) it is definetly the user object that we want
           return done(null,user);
         }else{
           return done(null,false,{message:"Invalid password"})
         }
       });
    });
  }));

}
