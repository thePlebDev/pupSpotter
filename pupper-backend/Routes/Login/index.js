const express = require('express')
const passport = require('passport')

const loginRouter = express.Router()

loginRouter.post("/login",passport.authenticate('login'), //authenticate pulls out username and password automatically.
  function(req,res,next){ // this gets called on a successful login
      res.json({
        status:200,
        message:'Login successful n stuff'
      })
  }
)

loginRouter.get('/logout', function(req, res,next){
  try{
    req.logout();
    res.json({
      status:200,
      message:'user logged out'
    })
  }
  catch(error){
    console.log(error)
    next(error)
  }
});


module.exports = loginRouter
