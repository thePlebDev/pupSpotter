import React,{useState,useRef} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Sidebar from '../SideBar';

const Container = styled.nav`

  display:flex;
  height:50px;
  align-items:center;
  justify-content:space-between;
  padding:10px;
  background-color:#05386B;
  position:relative;
  z-index:1000;

`
// the min-width means for that width and higher
const Hamburger = styled.div`
  background-color:#5CDB95;
  height:5px;
  width:30px;
  margin:5px;
  @media only screen and (min-width:768px){
    display:none;
  }
`

const Text = styled.div`
  font-size:30px;
  letter-spacing:2px;
  color:#5CDB95;
  font-weight:600;
`

const paw = {
  fontSize:'30px',
  margin:'1px 5px',
  color:'#5CDB95'
}
//dthe max-width means for that width and above.
const LinkContainer = styled.div`
  display:flex;
  justify-content:space-evenly;
  width:50%;
  height:60%;
  color:#5CDB95;
  @media only screen and (max-width:768px){
    display:none;
  }
`
const Links = styled.div`
  align-self:flex-end;
  font-size:20px;
  cursor:pointer;
  padding:2px;
  cursor:pointer;
  @media (max-width:768px){
    display:none;
  }


`



const NavBar = ()=>{
  const [state,setState] = useState(true)
  const node = useRef();

  const handleClick = e =>{

      setState(!state)
}


  return(
    <Container>
    <div style={{display:'flex'}}>
        <i style={paw} className="fa fa-paw"></i>
        <Text><Link to="/"> Goodboy Tracker </Link></Text>
        <i style={paw} className="fa fa-paw"></i>
    </div>
      <LinkContainer>
        <Links>
          <Link to='/'>Home</Link>
        </Links>
        <Links>
          <Link to='/pupSpotting'>Spot a Pup</Link>
        </Links>
        <Links>
          <Link to='/register'>Register</Link>
        </Links>
        <Links>
          <Link to='/login'>Login</Link>
        </Links>
        <Links><Link to='/profile'>Profile</Link></Links>
      </LinkContainer>
      <div onClick={()=>{handleClick()}} ref={node}>
        <Hamburger ></Hamburger>
        <Hamburger></Hamburger>
        <Hamburger></Hamburger>
      </div>
      <Sidebar state={state} />
    </Container>
  )
}

export default NavBar
