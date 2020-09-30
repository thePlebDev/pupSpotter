import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: #3f51b5;
  transition:all 3s;
  animation: fadeIn 4s forwards;
  border-bottom:2px solid #3f51b5;
  padding:3px;
  width:80%;
  margin:0 auto;

`

const Content = styled.div`
  margin-top:5px;
  font-size:1.3em;
  padding:5px;


  @media screen and (min-width: 800px){
    font-size:1.5em;
  }
`






const StepContent =({title,content})=>{
  const [show,setShow] = useState(false)
  useEffect(()=>{
    console.log('running')
    setShow(!show)
  },[title])

  return(
    <div style={{textAlign:'center'}}>
      <Title show={show}>{title}</Title>
      <Content>{content}</Content>
    </div>
  )
}

export default StepContent
