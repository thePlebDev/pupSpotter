//THIS IS THE DATA ACCESS LAYER.
// I THINK THIS MAY HAVE TO BECOME OBJECT ORIENTED
const Spotting = require('../Models/Spotting');

const votingSubscriber=(function(){

  return{
    voteOnce: async function(id){
      const data = await Spotting.findById(id).exec()
      if(!data){
        const response ={status:500,message:"please try agin"}
        return response
      }else {
        const response = await Spotting.updateOne({ _id: id }, {
        vote: data.vote + 1
      }).exec()
        return{response}

      }

    },

    highestVote: async function(){
      const response =await Spotting.find({vote:{$gte:1}}).exec()
      return {response}
    },

    lowestVote: async function(){
      const response = await Spotting.find().exec()
      return{response}
    },
    getAllSpots: async function(){
      try{
         const response = await Spotting.find().exec()
         return response
      }catch(error){
        return error
      }
    },
    newSpotting: async function(name,image,location,date,description,id){
      try{
        const newSpotting = new Spotting({
          name,
          image,
          location:{lat:location.lat,lon:location.lon},
          date,
          user:id,
          description
        })
      let response = await newSpotting.save()
        .then(data=>{
          return {message:'new Spotting created',status:200}})
        .catch(error=>{return error})

      return {response}
      }
      //{message:'new Spotting created',status:200}
      catch(error){
        return error
      }
    }
  }
}())

module.exports = votingSubscriber
