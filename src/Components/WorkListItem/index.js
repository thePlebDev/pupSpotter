import React from 'react';
import styled from 'styled-components';


const Item = styled.div`
  background-color:#DCDCDC;

  margin:5px auto;
  border-radius:4px;
  padding:10px;
  box-shadow: 0px 5px 25px 0 rgba(0,0,0,0.25);
`
const Container = styled.div`
  width:100%
`


const WorkListItem =({items})=>{

  return(
    <Container data-testid="container">
      <Item data-testid="text">
        {items}
      </Item>
    </Container>
  )
}


export default WorkListItem
