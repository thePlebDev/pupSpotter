import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';


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
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '58.5ch',
      'font-size':'1.2em'
    },
  },
}));

const PupForm =(props)=>{
  const classes = useStyles()
const {handleClick,handleChange,handleSubmit,state,errors,createdSpotting} = useForm()
const [loadingState,setLoadState] = useState(false)
const node = useRef();
const {show}=useOutsideClick(node)
  useEffect(()=>{
    setLoadState(true)
    if(createdSpotting){
      props.history.push('/')
    }
  },[createdSpotting,props.history])


  return(
    <Container >


      <Form onSubmit={(e)=>{handleSubmit(e)}} state={loadingState}>
      <div style={{position:'relative',marginBottom:'30px'}}>
        <TextField className={classes.root} id="standard-basic" label="Dog Name"
        error={errors.name} value={state.name} onChange={(e)=>handleChange(e)} name='name'/>

      </div>
      <div style={{position:'relative',marginBottom:'50px'}}>
        <TextField className={classes.root} id="standard-basic" label="Description"
        name="description" value={state.description}onChange={(e)=>handleChange(e)}/>
      </div>
        
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
