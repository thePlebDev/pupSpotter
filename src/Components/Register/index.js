import React,{useState} from 'react';
import styled from 'styled-components';


import useRegister from '../../Hooks/UseRegister'
import {registerValidation} from '../../utils/Validation';
import {Success,Fail} from '../../utils/ResponseMessage';
import {Input,Form,Text,Button,Errors,Container} from '../../Assets/FormStylings';

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
          <label>
            <Text>Name</Text>
            <Input type='text'value={name} onChange={(e)=>handleChange(e)} name='username' />
          </label>
          {
            errors.username? <Errors>{errors.username}</Errors>:''
          }
        </div>
        <div style={{position:'relative'}}>
          <label>
          <Text>  Email </Text>
            <Input type='email'  value={email} onChange={(e)=>handleChange(e)} name='email' />
          </label>
          {
            errors.email? <Errors>{errors.email}</Errors>:''
          }
        </div>
        <div style={{position:'relative'}}>
          <label>
            <Text> Bio </Text>
            <Input type='text' value={bio} onChange={(e)=>handleChange(e)} name='bio' />
          </label>
        </div>
        <div style={{position:'relative'}}>
          <label>
          <Text> Password </Text>
            <Input type='password'  value={password} onChange={(e)=>handleChange(e)} name='password' />
          </label>
          {
            errors.password? <Errors>{errors.password}</Errors>:''
          }
        </div>

          <Button type="submit">Register</Button>


      </Form>
    </Container>
  )
}

export default Register;
