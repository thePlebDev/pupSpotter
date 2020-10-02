import React,{useState} from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  animation:${props=>props.show?'unfoldOut 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards':'unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;'};
  z-index:9999999999999999999;
  width:100%;
  height:100%;
  overflow:auto;
  background-color:rgba(0,0,0,0.4);
  @keyframes unfoldIn {
    0% {
      transform:scaleY(.005) scaleX(0);
    }
    50% {
      transform:scaleY(.005) scaleX(1);
    }
    100% {
      transform:scaleY(1) scaleX(1);
    }
  }
  @keyframes unfoldOut {
  0% {
    transform:scaleY(1) scaleX(1);
  }
  50% {
    transform:scaleY(.005) scaleX(1);
  }
  100% {
    transform:scaleY(.005) scaleX(0);
  }
}
`
const ModalContent = styled.div`
padding:20px;
width:20%;
background-color: #fefefe;
border:1px solid #888;
margin: 15% auto;
text-align:center;
border-radius:0.5em;
transform:translateX(-1500px);
animation:${props=>props.show ?'zoomOut .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards':'zoomIn .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards'};

@keyframes zoomOut {
  0% {
    transform:scale(1);
  }
  100% {
    transform:scale(0);
  }
}


`
const Close = styled.span`
 color:red;
 font-size:1.4em;
`
const Button = styled.button`
position:absolute;
left:50%;
z-index:999999999999999999999999;
`

const TestForm = ({location})=>{
  console.log(location)
  const [state,setState] = useState(false)

  const handleClick =(e)=>{
    setState(!state)
  }

  return(
    <div style={{height:'100vh',width:'100vw'}}>
      <Button onClick={()=>handleClick()}>Open the Modal</Button>
      <Modal show={state}>
        <ModalContent show={state}>
          <Close className="close">&times;</Close>
          <img style={{width:'100px',height:'100px'}} alt="game" src="https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
          <p>Some text in the Modal...</p>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default TestForm
