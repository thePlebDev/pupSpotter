const express = require('express')

const profileRouter = express.Router()


function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    console.log('AUTHENTICATED')
    next();
  }else {
    res.send('not authenticated')
  }
}


profileRouter.get('/',ensureAuthenticated,function(req,res){
  res.send(`${req.user} profile`)
})

module.exports = profileRouter
