import React,{useState,useEffect,useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';



import useForm from '../../Hooks/useForm';
import {Form} from '../../Assets/FormStylings';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      'font-size':'1.2em',
    },
    marginBottom:'20px',
  },
  alerts: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  buttons: {
    width:'70%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    padding:'10px',
    border:'1px solid #05386B',
    marginBottom:'40px',
    marginLeft:'15%'

  },

}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const PupForm =(props)=>{
  const classes = useStyles()
const {handleChange,handleClick,open,setOpen,handleSubmit,state,errors,createdSpotting} = useForm()
const [loadingState,setLoadState] = useState(false)
const node = useRef();


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
    <Snackbar open={open} className={classes.alerts} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        Location Added!
      </Alert>
    </Snackbar>

      <Form onSubmit={(e)=>{handleSubmit(e)}} state={loadingState} enctype="multipart/form-data">
      <div style={{border:'1px solid rgba(0, 0, 0, 0.87)',width:'60%',margin:'0 auto',padding:'50px',borderRadius:'4px'}} >
      <div style={{position:'relative',marginBottom:'30px'}}>
        <TextField className={classes.root} id="standard-basic" label="Dog Name" style={{width:'70%',marginLeft:'15%',padding:'5px'}}
        error={errors.name} value={state.name} onChange={(e)=>handleChange(e)} name='name'/>

      </div>
      <div style={{position:'relative',marginBottom:'50px'}}>
        <TextField className={classes.root} id="standard-basic" label="Description" style={{width:'70%',marginLeft:'15%'}}
        name="description" value={state.description}onChange={(e)=>handleChange(e)}/>
      </div>
        <div>

          <Button color={errors.loc?'secondary':''} className={classes.buttons} type="button" value={state.location}
          ref={node} onClick={(e)=>{handleClick()}} disableRipple={true} >Add Location</Button>
        </div>

        <div>
          <Button className={classes.buttons}  type="Submit" disableRipple={true}>Submit</Button>
        </div>
        </div>
      </Form>
    </div>
  )
}

export default PupForm
