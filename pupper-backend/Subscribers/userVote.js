//THIS IS THE DATA ACCESS LAYER.
// I THINK THIS MAY HAVE TO BECOME OBJECT ORIENTED
const Spotting = require('../Models/Spotting');


const userVote = async(id)=>{
  const data = await Spotting.findById(id).exec()
  const response = await Spotting.updateOne({ _id: id }, {
  vote: data.vote + 1
});
  return{response}
}

module.exports = userVote
