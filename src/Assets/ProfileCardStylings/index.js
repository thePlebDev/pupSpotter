import styled from 'styled-components'

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
cursor:pointer;
font-size:1.3em;
width:80px;
text-align:center;
margin-left:40px;
margin-bottom:11.5px;
padding:5px;
`
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
const CardContainer = styled.div`
  position:relative;
  width:400px;
  height:172px;
  margin:2em;
`
const Image =styled.img`
  width:100px;
  margin-left:6px;
  height:100px;
  border:5px solid white;
  border-radius:50%;
  margin-bottom:10px;
`

const Name = styled.div`
  font-size:1.3em;
  margin-left:6px;
  margin-bottom:10px;
  padding:5px;
  width:80%;
  text-align:center;
`
const AboutBack = styled.div`
  width:80%;
  margin:20% auto;
  font-size:1.4em;

`
export{ About,Location,BackCard,FrontCard,Button,AboutButton,CardContainer,Image,Name,AboutBack}
