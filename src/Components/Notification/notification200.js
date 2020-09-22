import React from 'react';
import styled from 'styled-components'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import {Container,Content} from '../../Assets/NotificationStylings';

const Content200 = styled(Content)`
  background-color:#4caf50;
`

const Notfication200 =({status,words})=>{

  return(
    <Container data-testid="200">
      <Content200>
        <CheckCircleIcon/>
        <div data-testid="words">{words}</div>
        <CloseIcon style={{cursor:'pointer'}}/>
      </Content200>
    </Container>
  )
}


export default Notfication200
