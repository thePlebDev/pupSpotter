import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
width:80%;
text-align:center;
margin:0 auto;
`
const Text = styled.div`
padding-top:10%;
font-size:4em;
color:rgba(5, 56, 107, 0.7);
text-transform:uppercase;
`
const Links =styled.h3`
  border:1px solid rgba(5, 56, 107, 0.7);
  border-radius:4px;
  font-size:2em;
  width:400px;
  margin:5% auto;
  color:rgba(5, 56, 107, 0.7);
  padding:8px 32px;
  cursor:pointer;
  text-transform:uppercase;


`



const NoDogs =()=>{
  return(
    <Container>
      <Text>Head out and spot some Pups!!</Text>
      <Link to='/pupSpotting'>
        <Links>Go dog spotting !!</Links>
      </Link>
    </Container>
  )
}

export default NoDogs
