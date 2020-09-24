import React,{useState,useEffect,useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import NotificationSystem from '../Notification';



import useForm from '../../Hooks/useForm';
import {axiosPost} from '../../utils/AxiosFuncs'
import {Form} from '../../Assets/FormStylings';
import {signupValidation} from '../../utils/Validation';




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
    marginLeft:'15%',


  },

}));

const Image = styled.img`
  display:none;
  @media screen and (min-width: 992px) {
  display:block;
}
`


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const PupForm =(props)=>{
  const classes = useStyles()
const {handleChange,handleClick,setOpen,show,status,handleSubmit,state,errors,setShow} = useForm(axiosPost,signupValidation)
const [loadingState,setLoadState] = useState(false)
const node = useRef();

  return(
    <div style={{height:'100%',display:'flex',alignItems:'center'}}>
      <Image src={require("./images/womanDog.png")} style={{width:'50%'}}  alt="dog in nature" />
      <Form onSubmit={(e)=>{handleSubmit(e)}} state={loadingState} enctype="multipart/form-data">
        <NotificationSystem status={status} show={show} setShow={setShow} />
      <div style={{margin:'0 auto',padding:'50px',borderRadius:'4px'}} >
      <div style={{color:'rgba(0, 0, 0, 0.5)',opacity:'0.8',textTransform:'uppercase',textAlign:'center',fontSize:'2.6em'}}>SPot a pup</div>
      <div style={{position:'relative',marginBottom:'30px'}}>
        <TextField inputProps={{ "data-testid": "content-input" }} className={classes.root} id="name-input" label="Dog Name" style={{width:'70%',marginLeft:'15%',padding:'5px'}}
        error={errors.name} data-testid="pupForm" value={state.name} onChange={(e)=>handleChange(e)} name='name'/>

      </div>
      <div style={{position:'relative',marginBottom:'50px'}}>
        <TextField className={classes.root} id="description-input" label="Description" style={{width:'70%',marginLeft:'15%'}}
        name="description" data-testid="pupForm" value={state.description}onChange={(e)=>handleChange(e)}/>
      </div>
        <div>

          <Button color={errors.loc?'secondary':'default'} className={classes.buttons} id="button" type="button" value={state.location}
          ref={node} onClick={(e)=>{handleClick()}} data-testid="pupForm" disableRipple={true} >Add Location</Button>
        </div>

        <div>
          <Button className={classes.buttons} data-testid="pupForm"  type="Submit" disableRipple={true}>Submit</Button>
        </div>
        </div>
      </Form>
    </div>
  )
}

export default PupForm
