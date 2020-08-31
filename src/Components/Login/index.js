import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom';

import useLogin from '../../Hooks/useLogin';
import {loginValidation} from '../../utils/Validation';
import axios from 'axios'
import {backendUrl} from '../../utils/Constants'
import {Container,Form,Input,Text,Button,Label,InputSpan} from '../../Assets/FormStylings';





const Login =(props)=>{
  const handleClick=()=>{
    axios(`${backendUrl}thing`)
    .then(data=>{console.log(data)})
    .catch(err=>{console.error(err)})
  }

  const {state,handleChange,handleSubmit,errors,authStatus,badLogin} = useLogin(loginValidation)

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
          <Input type="text" name="username" value={state.username}onChange={(e)=>handleChange(e)} required/>
          <Label for="username" >
            <InputSpan>Username</InputSpan>
          </Label>
        </div>
        <div style={{position:'relative',marginBottom:'80px'}}>
          <Input type="password" name="password" value={state.password}onChange={(e)=>handleChange(e)} required/>
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
