import React,{useState,useEffect} from 'react';
import styled from 'styled-components'

import useForm from '../../Hooks/useForm'

const Form = styled.form`
  width:80%;
  margin:10% auto;
  color:#05386B;
  transition: opacity 2s ease;
  opacity:${props=>props.state ? '1':'0'};

`
const Input = styled.input`
width:95%;
font-size:18px;
padding:10px;
border-radius:4px;
outline:none;

margin-top:5px;
border:1 px solid #05386B;
margin-bottom:10px;


`
const Text = styled.div`
  font-size:1.2em;
  font-weight:600;
  letter-spacing:1px;

`

const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity:0;
  overflow:hidden;
  position:absolute;
  z-index: -1;
`
const FileLabel = styled.label`
  display:inline-block;
  background-color:#05386B;
  padding:10px 36px;
  color:#5CDB95;
  border-radius:4px;
  margin:10px auto;
  margin-left:30%;


`
const Button = styled.button`
background-color:#05386B;
padding:10px 36px;
color:#5CDB95;
border-radius:4px;
margin:10px auto;
font-size:1.2em;
letter-spacing:1px;
outline:none;
margin-left:30%;
`
const SubmitButton =styled.button`
  width: 100%;
  margin-top:10px;
  padding:10px;
  font-size:1.2em;
  background-color:white;
  border-radius:4px;
  color:#05386B;
  border-color:#05386B;
  letter-spacing:1px;
`
const Added = styled.div`
  width: 90%;
  background-color:#5CDB95;
  padding:10px;
  border-radius:4px;
  text-align:center;
  font-size:1.2em;
  font-weight:600;
  letter-spacing:2px;
  position:absolute;
  transition: opacity .2s;
  opacity:${props=>props.state ? '1':'0'};
  top:-14%;
  left:4%;
`
const PupForm =()=>{
const {handleClick,handleChange,handleSubmit,state,errors} = useForm()
const [loadingState,setLoadState] = useState(false)
useEffect(()=>{
  setLoadState(true)
},[])

  return(
    <div style={{position:'relative'}}>

      <Added state={state.loc}>Location Added</Added>

      <Form onSubmit={(e)=>{handleSubmit(e)}} state={loadingState}>
        <label>
          <Text>The Pup's Name</Text>

          {errors.name ? <div>{errors.name}</div>:''}

          <Input state={loadingState} type="text" name='name' value={state.name} onChange={(e)=>{handleChange(e)}}/>
        </label>

        <label>
          <Text>Date Pup Spotted</Text>
          <Input state={loadingState} type="date" name='date' value={state.date} onChange={(e)=>{handleChange(e)}} />
        </label>

        <FileLabel>
          <Text>Upload Image</Text>
          {errors.image ? <div>{errors.image}</div>:''}
          <FileInput type="file" name='image' value={state.image} onChange={(e)=>{handleChange(e)}} />
        </FileLabel>
        <div>
          {errors.loc ? <div>{errors.loc}</div>:''}
          <Button type="button" value={state.loc} onClick={(e)=>{handleClick(e)}}>Add Location</Button>
        </div>

        <div>
          <SubmitButton type="Submit">Submit</SubmitButton>
        </div>
      </Form>

    </div>
  )
}

export default PupForm
