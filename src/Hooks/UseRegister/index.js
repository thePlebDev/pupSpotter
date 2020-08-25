import {useState,useEffect} from 'react';
import axios from 'axios'

import {backendUrl} from '../../utils/Constants'

const useRegister =(validator)=>{

  const [state,setState] = useState({username:'',email:'',bio:'',password:''})
  const [errors,setErrors] = useState({})
  const [isSubmiting,setIsSubmitting] = useState(false)
  const [status,setStatus] = useState('')

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
      axios.post(`${backendUrl}register`,{
        username:state.username,
        email:state.username,
        bio:state.bio,
        password:state.password
      })
      .then(data=>{
        setStatus(data.data.status)
        return data.data.status
      })
      .then(data=>console.log(data))
      .catch(error=>console.error(error))
    }
    setIsSubmitting(false)
  },[isSubmiting,errors,state])

  return{
    state:state.username,
    bio:state.bio,
    email:state.email,
    password:state.password,
    errors,
    handleChange,
    handleSubmit,
    status
  }
}

export default useRegister;
