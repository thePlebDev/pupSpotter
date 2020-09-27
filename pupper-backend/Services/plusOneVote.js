const votingSubscriber = require('../Subscribers/userVote')


const spotFilterServices =(function(){

  return{
    plusOneVote: async function(id){
      const response = await votingSubscriber.voteOnce(id) // this is in the data access layer
      return {response}
    },
    findHighestVote: async function(id){
      const {response} = await votingSubscriber.highestVote()
      // this gets the object with the highest vote value
      let data = response.reduce((min,item)=>item.vote > min.vote ? item : min,response[0])
      return {data}
    },
    findLowestVote: async function(id){
      const {response} = await votingSubscriber.lowestVote()
      let data = response.reduce((min,item)=>item.vote < min.vote ?item : min,response[0])
    return {data}
  },
    getAllSpots: async function(){
      try {
        const response = await votingSubscriber.getAllSpots()
        return response
      } catch (e) {
        return e
      }
    },
    newSpotting: async function(name,image,location,date,description,id){
      try{
        const {response} = await votingSubscriber.newSpotting(name,image,location,date,description,id)
        return response
      }
      catch(e){
        return e
      }
    }
  }
}())


module.exports = spotFilterServices
