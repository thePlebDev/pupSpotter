import {useState,useEffect} from 'react';

import {signupValidation} from '../../utils/Validation';

const useForm = ()=>{
  const [state,setState] =useState({name:'',loc:'',date:'',image:''})
  const [errors,setErrors] = useState({})

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('submitted')
    setErrors(signupValidation(state))
    setState({...state,loc:''})
  }

  useEffect(()=>{

  },[])

  const handleChange=(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
    console.log(state)
  }
  const handleClick=(e)=>{
    navigator.geolocation.getCurrentPosition((position) => {
    setState({...state,loc:{lat:position.coords.latitude, long:position.coords.longitude}});
    console.log(state)
  });
}

  return{
    state,
    errors,
    handleSubmit,
    handleChange,
    handleClick
  }
}

export default useForm
