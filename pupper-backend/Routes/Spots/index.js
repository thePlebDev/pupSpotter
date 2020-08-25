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
//A GET REQUEST TO RECIEVE ALL OF THE SPOTS FROM THE DATA BASE
spottingRouter.get('/all',(req,res)=>{
  Spotting.find()
  .then(data=>res.send(data))
  .catch(err=>res.send(err))
})


// A POST REQUEST TO RECIEVE ALL OF THE SPOTS FROM THE DATA BASE
spottingRouter.post('/',(req,res,next)=>{
  //what will it send when it is not authenticated? maybe the error
  const {name,image,location,date} = req.body;
  const newSpotting = new Spotting({
    name,
    image,
    location:{lat:location.lat,lon:location.long},
    date
  })
  newSpotting.save()
  .then(data=>res.json({message:'new Spotting created',status:200}))
  .catch(error=>res.send(error))
})

module.exports = spottingRouter
