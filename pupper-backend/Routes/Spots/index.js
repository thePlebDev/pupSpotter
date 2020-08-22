const express = require('express')
const Spotting = require('../../Models/Spotting');

const spottingRouter = express.Router();



spottingRouter.post('/',(req,res,next)=>{
  const {name,image,location} = req.body
  const newSpotting = new Spotting({
    name,
    image,
    location
  })
  newSpotting.save()
  .then(data=>res.send(data))
  .catch(error=>res.send(error))
//login
})

module.exports = spottingRouter
