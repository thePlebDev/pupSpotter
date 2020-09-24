import React,{useState} from 'react';
import styled from 'styled-components'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import {Container,Content} from '../../Assets/NotificationStylings';

const Content200 = styled(Content)`
  background-color:#4caf50;
  opacity:${props=>props.show?1:0};
  transition:all .3s;
`

const Notfication200 =({status,words,show,setShow})=>{
  return(
    <Container data-testid="200">
      <Content200 data-testid="content" show={show}>
        <CheckCircleIcon/>
        <div data-testid="words">{words}</div>
        <CloseIcon style={{cursor:'pointer'}} onClick={()=>{setShow(false)}}/>
      </Content200>
    </Container>
  )
}


export default Notfication200
