import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Container =styled.div`

  position:absolute;
  display: flex;
  right:-1px;
  height:500px;
  top:70px;
  width:150px;
  flex-direction:column;
  justify-content:space-around;
  background-color:#05386B;
  transition: transform 0.25s;
  opacity:0.9;
  transform: ${props => props.state ?"translateX(200px)":"translateX(0px)"}
`
const Text = styled.div`
  text-align:center;
  text-transform:uppercase;
  letter-spacing:1px;
  font-weight:600;
  color:#5CDB95;
  border-bottom: 1px solid #8EE4AF;
  padding:5px;
  width:80%;
  margin:0 auto;


`;


const Sidebar =({state})=>{

  return(
    <Container state={state}>
    <Text><Link to='/'>Home</Link></Text>
      <Text><Link to='/pupSpotting'>Spot A Pup!! </Link></Text>
      <Text><Link to='/register'> Register</Link></Text>
      <Text><Link to='/login'>Login</Link></Text>
      <Text><Link to ="/profile">Profile</Link></Text>
    </Container>
  )
}

export default Sidebar
