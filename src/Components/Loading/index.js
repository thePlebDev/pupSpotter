import React from 'react';
import styled from 'styled-components';


const Loader = styled.div`
  position:absolute;
  left:35%;
  top:30%;
  background-color:rgba(255,255,255,0.5);
  width:90px;
  height:90px;
  border-radius:50%;
  animation: 2s infinite pulse linear;
  border-top: 1.1em solid rgba(63, 81, 181, 1);
  border-right: 1.1em solid rgba(63, 81, 181, 1);
  border-bottom: 1.1em solid rgba(63, 81, 181, 1);
  border-left: 1.1em solid white;
  z-index:9999999999999999999;


  @keyframes pulse {
    from{
      transform:rotate(0deg);
    }

    to{
      transform:rotate(360deg);
    }
  }
  @media only screen and (max-width:600px){
    left:40%;
  }
  `

const Loading =()=>{


  return(

    <Loader></Loader>
  )
}

export default Loading
