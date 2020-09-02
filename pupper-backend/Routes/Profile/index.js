const express = require('express');
const Spotting = require('../../Models/Spotting');

const profileRouter = express.Router()


function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    console.log('AUTHENTICATED')
    next();
  }else {
    res.send('not authenticated')
  }
}


profileRouter.get('/',ensureAuthenticated,(req,res)=>{

  //I need to find all spottings where the .user is equal req.user
    Spotting.find({user:req.user._id},(err,data)=>{
      if(err) res.send(err)
      res.send(data)
    })
})

module.exports = profileRouter
