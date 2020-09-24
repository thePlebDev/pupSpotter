import styled from 'styled-components';

const InputSpan = styled.span`
position:absolute;
z-index:1;
bottom:0;
color:#05386B;
transition: all 0.3s ease;
`

const Label = styled.label`
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  height:100%;
  pointer-events:none;
  transition:all 0.3s ease;
  font-size:1.1em;
  letter-spacing:2px;


`

const Input = styled.input`
width:100%;
height:50px;
font-size:18px;
border-bottom:${props=> props.error? '1px solid error;': '1px solid #05386B;'}
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
}


`

const Form = styled.form`
  width:100%;
  top:5px;

`
const Text = styled.div`
font-size:1.1em;
letter-spacing:2px;
`
const Button = styled.button`

padding:10px 36px;
color:#05386B;
border-radius:4px;
border: 1px solid #05386B;
background-color: #EDF5E1;
cursor:pointer;
width:100%;
font-size:1.2em;
letter-spacing:1px;
outline:none;
text-align:center;
transition:all 0.3s ease;
:hover{
  color:#5CDB95;
  background-color: #05386B;
}

margin:10px auto;
@media only screen and (min-width: 1200px) {
  width:103%;
}

`
const Errors = styled.div`
  position:absolute;
  color:red;
  bottom:10px;
  font-weight:600;
  letter-spacing:1px;
`
const Container = styled.div`
position:absolute;
left:20%;
top:10%;
width:65%;
height:70vh;
margin:0 auto;
border: 1px solid #05386B;
padding:30px;
border-radius:4px;
@media only screen and (max-width:600px){
  left:12%;
}

`
const Title = styled.div`
color:rgba(0, 0, 0, 0.5);
opacity:0.8;
text-transform:uppercase;
text-align:center;
font-size:2.6em;
`
const TextFieldContainer = styled.div`
  position:relative;
  margin-bottom:30px;
`
const FormContentContainer = styled.div`
  margin: 0 auto;
  padding:50px;
`

export {FormContentContainer,Input,Form,Text,Button,Errors,Container,Label,InputSpan,Title,TextFieldContainer}
