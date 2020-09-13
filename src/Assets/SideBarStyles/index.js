import styled from 'styled-components';

const SideBar = styled.div`
  position:absolute;
  background-color:#3f51b5;
  height:100vh;
  width:230px;
  opacity:0.8;
  transition:all 0.3s ease;
  z-index:999999;
`
const Tab = styled.div`
top:5px;
padding:5px;
border-radius:30%;
transition:all 0.3s ease;
background-color:#3f51b5;
position:absolute;
width:110px;

`

export{SideBar,Tab}
