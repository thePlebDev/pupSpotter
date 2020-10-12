import React,{useState} from 'react'


const useWorkAccordian =(node)=>{
  const [show,setShow] = useState(false)
  const [scrollHeight,setScrollHeight] = useState('')

  const handleClick =()=>{
    setShow(!show)
    setScrollHeight(node.current.scrollHeight)
    console.log(scrollHeight)
  }

  return{
    show,
    scrollHeight,
    handleClick
  }
}

export default useWorkAccordian
