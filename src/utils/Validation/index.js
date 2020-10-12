

const signupValidation =(state)=>{
  const errors={}
  const allowedExtensions =/(\.jpg|\.jpeg|\/png|\.gif)$/i;

  if(!state.name){
    errors.name='Please enter a name for the pup'
  }
  if (!state.location) {
    errors.loc ='Please click add location'
  }
  return(
    errors
  )
}
const registerValidation=(state)=>{
  const errors ={}
  const regex ='/\S+@\S+\.\S+/'

  if(!state.username ){
    errors.username='Please enter a name'
  }

  if(!state.email){

    errors.email ='Please enter a email address';
  }

  if(!state.password){
    errors.password = 'Please enter a password';
  }
  if (state.password && state.password.length < 10) {
    errors.password = 'Password is too short'

  }

  return errors
}
const loginValidation=(state)=>{
  const errors ={}

  if(!state.username){
    errors.username= "Please enter a username"
  }
  if(!state.password){
    errors.password = "Please enter a password"
  }


  return errors
}
const workFormValidation =(state)=>{
  const errors ={}

  if(!state.textarea){
    errors.textarea = 'Input required';
  }
  return errors
}

export {signupValidation,registerValidation,loginValidation,workFormValidation}
