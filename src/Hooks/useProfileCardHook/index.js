import {useEffect,useState} from 'react'



const useOutsideClick = (ref,callback)=>{
  const [display,setDisplay] = useState(false)

  const handleClick=(e)=>{
    if(ref.current === e.target){
      setDisplay(true)
    }else{
      setDisplay(false)
    }
  }

  useEffect(()=>{
    document.addEventListener('click',handleClick)

    return()=>{
      document.removeEventListener('click',handleClick)
    };
  });
  return{
    display,
  }
};

export default useOutsideClick
