import {useState,useEffect} from 'react';

import {signupValidation} from '../../utils/Validation';
import {backendUrl} from '../../utils/Constants';
import axios from 'axios';

const useForm = ()=>{
  const [state,setState] =useState({name:'',location:'',date:'',image:'',description:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [createdSpotting,setCreatedSpotting] = useState(false);
  const [open,setOpen] = useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault()
    setErrors(signupValidation(state))
    setIsSubmitting(true)
  }

  useEffect(()=>{
    console.log('called')
    if(isSubmitting && Object.keys(errors).length === 0){
      const {name,location,date,image,description} = state
      axios.post(`${backendUrl}spot`,{
        name,
        location,
        date,
        image,
        description
      },{withCredentials:true})
      .then(data=>{
        if(data.data.status ===200){
          setCreatedSpotting(true)
        }
        console.log(data.data)})
      .catch(error=>{console.log(error)})
    }
    setIsSubmitting(false)
  },[errors,isSubmitting,state])

  const handleChange=(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
  }
  const handleClick=(e)=>{
    navigator.geolocation.getCurrentPosition((position) => {
    setState({...state,location:{lat:position.coords.latitude, lon:position.coords.longitude}});
    console.log(state)
    setOpen(true)
  });
}

  return{
    state,
    errors,
    open,
    setOpen,
    createdSpotting,
    handleSubmit,
    handleChange,
    handleClick
  }
}

export default useForm
