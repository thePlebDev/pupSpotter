import React from 'react';
import styled from 'styled-components'
import {Container,Content} from '../../Assets/NotificationStylings';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';

const Content201 = styled(Content)`
  background-color:#ff9800;
`

const Notificaiton201 = ({staus,words})=>{

  return(
    <Container data-testId="201">
      <Content201>
        <WarningIcon/>
        <div data-testId="words">{words}</div>
        <CloseIcon/>
      </Content201>
    </Container>
  )
}

export default Notificaiton201
