import React,{useState,useEffect} from 'react';

const useForgotPassword =(validation)=>{
  const [state,setState] =useState({forgot:''})
  const [loading,setLoading] = useState(false)
  const [errors,setErrors] = useState({forgot:''})
  const [show,setShow] = useState(false);
  const [status,setStatus] = useState('')
  const [isSubmitting,setIsSubmitting] = useState()

  useEffect(()=>{
    if(isSubmitting && Object.keys(errors).length === 0){
      console.log('the api call has been made')
      setIsSubmitting(false)
    }
  },[errors,isSubmitting])

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('submitted')
    setErrors(validation(state))
    setIsSubmitting(true)
  }
  const handleChange =(e)=>{
    const {value,name} = e.target;
    setState({...state,[name]:value})
    console.log(state)
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
