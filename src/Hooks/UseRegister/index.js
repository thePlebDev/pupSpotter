import {useState,useEffect} from 'react';
import axios from 'axios'

import {backendUrl} from '../../utils/Constants'
import {axiosPost} from '../../utils/AxiosFuncs'

const useRegister =(validator)=>{

  const [state,setState] = useState({username:'',email:'',bio:'',password:''})
  const [errors,setErrors] = useState({})
  const [isSubmiting,setIsSubmitting] = useState(false)
  const [status,setStatus] = useState('')
  const [show,setShow] = useState(false)

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
      axiosPost(`${backendUrl}register`,{
        username:state.username,
        email:state.username,
        bio:state.bio,
        password:state.password
      })
      .then(data=>{
        if(data.status===200){
          setStatus(data.status)
          setShow(true)
          return
        }
        if(data.status===204){
          setStatus(data.status)
          setShow(true)
          return
        }
        else{
          setStatus(500)
          setShow(true)
        }
      })
      .catch(error=>{
        setStatus(500)
        setShow(true)
        console.error(error)})
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
    status,
    setShow,
    show
  }
}

export default useRegister;
