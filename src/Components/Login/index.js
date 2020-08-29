import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom';

import useLogin from '../../Hooks/useLogin';
import {loginValidation} from '../../utils/Validation';
import axios from 'axios'
import {backendUrl} from '../../utils/Constants'
import {Container,Form,Input,Text,Button} from '../../Assets/FormStylings';


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
