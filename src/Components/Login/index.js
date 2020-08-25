import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom';

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
margin-bottom:30px;

`

const ErrorIndicator = styled.span`
  color:red;
  font-weight:700;
  letter-spacing:2px;
`
const ErrorMessage = styled.div`
  position:absolute;
  width:100%;
  margin:0 auto;
  text-align:center;
  font-size:1.3em;
  color:red;
  font-weight:700;
  letter-spacing:2px;
  text-transform:uppercase;

`

const Login =(props)=>{
  const handleClick=()=>{
    axios(`${backendUrl}thing`)
    .then(data=>{console.log(data)})
    .catch(err=>{console.error(err)})
  }

  const {state,handleChange,handleSubmit,errors,authStatus,badLogin} = useLogin(loginValidation)

  useEffect(()=>{
    if(authStatus){
      props.history.push('/')
    }

  },[authStatus])


  return(
    <Container>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        <label>
          <Text>
            {
              errors.username || badLogin
                  ?
              <div>
                <ErrorIndicator>Username</ErrorIndicator>
              </div>
                  :
              <div>Username</div>
            }
          </Text>
          <Input type="text" name="username" value={state.username} onChange={(e)=>handleChange(e)}/>
        </label>

        <label>
          <Text>
            {
              errors.password || badLogin
                  ?
              <div>
                <ErrorIndicator>Password</ErrorIndicator>
              </div>
                  :
              <div>Password</div>
            }
          </Text>
          <Input type='password' name="password" value={state.password}  onChange={(e)=>handleChange(e)}/>
        </label>

        <Button type="submit">Login</Button>
      </Form>
      <div stye={{position:'relative'}}>

        {
          errors.username || errors.password
                      ?
            <ErrorMessage>
              Fill out highlighted sections
            </ErrorMessage>
                      :
          <div></div>
        }
      </div>


    </Container>
  )
}

export default Login
