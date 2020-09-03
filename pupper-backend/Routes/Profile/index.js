const express = require('express');
const Spotting = require('../../Models/Spotting');

const profileRouter = express.Router()


function ensureAuthenticated(req,res,next){
  try {
    if(req.isAuthenticated()){
      console.log('AUTHENTICATED')
      next();
    }else {
      res.send('not authenticated')
    }

  } catch (e) {
    console.log(e)
    next(e)
  }
}


profileRouter.get('/',ensureAuthenticated,(req,res,next)=>{

    try {
      Spotting.find({user:req.user._id},(err,data)=>{
        if(err) next(err)
        res.send(data)
      })
    } catch (e) {
      console.log(e)
      next(e)
    }
})

module.exports = profileRouter
