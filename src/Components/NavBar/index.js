import React,{useState} from 'react';
import styled from 'styled-components';
import PetsIcon from '@material-ui/icons/Pets';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {Link} from 'react-router-dom';
import {SideBar,Tab} from '../../Assets/SideBarStyles';


const LeftSideBar = styled(SideBar)`
`
const HomeTab = styled(Tab)`
  left:0px;
  border-radius:4px;
  width:215px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  opacity:0.8;
  transform:translateX(-150px);
  cursor:pointer;
  z-index:99999999999999999;

  &:hover{
    opacity:1;
    transform:translateX(-30px);:
  }
`
const SpotTab = styled(HomeTab)`
  top:15%;
`
const LoginTab = styled(HomeTab)`
  top:30%;
`
const AboutTab = styled(HomeTab)`
  top:45%;
`



const Text = styled.div`
  font-size:1.4em;
  color:white;
  margin-left:60px;
  cursor:pointer;
`


const NavBar = (props)=> {
  const [show,setShow] = useState(true)
  return (
    <div style={{position:'absolute',left:0,height:'100vh'}} >

      <HomeTab show={show}>
        <Text>Home</Text>
        <HomeIcon style={{fontSize:'60',color:'white',cursor:'pointer'}} onClick={()=>setShow(!show)}  />
      </HomeTab>
      <SpotTab show={show}>
        <Text>Spot</Text>
        <PetsIcon style={{fontSize:'60',color:'white',cursor:'pointer'}} onClick={()=>setShow(!show)}  />
      </SpotTab>

      <LoginTab show={show}>
        <Text>Login</Text>
        <PersonIcon style={{fontSize:'60',color:'white',cursor:'pointer'}} onClick={()=>setShow(!show)}  />
      </LoginTab>

      <AboutTab show={show}>
        <Text>About</Text>
        <HelpOutlineIcon style={{fontSize:'60',color:'white',cursor:'pointer'}} onClick={()=>setShow(!show)}  />
      </AboutTab>

    </div>
  );
}

export default NavBar
