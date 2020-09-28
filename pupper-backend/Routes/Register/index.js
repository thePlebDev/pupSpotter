const express = require('express');
const registerUserService = require('../../Services/registerUserService')

const registerRouter = express.Router()

registerRouter.post('/', (req,res,next)=>{
  const {username,password,bio,email} = req.body
  registerUserService.registerUser(username,password,bio,email,next)
    .then(data=>{
      // console.log(data)
      res.json(data)
    })
    .catch(error=>{next(error)})
})


module.exports = registerRouter
