import {useState,useEffect} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

import {backendUrl} from '../../utils/Constants';

const useLogin =(validation)=>{

  const [state,setState] = useState({username:'',password:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting ] = useState(false);
  const [authStatus,setAuthStatus] = useState(false);
  const [badLogin,setBadLogin] = useState(false);

  const handleChange = (e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})

  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('submitted')
    setErrors(validation(state))
    setIsSubmitting(true)
  }
  useEffect(()=>{
    if(isSubmitting && Object.keys(errors).length === 0){
      axios.post(`${backendUrl}user/login`,{
        username:state.username,
        password:state.password
      })
      .then(data=> data.data.status ? setAuthStatus(true):'')
      .then(()=>setIsSubmitting(false))

      .catch(error=>setBadLogin(true))
    }
    setIsSubmitting(false)
  })



  return{
    state,
    handleChange,
    handleSubmit,
    errors,
    authStatus,
    badLogin
  }
}

export default useLogin
