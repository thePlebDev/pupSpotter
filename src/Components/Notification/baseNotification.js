import React from 'react';
import styled from 'styled-components';
import {Container,Content} from '../../Assets/NotificationStylings';
import CloseIcon from '@material-ui/icons/Close';

const ContentShow = styled(Content)`
  opacity:${props=>props.show?1:0};
  transition:all .3s;
  background-color:red;
`

const BaseNotification =({show,words,setShow})=>{
  // the opacity, the content styles and the container style
  return(
    <Container data-testId="201">
      <ContentShow show={true}>
        <div data-testId="words">{'it is what it is'}</div>
        <CloseIcon style={{cursor:'pointer'}} onClick={()=>{setShow(false)}}/>
      </ContentShow>
    </Container>
  )
}

export default BaseNotification
