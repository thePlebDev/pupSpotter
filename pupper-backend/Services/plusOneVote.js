const votingSubscriber = require('../Subscribers/userVote')


const spotFilterServices =(function(){

  return{
    plusOneVote: async function(id){
      const response = await votingSubscriber.voteOnce(id) // this is in the data access layer
      return {response}
    }

  }
}())


module.exports = spotFilterServices
