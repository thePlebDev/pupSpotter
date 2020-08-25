const express = require('express')
const passport = require('passport')

const loginRouter = express.Router()

loginRouter.post("/login",passport.authenticate('login'),
  function(req,res){
    res.json({
      status:200,
      message:'Login successful'
    })
  },
  function(req,res){
    res.json({
      status:204,
      message:"Password or Username was incorrect"
    })
  }
)

loginRouter.get("/logout",function(req,res){
  req.logout();
  res.redirect("/")
});

module.exports = loginRouter
