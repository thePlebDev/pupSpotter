const registerUserSubscriber = require('../Subscribers/registerUserSubscriber')

const registerUserService = (function(){


  return{
    registerUser: async function(username,password,bio,email,next){
      try{
        const response = await registerUserSubscriber.newUser(username,password,bio,email,next)
        return response
      } catch(e){
        return e
      }
  }
  }
}())

module.exports = registerUserService
