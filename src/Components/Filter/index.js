import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import useOutsideClick from '../../Hooks/UseOutsideClick';
import axios from 'axios';

import {backendUrl} from '../../utils/Constants';
import {SideBar,Tab} from '../../Assets/SideBarStyles';

const RightSideBar =styled(SideBar)`
right:0;
transform:${props => props.show? 'translateX(0px)' : 'translateX(240px)'};
`

const Text = styled.h3`
  margin-left:43%;
  color:white;
`
const Button = styled.button`
  width:160px;
  text-align:center;
  margin-left:25%;
  margin-bottom:50px;
  margin-top:50px;
  padding:8px 32px;
  border-radius:8px;
  display:block;
  outline:none;
  border:none;
  color:#3f51b5;
  background-color:#5CDB95;
  opacity:0.8;
  cursor:pointer;
  box-shadow:0 5px 20px rgba(0,0,0,0.25);
  &:hover{
    opacity:1;
    transform:scale(1.03);
  }
`
const RightTab = styled(Tab)`
right:200px;
&:hover{
  right:205px;
}
`


const Filter = (props)=>{
  const node = useRef(null);
  const {show,setShow} = useOutsideClick(node)



  const handleClick=()=>{
    axios.get(`${backendUrl}spot/filter`,{withCredentials: true})
    .then(data=>props.setMapData(data.data))
    .catch(e=>console.error(`ERROR ->` + e))
  }
  const handleReset=()=>{
    axios.get(`${backendUrl}spot/all`,{withCredentials: true})
    .then(data=>props.setMapData(data.data))
    .catch(e=>console.error(`ERROR ->` + e))
  }


  return(

    <RightSideBar show={show}>
      <RightTab>
        <SearchIcon ref={node} style={{fontSize:'60',color:'white',cursor:'pointer'}} onClick={()=>setShow(!show)}/>
      </RightTab>
      <Text>Filter by:</Text>
      <Button onClick={()=>handleReset()}>Reset Filters</Button>
      <Button onClick={()=>handleClick()}>Personal Spots</Button>
    </RightSideBar>
  )
}


export default Filter
