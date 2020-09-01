import {useEffect,useState} from 'react'



const useOutsideClick = (ref,callback)=>{
  const [show,setShow] = useState(false)

  const handleClick=(e)=>{
    if(ref.current === e.target){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(()=>{
    document.addEventListener('click',handleClick)

    return()=>{
      document.removeEventListener('click',handleClick)
    };
  });
  return{
    show
  }
};

export default useOutsideClick
