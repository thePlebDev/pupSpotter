import React from 'react';
import styled from 'styled-components';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import {Container,Content} from '../../Assets/NotificationStylings';

const Content500 = styled(Content)`
  background-color:#f44336;
`

const Notification500 = ({status,words})=>{
  return(
    <Container data-testId={status}>
      <Content500>
        <ErrorIcon/>
        <div data-testId="words">{words}</div>
        <CloseIcon/>
      </Content500>
    </Container>
  )
}

export default Notification500
