import React from 'react';
import styled from 'styled-components';


const Loader = styled.div`
  position:absolute;
  left:50%;
  top:30%;
  background-color:#EDF5E1;
  width:90px;
  height:90px;
  border-radius:50%;
  animation: 2s infinite pulse linear;
  border-top: 1.1em solid rgba(92, 219, 149, 0.2);
  border-right: 1.1em solid rgba(92, 219, 149, 0.2);
  border-bottom: 1.1em solid rgba(92, 219, 149, 0.2);
  border-left: 1.1em solid #5CDB95;


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
