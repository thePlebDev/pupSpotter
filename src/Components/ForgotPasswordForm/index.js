import React from 'react'
import styled from 'styled-components';

const Container = styled.div`

position:absolute;
width:300px;
opacity:0.9;
left:50%;
margin:-150px;
top:300px;
padding:10px;
background-color:#3f51b5;
`
const Text = styled.div`
text-align:center;
margin-bottom:10px;
color:white;
font-size:1.3em;
`
const Button = styled.button`

  display:block;
  box-shadow:0 5px 25px 0 rgb(0,0,0);
  margin:0 auto;
  margin-top:20px;
  padding:4px 30px;
  border:none;
  outline:'none';
  border-radius:4px;

`

const ForgotPasswordForm =()=>{
  return(
    <Container>
      <Text>Forgot Password</Text>
      <form style={{textAlign:'center'}}>
        <label>
          <input type="text" placeholder="Please enter email" style={{width: '80%',padding:'5px',boder:'none',outline:'none'}}/>
        </label>
        <Button  type="submit">Submit</Button>
      </form>
    </Container>
  )
}

export default ForgotPasswordForm
