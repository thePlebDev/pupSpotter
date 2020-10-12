import React,{useState} from 'react';
import styled from 'styled-components';

import useWorkForm from '../../Hooks/UseWorkForm'
import {workFormValidation} from '../../utils/Validation';

const Container = styled.div`
  width:100%;
  display:flex;
  align-items:start;
  justify-content:flex-start;
  flex-direction:column;
`
const Form = styled.form`


text-align:left;

`
const TextArea = styled.textarea`
  background-color:#DCDCDC;
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
margin-bottom:5px;
color:white;
`


const WorkSuggestionForm =()=>{
  const {errors,state,handleSubmit,handleChange} = useWorkForm(workFormValidation)


  return(
    <Container>
    <Form data-testid="form" onSubmit={(e)=>handleSubmit(e)}>
        <label>
          <TextArea placeholder="add a suggestion" style={{width:'100%'}} value={state.textarea}  onChange={(e)=>handleChange(e)} name='textarea' ></TextArea>
        </label>
        <Button type="submit" data-testid="submit">Add</Button>
    </Form>

    </Container>
  )
}


export default WorkSuggestionForm
