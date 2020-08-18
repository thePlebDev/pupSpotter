import React,{useState} from 'react';
import styled from 'styled-components';


import useRegister from '../../Hooks/UseRegister'
import {registerValidation} from '../../utils/Validation';


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
border:1 px solid #05386B;
margin-bottom:10px;
`

const Text = styled.div`
font-size:1.2em;
font-weight:600;
letter-spacing:1px;
`
const Button = styled.div`
background-color:#05386B;
padding:10px 36px;
color:#5CDB95;
border-radius:4px;
margin:10px auto;
font-size:1.2em;
letter-spacing:1px;
outline:none;
text-align:center;
`



const Register = () =>{
  const {name,bio,email,password,handleChange,handleSubmit} = useRegister(registerValidation)

  return(
    <div>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label>
            <Text>Name</Text>
            <Input type='text' value={name} onChange={(e)=>handleChange(e)} name='name' />
          </label>
        </div>
        <div>
          <label>
          <Text>  Email </Text>
            <Input type='email' value={email} onChange={(e)=>handleChange(e)} name='email' />
          </label>
        </div>
        <div>
          <label>
            <Text> Bio </Text>
            <Input type='text' value={bio} onChange={(e)=>handleChange(e)} name='bio' />
          </label>
        </div>
        <div>
          <label>
          <Text> Password </Text>
            <Input type='password' value={password} onChange={(e)=>handleChange(e)} name='password' />
          </label>
        </div>
        <Button type="Submit">Register</Button>

      </Form>
    </div>
  )
}

export default Register;
