import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom';

import useLogin from '../../Hooks/useLogin';
import {loginValidation} from '../../utils/Validation';
import axios from 'axios'
import {backendUrl} from '../../utils/Constants'
import {Container,Form,Text,Button,Label,InputSpan} from '../../Assets/FormStylings';

const Input = styled.input`
width:100%;
height:50px;
font-size:18px;
border-bottom:${props =>props.error ? '2px solid red':'1px solid #05386B;'};
border-top:none;
border-left:none;
border-right:none;
padding-bottom:5px;
outline:none;
background-color: #EDF5E1;
color:#05386B;
:focus + Label,:focus Label:valid +InputSpan{
  transform: translateY(-100%);
  font-size:1.3em;
}`



const Login =(props)=>{
  const handleClick=()=>{
    axios(`${backendUrl}thing`)
    .then(data=>{console.log(data)})
    .catch(err=>{console.error(err)})
  }

  const {state,handleChange,handleSubmit,errors,authStatus,badLogin} = useLogin(loginValidation)
  if(errors){
    console.log(errors)
  }

  const handleFocus=()=>{
    console.log('clicked')
  }

  useEffect(()=>{
    if(authStatus){
      props.history.push('/')
    }

  },[authStatus])


  return(
    <Container>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        <div style={{position:'relative',marginBottom:'80px'}}>
          <Input type="text" name="username" error={errors.username} value={state.username}onChange={(e)=>handleChange(e)} />
          <Label for="username" >
            <InputSpan>Username</InputSpan>
          </Label>
        </div>
        <div style={{position:'relative',marginBottom:'80px'}}>
          <Input type="password" name="password" error={errors.password} value={state.password}onChange={(e)=>handleChange(e)} />
          <Label for="password" >
            <InputSpan>Password</InputSpan>
          </Label>
        </div>
        <Button>Login</Button>
      </Form>
    </Container>
  )
}

export default Login
