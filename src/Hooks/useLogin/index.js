import {useState,useEffect} from 'react'
import axios from 'axios'
import {backendUrl} from '../../utils/Constants';

const useLogin =(validation)=>{

  const [state,setState] = useState({username:'',password:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting ] = useState(false)

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
      console.log(backendUrl)
      axios.post(`${backendUrl}login`,{
        username:state.username,
        password:state.password
      })
      .then(data=>console.log('data here ----->' + data.data))
      .catch(error=>console.error(error))
    }
  })



  return{
    state,
    handleChange,
    handleSubmit
  }
}

export default useLogin
