import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components';

import Sidebar from '../SideBar';

const Container = styled.nav`

  display:flex;
  height:50px;
  align-items:center;
  justify-content:space-between;
  padding:10px;
  background-color:#05386B;
  position:relative;

`

const Hamburger = styled.div`
  background-color:#5CDB95;
  height:5px;
  width:30px;
  margin:5px;
`

const Text = styled.div`
  font-size:30px;
  letter-spacing:2px;
  color:#5CDB95;
  font-weight:600;
`
const Paw = styled.i`
 font-size:20px
`
const paw = {
  fontSize:'30px',
  margin:'1px 5px',
  color:'#5CDB95'
}



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
        <Text>Goodboy Tracker</Text>
        <i style={paw} className="fa fa-paw"></i>
      </div>
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
