import {useState,useEffect} from 'react';
import axios from 'axios';

import {backendUrl} from '../../utils/Constants';


const useLoginCheck =()=>{
  const [loginStatus,setLoginStatus] = useState(false)

  useEffect(()=>{
    axios.get(`${backendUrl}isAuthenticated`)
    .then(data=>{
      if(data.data.status === 200){
        console.log('he is authenticated')
        setLoginStatus(true)
      }else{
        console.log('he is not authenticated')
        setLoginStatus(false)
      }
    })
    .catch(error=>console.log(error))
  })

  return{
    loginStatus
  }
}

export default useLoginCheck
