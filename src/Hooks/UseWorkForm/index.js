import React,{useState,useEffect} from 'react';


const useWorkForm =(validation)=>{
  const [state,setState] = useState('')
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)


  useEffect(()=>{
    console.log('running')
    if(isSubmitting && Object.keys(errors).length === 0){
      console.log('API CALL HERE')
      setIsSubmitting(false);
    }
  },[isSubmitting,errors])

  const handleSubmit =(e)=>{
    e.preventDefault()
    setErrors(validation(state))
    setIsSubmitting(true)
    console.log(errors)
  }

  const handleChange =(e)=>{
    const {value,name} = e.target
    setState({...state,[name]:value})
  }
  return{
    state,
    handleChange,
    handleSubmit,
    errors
  }
}

export default useWorkForm;
