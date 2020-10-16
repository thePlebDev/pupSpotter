import React,{useState,useEffect} from 'react';
import {axiosPost} from '../../utils/AxiosFuncs';
import {backendUrl} from '../../utils/Constants';

const useForgotPassword =(validation)=>{
  const [state,setState] =useState({forgot:''})
  const [loading,setLoading] = useState(false)
  const [errors,setErrors] = useState({forgot:''})
  const [show,setShow] = useState(false);
  const [status,setStatus] = useState('')
  const [isSubmitting,setIsSubmitting] = useState()

  useEffect(()=>{
    if(isSubmitting && Object.keys(errors).length === 0){
      setLoading(true)
      axiosPost(`${backendUrl}user/forgot`,state.forgot)
        .then(data=>{
          setStatus(203)
          setLoading(false)
          setShow(true)
        })
        .catch(error=>{
          setStatus(500)
          setShow(true)
          setLoading(false)
          console.log(error)
        })
      setIsSubmitting(false)
    }
  },[errors,isSubmitting,state])

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('submitted')
    setErrors(validation(state))
    setIsSubmitting(true)
  }
  const handleChange =(e)=>{
    const {value,name} = e.target;
    setState({...state,[name]:value})
  }


  return{
    state,
    errors,
    loading,
    show,
    status,
    setState,
    handleChange,
    handleSubmit,
    setShow
  }

}

export default useForgotPassword
