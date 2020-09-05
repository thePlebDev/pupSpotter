import {useState,useEffect} from 'react';
import axios from 'axios';

import {backendUrl} from '../../utils/Constants';


const useLoginCheck =()=>{
  const [loginStatus,setLoginStatus] = useState(false)

  useEffect(()=>{
    axios.get(`${backendUrl}`)
  })

  return{
    loginStatus
  }
}

export default useLoginCheck
