const User = require('../Models/User')


const registerUserSubscriber = (function(){
  return{
    newUser: async function(username,password,bio,email,next){
        User.findOne({ username:username}).exec()
          .then(data=>{
            if(data){
              return {status:204,message:'User already exits'}
            }
            else{
              const newUser = new User({
                username,
                password,
                bio,
                email
              });
              newUser.save()
              return {status:200,message:"User Created"}
            }
          })
          .catch(error=>{return error})
    }
  }
}())

module.exports = registerUserSubscriber
