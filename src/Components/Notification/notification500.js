import React from 'react';
import styled from 'styled-components';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import {Container,Content} from '../../Assets/NotificationStylings';

const Content500 = styled(Content)`
  background-color:#f44336;
  display:${props=>props.show?'':'none'};
`

const Notification500 = ({status,words,show,setShow})=>{
  return(
    <Container data-testId={status}>
      <Content500 show={show}>
        <ErrorIcon/>
        <div data-testId="words">{words}</div>
        <CloseIcon style={{cursor:'pointer'}} onClick={()=>{setShow(false)}}/>
      </Content500>
    </Container>
  )
}

export default Notification500
