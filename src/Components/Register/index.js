import React,{useState} from 'react';
import styled from 'styled-components';


import useRegister from '../../Hooks/UseRegister'
import {registerValidation} from '../../utils/Validation';

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
  margin: 0 auto;
`
const Input = styled.input`
width:100%;
font-size:18px;
padding:10px;
border-radius:4px;
outline:none;

margin-top:5px;
border:1px solid #05386B;
margin-bottom:30px;
`

const Text = styled.div`
font-size:1.2em;
font-weight:600;
letter-spacing:1px;
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
text-align:center;
margin:10px auto;
@media only screen and (min-width: 1200px) {
  width:103%;
}

`

const Errors = styled.div`
  position:absolute;
  color:red;
  bottom:10px;
  font-weight:600;
  letter-spacing:1px;
`




const Register = () =>{
  const {name,bio,email,password,handleChange,handleSubmit,errors} = useRegister(registerValidation)

console.log(errors)
  return(
    <Container>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        <div style={{position:'relative'}}>
          <label>
            <Text>Name</Text>
            <Input type='text'value={name} onChange={(e)=>handleChange(e)} name='name' />
          </label>
          {
            errors.name? <Errors>{errors.name}</Errors>:''
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
