const express = require('express')
const Spotting = require('../../Models/Spotting');

const spottingRouter = express.Router();

function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    console.log('AUTHENTICATED')
    next();
  }else {
    res.send('not authenticated')
  }
}

spottingRouter.post('/',ensureAuthenticated,(req,res,next)=>{
  const {name,image,location} = req.body
  const newSpotting = new Spotting({
    name,
    image,
    location,
    user:req.user.id
  })
  newSpotting.save()
  .then(data=>res.send(data))
  .catch(error=>res.send(error))
})

module.exports = spottingRouter
