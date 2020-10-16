import React,{useState} from 'react';
import styled from 'styled-components'

import {Form,TextFieldContainer,Title,FormContentContainer} from '../../Assets/FormStylings';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import NotificationSystem from '../Notification';
import Loading from '../Loading';
import useForgotPassword from '../../Hooks/useForgotPassword';
import {forgotPasswordValidation} from '../../utils/Validation'

const Image = styled.img`
  display:none;
  padding-top:100px;
  @media screen and (min-width: 992px) {
  display:block;

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
    marginBottom:'40px',
    marginLeft:'15%'

  },
}));

const ForgotPassword =()=>{
  const classes = useStyles();
  const {handleChange,handleSubmit,state,errors,loading,status,show,setShow} = useForgotPassword(forgotPasswordValidation)
  return(
    <div style={{height:'100%',display:'flex',alignItems:'center'}} className="page">
      <Image src={require("../../Assets/images/forgotPasswordDog.png")} style={{width:'50%'}}  alt="dog in nature" />
      <Form onSubmit={(e)=>{handleSubmit(e)}} enctype="multipart/form-data">
        {
          loading
            ?
          <Loading/>
            :
          <NotificationSystem status={status} show={show} setShow={setShow} />
        }
      <FormContentContainer >
        <Title>Forgot Password</Title>
        <TextFieldContainer>
          <TextField inputProps={{ "data-testid": "content-input" }} className={classes.root} id="name-input" label="forgot" style={{width:'70%',marginLeft:'15%',padding:'5px'}}
          error={errors.forgot} data-testid="pupForm" value={state.forgot} onChange={(e)=>handleChange(e)} name='forgot'/>
        </TextFieldContainer>
          <Button className={classes.buttons} data-testid="pupForm"  type="Submit" disableRipple={true}>Submit</Button>
      </FormContentContainer>
      </Form>
    </div>
  )
}

export default ForgotPassword
