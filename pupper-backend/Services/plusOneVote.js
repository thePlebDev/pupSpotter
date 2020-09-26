const userVote = require('../Subscribers/userVote')

const plusOneVote = async(id)=>{
  const response = await userVote(id) // this is in the data access layer

  return {response}
}


module.exports = plusOneVote
