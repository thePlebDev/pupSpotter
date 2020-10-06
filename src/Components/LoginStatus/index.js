import React from 'react';
import {Link} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import logginCheck from '../../utils/LoginStatus';


const Text = styled.div`
  font-size:1.4em;
  color:white;
  margin-left:60px;
  cursor:pointer;
`

const LoginStatus = ({loggedIn,setLoggedIn})=>{

  return(
    <div style={{display:'flex',alignItems:'center'}} data-testid="login">
    {
      loggedIn
         ?
    <Text onClick={()=>{logginCheck.checkStatus(setLoggedIn)}} data-testid="loginButton">Logout</Text>
         :
    <Link to="/login">
      <Text>Login</Text>
    </Link>
    }

    {
      loggedIn
          ?
      <PersonIcon style={{fontSize:'60',color:'#5CDB95',cursor:'pointer',marginLeft:'25px' }} data-testid="login"  />
          :
      <PersonIcon style={{fontSize:'60',color:'white',cursor:'pointer',marginLeft:'40px'}}   data-testid="logged out"/>
    }

    </div>
  )

}

LoginStatus.propTypes ={
  loggedIn:PropTypes.bool,
  setLoggedIn:PropTypes.func
}

export default LoginStatus
