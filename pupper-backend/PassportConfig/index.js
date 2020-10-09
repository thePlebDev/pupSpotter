const passport = require('passport');
const User = require("../Models/User")

const LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
  console.log('SERIALIZED')
  passport.serializeUser(function(user, done) {
    console.log(user._id)
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('DESERIALIZED')
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('login', new LocalStrategy(
  function(username, password, done) { // username and password will get extracted from req by Passport,
    console.log(username)
    console.log(password)
    User.findOne({ username: username }, function (err, user) {
      console.log('looking for the user')
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.User not found!' });
      }
       user.checkPassword(password,function(err,isMatch){
         console.log('checkking password')
         if(err){return done(err)}
         if(isMatch){
           console.log('Username matches')
           //req.user is not populated yet
           return done(null,user);
         }else{
           console.log('password no bueno')
           return done(null,false,{message:"Invalid password"})
         }
       });
    });
  }));

}
