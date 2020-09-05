import {useState,useEffect} from 'react';
import axios from 'axios';
import {backendUrl} from '../../utils/Constants';

const useProfile =()=>{
  const [status,setStatus] = useState('');

  useEffect(()=>{
    axios.get(`${backendUrl}profile`,{withCredentials:true})
    .then(data=>setStatus(data.data))
    .catch(e=>console.log(e))
  },[])

  return{
    status
  }

}

export default useProfile
