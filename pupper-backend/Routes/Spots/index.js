const express = require('express')
const Spotting = require('../../Models/Spotting');


const spottingRouter = express.Router();

function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    next();
  }else {
    res.send('not authenticated')
  }
}
//A GET REQUEST TO RECIEVE ALL OF THE SPOTS FROM THE DATA BASE
spottingRouter.get('/all',(req,res,next)=>{
  try{
    Spotting.find()
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
  }catch(error){
    console.log(error)
    next(error)
  }
})


// A POST REQUEST TO create a spotting of a pupper.
spottingRouter.post('/',ensureAuthenticated,(req,res,next)=>{
  //ensureAuthenticated should ensure that the user is authenticated.
  try{
    const {name,image,location,date} = req.body;
    const newSpotting = new Spotting({
      name,
      image,
      location:{lat:location.lat,lon:location.long},
      date,
      user:req.user._id
    })

    newSpotting.save()
    .then(data=>res.json({message:'new Spotting created',status:200}))
    .catch(error=>res.send(error))
  }
  catch(error){
    console.log(error)
    next(error)
  }
})

module.exports = spottingRouter
