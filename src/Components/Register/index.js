import React,{useState,useRef} from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


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
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '59ch',
      'font-size':'1.2em'
    },
  },
}));

const Register = (props) =>{
  const {name,bio,email,password,handleChange,handleSubmit,errors,status} = useRegister(registerValidation)
  const ref = useRef();
  const {show} = useOutSideClickV2(ref,status)
  const classes = useStyles();
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
          <TextField className={classes.root} id="standard-basic" label="Username" value={name}onChange={(e)=>handleChange(e)} name="username"/>
        </div>
        </div>
        <div style={{position:'relative',marginBottom:'30px'}}>
          <TextField className={classes.root} id="standard-basic" label="Email"  value={email}onChange={(e)=>handleChange(e)} name="email" />
        </div>
        <div style={{position:'relative',marginBottom:'30px'}}>
          <TextField className={classes.root} id="standard-basic" label="Bio" value={bio}onChange={(e)=>handleChange(e)}  name='bio' />
        </div>
        <div style={{position:'relative',marginBottom:'30px'}}>
          <TextField className={classes.root} type="password" id="standard-basic" label="Password" value={password}onChange={(e)=>handleChange(e)}  name='password' />
        </div>
        <Button type="submit" ref={ref}>Register</Button>
      </Form>
    </Container>
  )
}

export default Register;
