import React,{useState,useEffect,useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import useRegister from '../../Hooks/UseRegister'
import {registerValidation} from '../../utils/Validation';

import {Form,TextFieldContainer,Title,FormContentContainer} from '../../Assets/FormStylings';





const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      'font-size':'1.2em',
    },
    marginBottom:'20px',
  },
  alerts: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
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



const Register =(props)=>{
  const {state,bio,email,password,errors,handleChange,handleSubmit,status,setStatus} = useRegister(registerValidation)
  const classes = useStyles()

  return(
    <div style={{height:'100%',display:'flex',alignItems:'center'}}>

      <Form onSubmit={(e)=>{handleSubmit(e)}} >
      <div style={{width:'60%',margin:'0 auto',padding:'50px',borderRadius:'4px'}} >
      <Title>Register</Title>
      <div style={{position:'relative',marginBottom:'30px'}}>
        <TextField className={classes.root} id="standard-basic" label="Username" style={{width:'70%',marginLeft:'15%',padding:'5px'}}
        error={errors.username} value={state} onChange={(e)=>handleChange(e)} name='username'/>

      </div>
      <div style={{position:'relative',marginBottom:'50px'}}>
        <TextField className={classes.root} id="standard-basic" label="Email" style={{width:'70%',marginLeft:'15%'}}
        name="email" error={errors.email}  value={email} onChange={(e)=>handleChange(e)}/>
      </div>
      <div style={{position:'relative',marginBottom:'50px'}}>
        <TextField className={classes.root} id="standard-basic" label="Bio" style={{width:'70%',marginLeft:'15%'}}
        name="bio" value={bio}onChange={(e)=>handleChange(e)}/>
      </div>
      <div style={{position:'relative',marginBottom:'50px'}}>
        <TextField className={classes.root} id="standard-basic" label="Password" style={{width:'70%',marginLeft:'15%'}}
        name="password" error={errors.password}  type='password' value={password}onChange={(e)=>handleChange(e)}/>
      </div>

        <div>
          <Button className={classes.buttons}  type="Submit" disableRipple={true}>Submit</Button>
        </div>
        </div>
      </Form>
    </div>
  )
}

export default Register
