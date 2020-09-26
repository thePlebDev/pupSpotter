//THIS IS THE DATA ACCESS LAYER.
// I THINK THIS MAY HAVE TO BECOME OBJECT ORIENTED
const Spotting = require('../Models/Spotting');

const votingSubscriber=(function(){

  return{
    voteOnce: async function(id){
      const data = await Spotting.findById(id).exec()
      const response = await Spotting.updateOne({ _id: id }, {
      vote: data.vote + 1
    }).exec()
      return{response}
    }


  }
}())


module.exports = votingSubscriber
