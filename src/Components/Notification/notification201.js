import React from 'react';
import styled from 'styled-components'
import {Container,Content} from '../../Assets/NotificationStylings';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';

const Content201 = styled(Content)`
  background-color:#ff9800;
  opacity:${props=>props.show?1:0};
  transition:all .3s;

`

const Notificaiton201 = ({setShow,words,show})=>{

  return(
    <Container data-testId="201">
      <Content201 show={show}>
        <WarningIcon/>
        <div data-testId="words">{words}</div>
        <CloseIcon style={{cursor:'pointer'}} onClick={()=>{setShow(false)}}/>
      </Content201>
    </Container>
  )
}

export default Notificaiton201
