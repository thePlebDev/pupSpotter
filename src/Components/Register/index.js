import React,{useState,useRef} from 'react';
import styled from 'styled-components';


import useRegister from '../../Hooks/UseRegister'
import {registerValidation} from '../../utils/Validation';
import {Success,Fail} from '../../utils/ResponseMessage';
import {Form,Button,Container,Label,InputSpan} from '../../Assets/FormStylings';
import useOutSideClickV2 from '../../Hooks/UseOutsideClickV2';

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

const Added = styled.div`
  width: 40%;
  background-color:${props=>props.status ===204?'red':'#5CDB95'};
  padding:10px;
  border-radius:4px;
  text-align:center;
  font-size:1.2em;
  position:absolute;
  transition: all .5s;
  transform:${props=>props.show?'translateX(250px)':'translateX(1400px)'};
  opacity:${props=>props.show?'1': 0};
  z-index:1;
  top:2%;
  left:4%;
`

const Register = (props) =>{
  const {name,bio,email,password,handleChange,handleSubmit,errors,status} = useRegister(registerValidation)
  const ref = useRef();
  const {show} = useOutSideClickV2(ref,status)
  //status is async

  return(
    <Container>
      <div style={{position:'relative'}}>
        {
          <Added show={show} status={status}>
            {
              status ===200
                    ?
              <span>UserCreated</span>
                    :
              <span>Username Taken!</span>
            }
          </Added>
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
          <Input type="password" name="password" error={errors.password} value={password}onChange={(e)=>handleChange(e)} />
          <Label for="password" >
            <InputSpan>Password</InputSpan>
          </Label>
        </div>

          <Button type="submit" ref={ref}>Register</Button>


      </Form>
    </Container>
  )
}

export default Register;
