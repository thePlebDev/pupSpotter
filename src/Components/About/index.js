import React,{useState} from 'react';
import styled from 'styled-components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';

import data from './stepData';
import StepContent from './stepContent';

const Container = styled.div`
padding-top:10%;
position:fixed;
z-index:999999;
width:70%;
height:100%;
background-color:rgba(0,0,0,0.4);
transform:scale(0);
cursor:default;
animation:${props=>props.show ? 'unfoldIn .7s  forwards':''};

@keyframes unfoldIn {
  0%{
    transform:scaleY(.005) scaleX(0);
  }
  50%{
    transform:scaleY(.005) scaleX(1);
  }
  100%{
    transform:scaleY(1) scaleX(1);
  }
}
@keyframes unfoldOut {
  0%{
    transform:scaleY(1) scaleX(1);
  }
  50%{
    transform:scaleY(.005) scaleX(1);
  }
  100%{
    transform:scaleY(.005) scaleX(0);
  }

}
`
const ContentContainer = styled.div`
  width:60%;
  height:30%;
  margin:0 auto;
  background-color:white;
  transform:scale(1);

  @media screen and (max-width: 800px) {
  width:70%
`



const About =({modalShow,setModalShow})=>{
  const [step,setStep] = useState(0)

  const handleClick=()=>{
    setModalShow(false)
  }
  const next =()=>{
    if(step === data.length -1){
      setStep(0)
    }
    else if (step < data.length) {
      setStep(step + 1);
    }
  }

const previous =()=>{
  if(step === 0){
    setStep(data.length - 1)
  }
  else if (step > 0) {
    setStep(step - 1)
  }
}

  return(
    <Container show={modalShow}>
      <ContentContainer>
          <CloseIcon style={{ cursor:"pointer",color:'#3f51b5',fontSize:'30px'}} onClick={()=>handleClick()}/>
          <StepContent title={data[step].title} content={data[step].content} />
          <ArrowBackIcon style={{cursor:"pointer",borderRadius:'50%',color:'white',backgroundColor:'#3f51b5',fontSize:'40px',position:'absolute',left:'10px',bottom:'10px'}} onClick={()=>{previous()}}/>
          <ArrowForwardIcon style={{cursor:"pointer",borderRadius:'50%',fontSize:'40px',color:'white',position:'absolute',right:'10px',bottom:'10px',backgroundColor:'#3f51b5'}} onClick={()=>{next()}}/>
      </ContentContainer>
    </Container>
  )
}


export default About
