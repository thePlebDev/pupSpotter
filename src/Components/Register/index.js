import React,{useState} from 'react';
import styled from 'styled-components';


import useRegister from '../../Hooks/UseRegister'
import {registerValidation} from '../../utils/Validation';
import {Success,Fail} from '../../utils/ResponseMessage';
import {Form,Text,Button,Errors,Container,Label,InputSpan} from '../../Assets/FormStylings';

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

const Register = () =>{
  const {name,bio,email,password,handleChange,handleSubmit,errors,status} = useRegister(registerValidation)

  let message;
  if(status ===200){
    message = <Success/>
  }
  if(status === 204){
    message = <Fail/>
  }

  return(
    <Container>
      <div style={{position:'relative'}}>
        {
          message
        }
      </div>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        <div style={{position:'relative'}}>
        <div style={{position:'relative',marginBottom:'30px'}}>
          <Input type="text" name="username" error={errors.username} value={name}onChange={(e)=>handleChange(e)} />
          <Label for="username" >
            <InputSpan>Username</InputSpan>
          </Label>
        </div>

        </div>
        <div style={{position:'relative',marginBottom:'30px'}}>
          <Input type="text" name="email" error={errors.email} value={email}onChange={(e)=>handleChange(e)} />
          <Label for="email" >
            <InputSpan>Email</InputSpan>
          </Label>
        </div>
        <div style={{position:'relative',marginBottom:'30px'}}>
          <Input type="text" name="bio" error={''} value={bio}onChange={(e)=>handleChange(e)} />
          <Label for="bio" >
            <InputSpan>Bio</InputSpan>
          </Label>
        </div>
        <div style={{position:'relative',marginBottom:'30px'}}>
          <Input type="password" name="password" error={errors.email} value={email}onChange={(e)=>handleChange(e)} />
          <Label for="password" >
            <InputSpan>Password</InputSpan>
          </Label>
        </div>

          <Button type="submit">Register</Button>


      </Form>
    </Container>
  )
}

export default Register;
