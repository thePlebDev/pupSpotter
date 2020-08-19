const mongoose = require('mongoose');

const Schema = mongoose.Schema


const spottingSchema = new Schema({
  name:{type:String,required:true},
  date:{type:Date,default:Date.now},
  image:{type:String},
  location:{
    lat:Number,
    lon:Number
  },
  user:{type:Schema.Types.ObjectId,ref:"User"} // all ids we store here must be document _ids from the Story model

})

const Spotting = mongoose.model("Spot",spottingSchema)

module.exports = Spotting
