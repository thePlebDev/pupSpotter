const User = require('../Models/User')


const registerUserSubscriber = (function(){
  return{
    newUser: async function(username,password,bio,email,next){
      let user = await  User.findOne({ username:username}).exec()
            if(user){
              return {status:204,message:'User already exits'}
            }else{
              const newUser = new User({
                username,
                password,
                bio,
                email
              });
              let response = await newUser.save()
              .then(data=>{return {status:200,message:"User created"}})
              .catch(error=>{return error})
              return response 
          }
    }
  }
}())

module.exports = registerUserSubscriber
