const registerUserSubscriber = require('../Subscribers/registerUserSubscriber')

const registerUserService = (function(){


  return{
    registerUser: function(username,password,bio,email,next){

        registerUserSubscriber.newUser(username,password,bio,email,next)
        .then(data=>{return data})
        .catch(error=>{return error})
  }
  }
}())

module.exports = registerUserService
