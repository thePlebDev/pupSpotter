const express = require('express')
const Spotting = require('../../Models/Spotting');
const multer = require('multer')
const spotFilterServices = require('../../Services/plusOneVote')


const spottingRouter = express.Router();

function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    console.log('user is authenticated')
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

//A POST REQUEST TO ADD PLUS ONE TO THE VOTE ON THE MODELS
spottingRouter.post('/vote',
  async (req,res,next)=>{
    const {id} = req.body
    const {response} = await spotFilterServices.plusOneVote(id) // this will be located in the service layer
    return res.json({response})
})

//GET REQUESTS TO FIND THE MODEL WITH THE LOWEST AND HIGHEST VOTES
spottingRouter.get('/highest',
  async(req,res,next)=>{
    const {data} = await spotFilterServices.findHighestVote()
    return res.json({data})
  })
spottingRouter.get('/lowest',
  async(req,res,next)=>{
    const {data} = await spotFilterServices.findLowestVote()
    return res.json({data})
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
