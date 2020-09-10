import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '73ch',
    },
  },
}));


const Login =(props)=>{

  const {state,handleChange,handleSubmit,errors,authStatus,badLogin} = useLogin(loginValidation)
  const classes = useStyles();

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
          <TextField className={classes.root} id="standard-basic" label="Username" name="username" value={state.username}onChange={(e)=>handleChange(e)}/>
        </div>
        <div style={{position:'relative',marginBottom:'80px'}}>
            <TextField className={classes.root} type="password" id="standard-basic" label="Password" name="password" value={state.password}onChange={(e)=>handleChange(e)}/>
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
