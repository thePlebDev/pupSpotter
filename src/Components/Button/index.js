import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width:160px;
  text-align:center;
  margin-left:25%;
  margin-bottom:50px;
  margin-top:50px;
  padding:8px 32px;
  border-radius:8px;
  display:block;
  outline:none;
  border:none;
  color:#3f51b5;
  background-color:white;
  opacity:0.8;
  cursor:pointer;
  box-shadow:0 5px 20px rgba(0,0,0,0.25);
  &:hover{
    opacity:1;
    transform:scale(1.03);
  }
`

const ButtonCom = ({handleClick,words})=>{
  return(
    <Button id="button" onClick={()=>handleClick()}>{words}</Button>
  )
}

export default ButtonCom
