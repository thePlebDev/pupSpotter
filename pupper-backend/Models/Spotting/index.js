const mongoose = require('mongoose');

const Schema = mongoose.Schema


const spottingSchema = new Schema({
  name:{type:String,required:true},
  description:{type:String},
  date:{type:Date,default:Date.now},
  image:{data:Buffer,contentType:String},
  location:{
    lat:Number,
    lon:Number
  },
  user:{type:Schema.Types.ObjectId,ref:"User"} // the type will be a an ObjectId and during population the model to be used will be the User


})

const Spotting = mongoose.model("Spot",spottingSchema)

module.exports = Spotting
