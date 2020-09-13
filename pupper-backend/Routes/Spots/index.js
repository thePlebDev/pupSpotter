const express = require('express')
const Spotting = require('../../Models/Spotting');
const multer = require('multer')


const spottingRouter = express.Router();

function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    next();
  }else {
    res.json({status:401,message:"Not Authenticated"})
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

spottingRouter.get('/filter',ensureAuthenticated,(req,res,next)=>{

    Spotting.find({user: req.user._id})
    .then(data=>res.send(data))
    .catch(error=>{
      console.log(error)
      next(error)
    })
})


// A POST REQUEST TO create a spotting of a pupper.
spottingRouter.post('/',ensureAuthenticated,(req,res,next)=>{
  //ensureAuthenticated should ensure that the user is authenticated.
  try{
    const {name,image,location,date,description} = req.body;
    console.log('the user should be below')
    console.log(req.user) // the result of the session should be stored here I think. ONce we log in
    const newSpotting = new Spotting({
      name,
      image,
      location:{lat:location.lat,lon:location.lon},
      date,
      user:req.user._id,
      description
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
