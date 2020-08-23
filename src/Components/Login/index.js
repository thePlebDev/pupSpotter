import React,{useState} from 'react';
import styled from 'styled-components'

import useLogin from '../../Hooks/useLogin';
import {loginValidation} from '../../utils/Validation';
import axios from 'axios'
import {backendUrl} from '../../utils/Constants'

const Container = styled.div`
    position:relative;
    width:80%;
    margin: 5% auto;
    border: 1px solid #05386B;
    padding:30px;
    border-radius:4px;
`

const Form = styled.form`
width:80%;
margin:10px auto;

`
const Input = styled.input`
width:100%;
padding:10px;
border-radius:4px;
`

const Text = styled.div`
 font-size:1.3em;
 margin-top:10px;
`
const Button = styled.button`
background-color:#05386B;
padding:10px 36px;
color:#5CDB95;
border-radius:4px;

width:105%;
font-size:1.2em;
letter-spacing:1px;
outline:none;
display:block;
margin-top:30px;

`





const Login =()=>{
  const handleClick=()=>{
    axios(`${backendUrl}thing`)
    .then(data=>{console.log(data)})
    .catch(err=>{console.error(err)})
  }

  const {state,handleChange,handleSubmit} = useLogin(loginValidation)

  return(
    <Container>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        <label>
          <Text>Username</Text>
          <Input type="text" name="username" value={state.username} onChange={(e)=>handleChange(e)}/>
        </label>

        <label>
          <Text>Password</Text>
          <Input type='password' name="password" value={state.password}  onChange={(e)=>handleChange(e)}/>
        </label>

        <Button type="submit">Login</Button>
      </Form>
    </Container>
  )
}

export default Login
