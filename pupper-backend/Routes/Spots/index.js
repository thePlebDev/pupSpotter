const express = require('express')
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
spottingRouter.get('/all', async(req,res,next)=>{
  try{
    const response = await spotFilterServices.getAllSpots()
    res.json({response})
  }catch(error){
    next(error)
  }
})

//A POST REQUEST TO ADD PLUS ONE TO THE VOTE ON THE MODELS
spottingRouter.post('/vote',
  async (req,res,next)=>{
    console.log(req.body)
    const {id} = req.body
    const {response} = await spotFilterServices.plusOneVote(id) // this will be located in the service layer
    return res.json({response})
})

//GET REQUESTS TO FIND THE MODEL WITH THE LOWEST AND HIGHEST VOTES
spottingRouter.get('/highest',
  async(req,res,next)=>{
    const {data} = await spotFilterServices.findHighestVote()
    let response = [data]
    return res.json({response})
  })
spottingRouter.get('/lowest',
  async(req,res,next)=>{
    const {data} = await spotFilterServices.findLowestVote()
    let response = [data]
    return res.json({response})
  })


// A POST REQUEST TO create a spotting of a pupper.
spottingRouter.post('/',ensureAuthenticated,
  async (req,res,next)=>{
  try{
    const {name,image,location,date,description} = req.body;
    const id = req.user._id
    const response = await spotFilterServices.newSpotting(name,image,location,date,description,id)
    return res.json({response})
  }
  catch(error){
    console.log(error)
    next(error)
  }
})


module.exports = spottingRouter
