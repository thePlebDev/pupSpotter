
const validation =(state)=>{
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

export default validation
