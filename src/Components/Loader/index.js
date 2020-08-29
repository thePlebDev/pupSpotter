import React from 'react';
import styled from 'styled-components';

const Paw = styled.i`
  font-size:200px;
  color:#5CDB95;
  animation: spin 2s linear infinite;

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Text = styled.div`
  font-size:40px;
  padding:5px;
  text-transform:uppercase;
  letter-spacing:2px;
  &::after{
    content: '...';
    display:inline-block;
    overflow:hidden;
    vertical-align:bottom;
    animation: dots steps(4,end) 2s infinite;
    width:0px;
  }
  @keyframes dots{
    to{
      width:1.25em;
    }
  }
`




const Loader = ()=>{

  return(
    <div style={{height:'80vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Paw className="fa fa-paw"></Paw>
        <Text>loading</Text>
    </div>
  )
}

export default Loader
