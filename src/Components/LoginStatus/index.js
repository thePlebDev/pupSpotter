import React from 'react';
import {Link} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import styled from 'styled-components'
import axios from 'axios'
import {backendUrl} from '../../utils/Constants'


const Text = styled.div`
  font-size:1.4em;
  color:white;
  margin-left:60px;
  cursor:pointer;
`



const LoginStatus = ({loggedIn,setLoggedIn})=>{
  const handleClick =()=>{
    axios.get(`${backendUrl}user/logout`)
    .then(data=>{
      if(data.data.status){
        setLoggedIn(false)
      }})
    .catch(e=>console.error(e))
  }
  return(
    <div style={{display:'flex',alignItems:'center'}}>
    {
      loggedIn
         ?
    <Text onClick={()=>{handleClick()}}>Logout</Text>
         :
    <Link to="/login">
      <Text>Login</Text>
    </Link>
    }

    {
      loggedIn
          ?
      <PersonIcon style={{fontSize:'60',color:'#5CDB95',cursor:'pointer',marginLeft:'25px'}}  />
          :
      <PersonIcon style={{fontSize:'60',color:'white',cursor:'pointer',marginLeft:'40px'}}  />
    }

    </div>
  )

}

export default LoginStatus
