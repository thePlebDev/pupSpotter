import React from 'react';
import styled from 'styled-components'

const Button = styled.div`
  position:absolute;
  padding:2px;
  width:90px;
  background-color:#EDF5E1;
  padding:2px;
  background-color:#EDF5E1;
  border-top:none;
  border-left:none;
  border-right:none;
  border-bottom:1px solid #05386B;
  font-size:1.3em;
  margin-top:30px;
  text-align:center;
  left:68%;
  bottom:5.7%;
`
const AboutButton = styled.div`
position:absolute;
padding:2px;
background-color:#EDF5E1;
border-top:none;
border-left:none;
border-right:none;
border-bottom:1px solid #05386B;
outline:none;
font-size:1.3em;
margin-top:30px;
width:90px;
left:37%;
bottom:5.7%;
text-align:center;
transform-style: preserve-3d;
`

const Container = styled.div`
  display:grid;
  width:90%;
  margin-left:150px;
  margin-bottom:100px;
  align-items:center;
  grid-template-columns:repeat(auto-fit,minmax(400px,1fr));
  @media only screen and (max-width:600px){
    margin-left:50px;
  }

`
const CardContainer = styled.div`
  position:relative;
  width:400px;
  height:172px;
  margin:2em;


`
const Card = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  transform-style: preserve-3d;
  transition:all 0.5s ease;

  :hover{
    transform:rotateY(180deg);
  }
`
const FrontCard = styled.div`
  width:100%;
  height:100%;
  backface-visibility:hidden;
  position:absolute;
  margin:0 auto;
  padding-top:20px;
  display:flex;
  flex-direction:row;
`
const BackCard = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  backface-visibility:hidden;
  transform:rotateY(180deg);
`

const Location = styled.div`
align-self:flex-end;

font-size:1.3em;
width:80px;
text-align:center;
margin-left:50px;
margin-bottom:11.5px;
padding:5px;
`
const About = styled.div`
align-self:flex-end;

font-size:1.3em;
width:80px;
text-align:center;
margin-left:40px;
margin-bottom:11.5px;
padding:5px;
`



const Profile = ()=>{

  return(
    <Container >
        <CardContainer>
          <Card>
            <FrontCard>
              <div>
                <img  src='https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                alt={'cute doggy'}  style={{width:'100px',marginLeft:'6px',height:'100px', border:'5px solid white',borderRadius:'50%',marginBottom:'10px'}}/>

                <div style={{fontSize:'1.3em',marginLeft:'6px',marginBottom:'10px',padding:'5px',width:'80%',textAlign:'center'}}>Dave</div>

              </div>
              <About >About</About>
              <Location >Location</Location>
            </FrontCard>
            <BackCard >
              <div style={{width:'80%',margin:'20% auto',fontSize:'1.4em',fontSize:'1.3em'}}>
                Dave is a very good boy! I saw him jumping in a puddle.
              </div>
            </BackCard>
          </Card>
        </ CardContainer>
        <CardContainer>
          <Card>
            <FrontCard>
              <div>
                <img  src='https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                alt={'cute doggy'}  style={{width:'100px',marginLeft:'6px',height:'100px', border:'5px solid white',borderRadius:'50%',marginBottom:'10px'}}/>

                <div style={{fontSize:'1.3em',marginLeft:'6px',marginBottom:'10px',padding:'5px',width:'80%',textAlign:'center'}}>Dave</div>

              </div>
              <About >About</About>
              <Location >Location</Location>
            </FrontCard>
            <BackCard >
              <div style={{width:'80%',margin:'20% auto',fontSize:'1.4em',fontSize:'1.3em'}}>
                Dave is a very good boy! I saw him jumping in a puddle.
              </div>
            </BackCard>
          </Card>
        </ CardContainer>
        <CardContainer>
          <Card>
            <FrontCard>
              <div>
                <img  src='https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                alt={'cute doggy'}  style={{width:'100px',marginLeft:'6px',height:'100px', border:'5px solid white',borderRadius:'50%',marginBottom:'10px'}}/>

                <div style={{fontSize:'1.3em',marginLeft:'6px',marginBottom:'10px',padding:'5px',width:'80%',textAlign:'center'}}>Dave</div>

              </div>
              <About >About</About>
              <Location >Location</Location>
            </FrontCard>
            <BackCard >
              <div style={{width:'80%',margin:'20% auto',fontSize:'1.4em',fontSize:'1.3em'}}>
                Dave is a very good boy! I saw him jumping in a puddle.
              </div>
            </BackCard>
          </Card>
        </ CardContainer>

    </Container>
  )
}

export default Profile
