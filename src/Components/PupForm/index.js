import React,{useState,useEffect} from 'react';
import styled from 'styled-components'

import useForm from '../../Hooks/useForm';
import {Container,Form,Input,Text,Button,InputSpan,Label} from '../../Assets/FormStylings';



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
  top:-5%;
  left:4%;
`
const PupForm =(props)=>{
const {handleClick,handleChange,handleSubmit,state,errors,createdSpotting} = useForm()
const [loadingState,setLoadState] = useState(false)
  useEffect(()=>{
    setLoadState(true)
    if(createdSpotting){
      props.history.push('/')
    }
  },[createdSpotting])

  return(
    <Container >

      <Added state={state.location}>Location Added</Added>

      <Form onSubmit={(e)=>{handleSubmit(e)}} state={loadingState}>
      <div style={{position:'relative',marginBottom:'80px'}}>
        <Input type="text" name="name" value={state.name}onChange={(e)=>handleChange(e)} required/>
        <Label for="doggy" >
          <InputSpan>Dog Name</InputSpan>
        </Label>
      </div>

        <label>
          <Text>Date Spotted</Text>
          <Input state={loadingState} type="date" name='date' value={state.date} onChange={(e)=>{handleChange(e)}} />
        </label>
        <div>
          <FileLabel>
            <Text>Upload Image</Text>

            <FileInput type="file" name='image' value={state.image} onChange={(e)=>{handleChange(e)}} />
          </FileLabel>
          {errors.image ? <div style={{color:'red'}}>{errors.image}</div>:''}
        </div>

        <div>

          <Button type="button" value={state.location} onClick={(e)=>{handleClick(e)}}>Add Location</Button>
          {errors.loc ? <div style={{color:'red'}}>{errors.loc}</div>:''}
        </div>

        <div>
          <Button type="Submit">Submit</Button>
        </div>
      </Form>

    </Container>
  )
}

export default PupForm
