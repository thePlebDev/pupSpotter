import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width:100%
`
const Form = styled.form`
margin:5px auto;
`
const TextArea = styled.textarea`
  background-color:#DCDCDC;
  width:95%;
  margin-left:5px;
  outline:none;
  border-radius:4px;
  overflow:auto;
  font-family: "Roboto";
`
const Button = styled.button`
padding:4px 24px;
border-radius:3px;
border:none;
background-color:green;
box-shadow: 0px 5px 25px 0 rgba(0,0,0,0.25);
outline:none;
margin-left:5px;
margin-bottom:5px;
color:white;
`





const WorkSuggestionForm =()=>{

  return(
    <Container>
    <Form data-testid="form">
        <label style={{width:'100%'}}>
          <TextArea placeholder="add a suggestion" ></TextArea>
        </label>
    </Form>
    <Button type="submit" data-testid="submit">Add</Button>
    </Container>
  )
}


export default WorkSuggestionForm
