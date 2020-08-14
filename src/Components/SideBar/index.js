import React from 'react';
import styled from 'styled-components';

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
      <Text>Spot A Pup!!</Text>
      <Text> Register</Text>
      <Text>Login</Text>
      <Text>Profile</Text>
    </Container>
  )
}

export default Sidebar
