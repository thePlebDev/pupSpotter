import React from 'react';
import styled from 'styled-components'

import {Form,TextFieldContainer,Title,FormContentContainer} from '../../Assets/FormStylings';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import NotificationSystem from '../Notification';

import Loading from '../Loading';

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
  return(
    <div style={{height:'100%',display:'flex',alignItems:'center'}} className="page">
    <Image src={require('../../Assets/images/forgotPasswordDog.png')}style={{width:'50%'}}  alt="a single dog" />
      <Form >
        {
          // loading
          //   ?
          // <Loading />
          //   :
          // <NotificationSystem status={status} show={show} setShow={setShow} />

        }
        <FormContentContainer style={{position:'relative'}}>
            <Title>Forgot Password</Title>
            <TextFieldContainer>
              <TextField data-testid="loginForm" className={classes.root} id="username-input" label="Enter Email"
               name="username" error={''} style={{width:'70%',marginLeft:'15%',padding:'5px'}} value={''}onChange={''}/>
            </TextFieldContainer>

            <Button className={classes.buttons} type='button' disableRipple={true} >Reset Password</Button>
        </FormContentContainer>
      </Form>
    </div>
  )
}

export default ForgotPassword
