import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import {Redirect} from 'react-router-dom';

import useLogin from '../../Hooks/useLogin';
import {loginValidation} from '../../utils/Validation';
// import axios from 'axios'
// import {backendUrl} from '../../utils/Constants'
import {Container,Form,Button,Label,InputSpan} from '../../Assets/FormStylings';

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

const Links = styled.div`
margin:10px 0;
cursor:pointer;
border:1px solid #05386B;
border-radius:4px;
padding:10px 36px;
text-align:center;
width:170px;
transition:all 0.3s ease;
:hover{
  color:#5CDB95;
  background-color: #05386B;
}

`


const Login =(props)=>{

  const {state,handleChange,handleSubmit,errors,authStatus,badLogin} = useLogin(loginValidation)


  useEffect(()=>{
    if(authStatus){
      props.setNavStatus(true)
      props.history.push('/')
    }

  },[authStatus,props.history])


  return(
    <Container style={{marginBottom:'100px'}}>
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
        <Link to='/register'>
          <Links >Need an account?</Links>
        </Link>
      </Form>
    </Container>
  )
}

export default Login
