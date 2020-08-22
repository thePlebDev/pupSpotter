const express = require('express')
const passport = require('passport')

const loginRouter = express.Router()
  
loginRouter.post("/login",passport.authenticate('login'),
  function(req,res){
    res.send("authentication sucessful")
  }
)

loginRouter.get("/logout",function(req,res){
  req.logout();
  res.redirect("/")
});

module.exports = loginRouter
