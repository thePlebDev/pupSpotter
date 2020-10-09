import React from 'react';
import styled from 'styled-components';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import {Container,Content} from '../../Assets/NotificationStylings';

const Content500 = styled(Content)`
  background-color:#f44336;
  opacity:${props=>props.show?1:0};
  transition:all .3s;
`

const Notification500 = ({status,words,show,setShow})=>{
  return(
    <Container data-testid={status}>
      <Content500 show={show}>
        <ErrorIcon/>
        <div data-testid="words">{words}</div>
        <CloseIcon style={{cursor:'pointer'}} onClick={()=>{setShow(false)}}/>
      </Content500>
    </Container>
  )
}

export default Notification500
