import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios'

import {backendUrl} from '../../utils/Constants'


const Container = styled.nav`
  width:150px;
  height:100vh;
  padding:0;
  margin:0;
  position:fixed;
  background-color:#05386B;
  z-index:100000;
  display:flex;
  flex-direction:column;
  transition:100ms ease;


  :hover{
    width:300px;
  }

  :hover div div{
    display:block;
    margin-left:2em;
  }
  :hover .arrow{
    opacity:1;
    transform:rotate(180deg);
  }
  @media only screen and (max-width:600px){
    bottom:0;
    width:100vh;
    height:100px;
    flex-direction:row;
    justify-content:space-center;
    :hover{
      width:100vh;
    }
    :hover div div{
      display:none;
      margin-left:2em;
    }

  }

`

const TextContainer = styled.div`
  display:flex;
  align-items:center;
  height:100px;
  margin:2em 1em;
  background-color:#05386B;
  border-radius:4px;
  transition:100ms ease;
  padding:5px;
  opacity:0.3;
  :hover{
    opacity:1;
  }
  padding:5px;
  @media only screen and (max-width:600px){
  margin: 0 2.2em;
  }



`
const Text= styled.div`

display:none;
font-size:1.8em;
color:#5CDB95;


`
const Arrow = styled.div`
  color:#5CDB95;
  display:flex;
  justify-content:center;
  opacity:0.3;
  padding:5px;
  transition:300ms ease;
  transform:rotate(0deg);
  @media only screen and (max-width:600px){
    display:none; }

`

const NavBar = ({status,setNavStatus})=>{
  const handleClick =()=>{
    axios.get(`${backendUrl}user/logout`)
    .then((data)=>{setNavStatus(false)})
    .catch((error)=>{console.error(error)})
  }

  return(
    <Container>
    <Arrow className="arrow">
      <i className="fa fa-arrow-right" style={{fontSize:'50px'}}></i>
    </Arrow>
      <Link to='/'>
        <TextContainer>
          <i className="fa fa-home" style={{fontSize:'70px',color:'#5CDB95'}}></i> <Text >Home</Text>
        </TextContainer>
      </Link>
      <Link to='/pupSpotting'>
        <TextContainer>
          <i className="fa fa-paw" style={{fontSize:'70px',color:'#5CDB95'}}></i><Text>Doggos</Text>
        </TextContainer>
      </Link>
      <Link to='/login'>
        <TextContainer>
          <i className="fa fa-registered" style={{fontSize:'70px',color:'#5CDB95'}}></i>
          {
            status
              ?
            <Text onClick={(e)=>handleClick(e)}>Logout</Text>
              :
            <Text>Login</Text>
          }
          </TextContainer>
      </Link>
          {
            status
              ?
      <Link to='/login'>
        <TextContainer>
          <i className="fa fa-user" style={{fontSize:'70px',color:'#5CDB95',marginLeft:'15px'}}></i>
          <Text>Profile</Text>
          </TextContainer>
      </Link>
              :
          <div></div>
        }

    </Container>
  )
}

export default NavBar
