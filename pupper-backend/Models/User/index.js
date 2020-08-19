const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
const salt = bcrypt.genSaltSync(10)


const userSchema = new Schema({
  username:{type:String,required:true,unique:true},
  email:String,
  bio:String,
  password:{type:String,required:true},
  posts:[{type:Schema.Types.ObjectId, ref:'Spot'}]

})

userSchema.pre('save',function(done){
  //this should run before every save call to the user model
  let user = this;
  if(!user.isModified("password")){
    return done();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hashedPassword) {
      if(err){return done(err);}
      user.password = hashedPassword;
      done();
    });
});
});

userSchema.methods.checkPassword = function(guess,done){
  bcrypt.compare(guess,this.password, function(err,isMatch){
    done(err,isMatch)
  })
}




const User = mongoose.model('User',userSchema);

module.exports = User
