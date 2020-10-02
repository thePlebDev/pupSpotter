import {useState,useEffect} from 'react'
import axios from 'axios'
//import { Redirect } from 'react-router-dom';

import {backendUrl} from '../../utils/Constants';
import {axiosPost} from '../../utils/AxiosFuncs';

const useLogin =(validation)=>{

  const [state,setState] = useState({username:'',password:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting ] = useState(false);
  const [authStatus,setAuthStatus] = useState(false);
  const [badLogin,setBadLogin] = useState(false);
  const [status,setStatus] = useState(false);
  const [show,setShow] = useState(false);
  const [loading,setLoading] = useState(false);

  const handleChange = (e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})

  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    setErrors(validation(state))
    setIsSubmitting(true)
  }
  useEffect(()=>{
    if(isSubmitting && Object.keys(errors).length === 0){
      //set lading state on
      setLoading(true)
      axiosPost(`${backendUrl}user/login`,{
        username:state.username,
        password:state.password
      })
      .then(data=> data.status ? setAuthStatus(true):'')
      .then(()=>{
        //setLoading state off
        setLoading(false)
        setIsSubmitting(false)})
      .catch(error=>{
        setLoading(false)
        setStatus(203)
        setShow(true)
      })
    }

    setIsSubmitting(false)
  },[errors,isSubmitting,state.password,state.username])



  return{
    state,
    status,
    show,
    setShow,
    handleChange,
    handleSubmit,
    errors,
    authStatus,
    badLogin,
    loading
  }
}

export default useLogin
