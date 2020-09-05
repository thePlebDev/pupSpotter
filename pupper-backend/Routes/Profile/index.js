const express = require('express');
const Spotting = require('../../Models/Spotting');

const profileRouter = express.Router()


function ensureAuthenticated(req,res,next){
  try {
    if(req.isAuthenticated()){
      console.log('AUTHENTICATED')
      next();
    }else {
      res.json({
        message:'Not Authorized!',
        status:400,
        data:''
      })
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
        if(data.length ===0){
          res.json({
            message:'No dogs spotted!',
            status:204,
            data:''
          })
        }else{
          res.json({
            message:'many found!',
            status:200,
            data:data
          })
        }
      })
    } catch (e) {
      console.log(e)
      next(e)
    }
})

module.exports = profileRouter
