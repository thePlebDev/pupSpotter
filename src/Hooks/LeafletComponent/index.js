import React,{useState,useEffect} from 'react';

import {axiosPost} from '../../utils/AxiosFuncs';
import {backendUrl} from '../../utils/Constants'

const useLeaftletHook = (id)=>{
  // it should only need to return the handle click function

  const [clicked,setClicked] = useState(false);

  const handleClick =()=>{
    setClicked(true)
  }

  useEffect(()=>{
    if(clicked){
      axiosPost(`${backendUrl}spot/vote`,{id})
      .then(data=>console.log(data))
      .catch(error=>console.log(error))
    }

  },[clicked])


  return {
    handleClick,
    clicked
  }
}

export default useLeaftletHook
