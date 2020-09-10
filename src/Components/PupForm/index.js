import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Container from '@material-ui/core/Container';


import useForm from '../../Hooks/useForm';
import useOutsideClick from '../../Hooks/UseOutsideClick'
import {Form} from '../../Assets/FormStylings';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width:'120%',
      'font-size':'1.2em',

    },
  },
  alerts: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  buttons: {
    width: '60%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    padding:'10px',
    border:'1px solid #05386B',
    marginBottom:'20px',
    marginLeft:'60px',
  },

}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const PupForm =(props)=>{
  const classes = useStyles()
const {handleClick,handleChange,handleSubmit,state,errors,createdSpotting} = useForm()
const [loadingState,setLoadState] = useState(false)
const [open,setOpen] = useState(false)
const node = useRef();
const {show}=useOutsideClick(node)
const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(()=>{
    setLoadState(true)
    if(createdSpotting){
      props.history.push('/')
    }
  },[createdSpotting,props.history])


  return(
    <div  >
      <Snackbar className={classes.alerts} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Location Added!!
        </Alert>
      </Snackbar>


      <Form onSubmit={(e)=>{handleSubmit(e)}} state={loadingState}>
      <div style={{position:'relative',marginBottom:'30px'}}>
        <TextField className={classes.root} id="standard-basic" label="Dog Name" width="75%"
        error={errors.name} value={state.name} onChange={(e)=>handleChange(e)} name='name'/>

      </div>
      <div style={{position:'relative',marginBottom:'50px'}}>
        <TextField className={classes.root} id="standard-basic" label="Description"
        name="description" value={state.description}onChange={(e)=>handleChange(e)}/>
      </div>
        <div>

          <Button color={errors.loc?'secondary':''} className={classes.buttons} type="button" value={state.location}
          ref={node} onClick={(e)=>{setOpen(true)}} >Add Location</Button>
        </div>

        <div>
          <Button className={classes.buttons}  type="Submit">Submit</Button>
        </div>
      </Form>
    </div>
  )
}

export default PupForm
