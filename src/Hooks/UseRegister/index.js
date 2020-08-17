import {useState} from 'react';

const useRegister =(validator)=>{

  const [state,setState] = useState({name:'',email:'',bio:'',password:''})
  const [errors,setErrors] = useState({})

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('submitted')
    setErrors(validator(state))
  }

  const handleChange =(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})

  }


  return{
    state:state.name,
    bio:state.bio,
    email:state.email,
    password:state.password,
    errors,
    handleChange,
    handleSubmit
  }
}

export default useRegister;
