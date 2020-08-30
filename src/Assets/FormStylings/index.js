import styled from 'styled-components';


const Input = styled.input`
width:100%;
font-size:18px;
padding:10px;
border-radius:4px;
outline:none;

margin-top:5px;
border:1px solid #05386B;
margin-bottom:30px;
`

const Form = styled.form`
  width:80%;
  margin: 0 auto;
`
const Text = styled.div`
font-size:1.2em;
font-weight:600;
letter-spacing:1px;
`
const Button = styled.button`
background-color:#05386B;
padding:10px 36px;
color:#5CDB95;
border-radius:4px;

width:105%;
font-size:1.2em;
letter-spacing:1px;
outline:none;
text-align:center;
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
position:relative;
width:80%;
margin: 0 auto;
border: 1px solid #05386B;
padding:30px;
border-radius:4px;
`



export {Input,Form,Text,Button,Errors,Container}
