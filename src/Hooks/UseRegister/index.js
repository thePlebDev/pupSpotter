import {useState,useEffect} from 'react';

const useRegister =(validator)=>{

  const [state,setState] = useState({name:'',email:'',bio:'',password:''})
  const [errors,setErrors] = useState({})
  const [isSubmiting,setIsSubmitting] = useState(false)

  const handleSubmit =(e)=>{

    e.preventDefault()
    setErrors(validator(state))
    setIsSubmitting(true)
  }

  const handleChange =(e)=>{

    const {name,value} = e.target
    setState({...state,[name]:value})
  }

  useEffect(()=>{
    if(isSubmiting && Object.keys(errors).length === 0){
      console.log('send the api request')
      setIsSubmitting(false)
    }
  },[isSubmiting,errors])

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
