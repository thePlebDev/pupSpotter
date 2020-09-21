import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

import useLogin from '../../Hooks/useLogin';
import {loginValidation} from '../../utils/Validation';
// import axios from 'axios'
// import {backendUrl} from '../../utils/Constants'
import {Form} from '../../Assets/FormStylings';


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
    },
  },
  buttons: {
    width:'70%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    padding:'10px',
    border:'1px solid #05386B',
    marginBottom:'20px',
    marginLeft:'15%'

  },
}));


const Login =(props)=>{

  const {state,handleChange,handleSubmit,errors,authStatus,badLogin} = useLogin(loginValidation)
  const classes = useStyles();

  useEffect(()=>{
    if(authStatus){
      props.history.push('/')
    }

  },[authStatus,props.history])


  return(
      <Form onSubmit={(e)=>handleSubmit(e)}>
      <div style={{border:'1px solid rgba(0, 0, 0, 0.87)',width:'60%',margin:'0 auto',padding:'50px',borderRadius:'4px'}} >
        <div style={{color:'rgba(0, 0, 0, 0.5)',opacity:'0.8',textTransform:'uppercase',marginLeft:'45%',fontSize:'2.6em'}}>Login</div>
        <div style={{position:'relative',marginTop:'40px',marginBottom:'80px'}}>
          <TextField data-testid="loginForm" className={classes.root} id="username" label="Username"
           name="username" error={errors.username} style={{width:'70%',marginLeft:'15%',padding:'5px'}} value={state.username}onChange={(e)=>handleChange(e)}/>
        </div>
        <div style={{position:'relative',marginBottom:'80px'}}>
            <TextField data-testid="loginForm" className={classes.root} type="password" id="standard-basic"
            label="Password" error={errors.username} style={{width:'70%',marginLeft:'15%',padding:'5px'}} name="password" value={state.password}onChange={(e)=>handleChange(e)}/>
        </div>
        <Button className={classes.buttons} type='submit'>Login</Button>
        <Link to='/register'>
          <Links style={{marginLeft:'15%'}} >Need an account?</Links>
        </Link>
        </div>
      </Form>
  )
}

export default Login
