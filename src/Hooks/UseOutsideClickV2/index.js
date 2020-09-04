import {useState,useEffect} from 'react';




const useOutSideClickV2 =(ref,status)=>{
const [show,setShow] = useState(false)
  const handleClick=(e)=>{
    // the status is asyncronous so I have to be able to take into account that
    if(ref.current ===e.target){
      
    }else{
      setShow(false)
    }
  }
  useEffect(()=>{
    if(status ===200){
      setShow(true)
    }else if (status ===204) {
      setShow(true)
    }
  },[status])


  useEffect(()=>{
    document.addEventListener('click',handleClick)

    return()=>{
      document.removeEventListener('click',handleClick)
    };
  });
  return{
    show
  }

}



export default useOutSideClickV2
