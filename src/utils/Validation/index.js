

const signupValidation =(state)=>{
  const errors={}
  const allowedExtensions =/(\.jpg|\.jpeg|\/png|\.gif)$/i;

  if(!state.name){
    errors.name='Please enter a name for the pup'
  }
  if (!state.loc) {
    errors.loc ='Please click add location'
  }
  if(!allowedExtensions.exec(state.image)){
    errors.image='Please enter a proper image file'
  }
  return(
    errors
  )
}
const registerValidation=(state)=>{
  const errors ={}
  const regex ='/\S+@\S+\.\S+/'

  if(!state.name ){
    errors.name='Please enter a name'
  }

  if(!state.email){

    errors.email ='Please enter a email address';
  }

  if(!state.password){
    errors.password = 'Please enter a password';
  }
  if (state.password && state.password.length < 10) {
    errors.passowrd = 'Password is too short'

  }
  console.log(errors)
  return errors
}
const loginValidation=(state)=>{
  const errors ={}

  if(!state.username){
    errors.username= "Please enter a username "
  }
  if(!state.username){
    errors.username = "Plase enter a password"
  }


  return errors
}

export {signupValidation,registerValidation,loginValidation}
