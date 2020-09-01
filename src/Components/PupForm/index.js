import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components';


import useForm from '../../Hooks/useForm';
import useOutsideClick from '../../Hooks/UseOutsideClick'
import {Container,Form,Text,Button,InputSpan,Label} from '../../Assets/FormStylings';

const Input = styled.input`
width:100%;
height:50px;
font-size:18px;
border-bottom:${props =>props.error ? '2px solid red':'1px solid #05386B;'};
border-top:none;
border-left:none;
border-right:none;
padding-bottom:5px;
outline:none;
background-color: #EDF5E1;
color:#05386B;
:focus + Label,:focus Label:valid +InputSpan{
  transform: translateY(-100%);
  font-size:1.3em;
}`

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
  width: 40%;
  background-color:#5CDB95;
  padding:10px;
  border-radius:4px;
  text-align:center;
  font-size:1.2em;
  position:absolute;
  transition: all .5s;
  transform:${props=>props.show?'translateX(250px)':'translateX(1400px)'};
  opacity:${props=>props.show?'1': 0};
  z-index:1;
  top:2%;
  left:4%;
`

const PupForm =(props)=>{
const {handleClick,handleChange,handleSubmit,state,errors,createdSpotting} = useForm()
const [loadingState,setLoadState] = useState(false)
const node = useRef();
const {show}=useOutsideClick(node)
  useEffect(()=>{
    setLoadState(true)
    if(createdSpotting){
      props.history.push('/')
    }
  },[createdSpotting])

  return(
    <Container >

      <Added state={state.location}show={show}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <i className="fa fa-bell"  style={{fontSize:'1.3em',color:'#05386B'}}></i>
          <span>Location Added</span>
          <span style={{fontSize:'1.3em',color:'#05386B',fontWeight:600}}>X</span>
        </div>
      </Added>

      <Form onSubmit={(e)=>{handleSubmit(e)}} state={loadingState}>
      <div style={{position:'relative',marginBottom:'80px'}}>
        <Input type="text" name="name" error={errors.name} value={state.name}onChange={(e)=>handleChange(e)}/>
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

          <Button type="button" value={state.location} ref={node} onClick={(e)=>{handleClick(e)}}>Add Location</Button>
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
