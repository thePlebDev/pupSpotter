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
    }

  }
}())


module.exports = spotFilterServices
