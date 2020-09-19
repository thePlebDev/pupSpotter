import React,{useState} from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  display:${props=>props.show?'block':'none'};
  z-index:9999999999999999999;
  width:100%;
  height:100%;
  overflow:auto;
  background-color:rgba(0,0,0,0.4);
`
const ModalContent = styled.div`
width:20%;
height:10%;
background-color: #fefefe;
border:1px solid #888;
margin: 15% auto;
text-align:center;
border-radius:0.5em;
`
const Close = styled.span`
 color:red;
 font-size:1.4em;
`
const Button = styled.button`
position:absolute;
left:50%;
`

const TestForm = ()=>{
  const [state,setState] = useState(true)

  const handleClick =(e)=>{
    setState(!state)
  }

  return(
    <div style={{height:'100vh',width:'100vw'}}>
      <Button onClick={()=>handleClick()}>Open the Modal</Button>
      <Modal show={state}>
        <ModalContent>
          <Close className="close">&times;</Close>
          <p>Some text in the Modal...</p>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default TestForm
