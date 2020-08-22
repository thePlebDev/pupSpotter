const express = require('express');
const User = require('../../Models/User')


const registerRouter = express.Router()

registerRouter.post('/',(req,res,next)=>{
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username:username},function(err,user){
    if(err){ return next(err)}
    if(user){
        return res.send('user already here m8')
    }
    const newUser = new User({
      username,
      password
    });
    newUser.save(next)
    console.log()
    res.send('created new user')

  })

})

module.exports = registerRouter
