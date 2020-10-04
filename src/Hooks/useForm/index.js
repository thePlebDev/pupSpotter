import {useState,useEffect} from 'react';

import {backendUrl} from '../../utils/Constants';
import axios from 'axios';

const useForm = (axiosMethod,validation)=>{
  const [state,setState] =useState({name:'',location:'',date:'',image:'',description:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [loading,setLoading] = useState(false);

  const [status,setStatus] = useState(false);
  const [show,setShow] = useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault()
    setErrors(validation(state))
    setIsSubmitting(true)
  }

  useEffect(()=>{
    if(isSubmitting && Object.keys(errors).length === 0){
      const {name,location,date,image,description} = state
      setLoading(true);
      axiosMethod(`${backendUrl}spot`,{
        name,
        location,
        date,
        image,
        description
      },{withCredentials:true})
      .then(data=>{
        setLoading(false);
        const {status} = data
        console.log(status === 200)
        if(status ===200){
          setStatus(200)
          setShow(true)
          return
        }
        if(status === 401){
          //set show for not logged in
          setStatus(401)
          setShow(true)
          return
        }
        else{
          //set show for 500
          setLoading(false);
          setStatus(500)
          setShow(true)
        }})
      .catch(error=>{
        console.log(error)
        setStatus(500)
        setShow(true)
      }
      )
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
    setStatus(202)
    setShow(true)
  });
}

  return{
    state,
    show,
    status,
    loading,
    errors,
    handleSubmit,
    handleChange,
    handleClick,
    setShow
  }
}

export default useForm
