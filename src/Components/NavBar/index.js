import React,{useState} from 'react';
import styled from 'styled-components';
import PetsIcon from '@material-ui/icons/Pets';
import HomeIcon from '@material-ui/icons/Home';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {Link} from 'react-router-dom';
import {Tab} from '../../Assets/SideBarStyles';
import LoginStatus from '../LoginStatus';
import PropTypes from 'prop-types';

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


const NavBar = ({loggedIn,setLoggedIn})=> {
  const [show,setShow] = useState(true)
  return (
    <div style={{position:'absolute',left:0,height:'100vh'}}>
    <div />
      <HomeTab className="tab">
        <Link to="/">
          <Text>Home</Text>
        </Link>
          <HomeIcon style={{fontSize:'60',color:'white',cursor:'pointer'}} onClick={()=>setShow(!show)}  />

      </HomeTab>
      <SpotTab className="tab">
        <Link to="/pupSpotting">
          <Text>Spot</Text>
        </Link>
        <PetsIcon style={{fontSize:'60',color:'white',cursor:'pointer'}} onClick={()=>setShow(!show)}  />
      </SpotTab>

      <LoginTab className="tab">
          <LoginStatus loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </LoginTab>

      <AboutTab className="tab">
        <Text>About</Text>
        <HelpOutlineIcon style={{fontSize:'60',color:'white',cursor:'pointer'}} onClick={()=>setShow(!show)}  />
      </AboutTab>

    </div>
  );
}

NavBar.propTypes ={
  loggedIn:PropTypes.bool,
  setLoggedIn:PropTypes.func
}

export default NavBar
