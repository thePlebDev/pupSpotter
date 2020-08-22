const express = require('express');
const User = require('../../Models/User')

const registerRouter = express.Router()

registerRouter.post('/',(req,res,next)=>{
  const {username,password,bio,email} = req.body


  User.findOne({ username:username},function(err,user){
    if(err){ return next(err)}
    if(user){
      return  res.json({status:204,message:'User already exits'})
    }
    const newUser = new User({
      username,
      password,
      bio,
      email
    });
    newUser.save(next)
    res.json({status:200,message:"User Created"})

  })

})

module.exports = registerRouter
