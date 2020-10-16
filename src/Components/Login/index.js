import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import useLogin from '../../Hooks/useLogin';
import {loginValidation} from '../../utils/Validation';
// import axios from 'axios'
// import {backendUrl} from '../../utils/Constants'
import {Form,TextFieldContainer,Title,FormContentContainer} from '../../Assets/FormStylings';
import NotificationSystem from '../Notification';

import Loading from '../Loading';


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
    marginBottom:'40px',
    marginLeft:'15%'

  },
}));

const Image = styled.img`
  display:none;
  padding-top:100px;
  @media screen and (min-width: 992px) {
  display:block;

}
`

const Login =(props)=>{

  const {state,handleChange,handleSubmit,errors,authStatus,show,setShow,status,loading} = useLogin(loginValidation)
  const classes = useStyles();

  useEffect(()=>{
    if(authStatus){
      props.history.push('/')
    }

  },[authStatus,props.history])


  // I have to keep taking out the src of the image in order to make the tests work: FIX
  return(
    <div style={{height:'100%',display:'flex',alignItems:'center'}} className="page">
      <Image src={require("../../Assets/images/ladyDog.png")} style={{width:'50%'}}  alt="dog in nature" />
      <Form onSubmit={(e)=>{handleSubmit(e)}} enctype="multipart/form-data">
        {
          loading
            ?
          <Loading/>
            :
          <NotificationSystem status={status} show={show} setShow={setShow} />
        }
      <FormContentContainer >
        <Title>Login</Title>
        <TextFieldContainer>
          <TextField inputProps={{ "data-testid": "content-input" }} className={classes.root} id="name-input" label="Username" style={{width:'70%',marginLeft:'15%',padding:'5px'}}
          error={errors.username} data-testid="pupForm" value={state.username} onChange={(e)=>handleChange(e)} name='username'/>
        </TextFieldContainer>
        <TextFieldContainer>
          <TextField className={classes.root} id="description-input" label="password" style={{width:'70%',marginLeft:'15%',padding:'5px'}}
          name="password" error={errors.password} type='password' data-testid="pupForm" value={state.password}onChange={(e)=>handleChange(e)}/>
        </TextFieldContainer>

          <Button className={classes.buttons} data-testid="pupForm"  type="Submit" disableRipple={true}>Login</Button>
          <Link to="/register">
            <Button className={classes.buttons} data-testid="pupForm"  type="button" disableRipple={true}>need an account?</Button>
          </Link>
          <Link to="/forgotPassword">
            <Button className={classes.buttons} data-testid="pupForm"  type="button" disableRipple={true}>Forgot Password?</Button>
          </Link>
      </FormContentContainer>
      </Form>
    </div>
  )
}

export default Login
