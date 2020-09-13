import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import useOutsideClick from '../../Hooks/UseOutsideClick';
import axios from 'axios';

import {backendUrl} from '../../utils/Constants'

const SideBar = styled.div`
  position:absolute;
  right:0;
  background-color:#3f51b5;
  height:90vh;
  width:230px;
  opacity:0.8;
  transition:all 0.3s ease;
  transform:${props => props.show? 'translateX(0px)' : 'translateX(240px)'};
  z-index:999999;
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

    <SideBar show={show}>
      <div style={{padding:'5px',top:'5px',borderRadius:'30%',backgroundColor:'#3f51b5',position:'absolute',right:'200px',width:'100px'}}>
      <SearchIcon ref={node} style={{fontSize:'60',color:'white',cursor:'pointer'}} onClick={()=>setShow(!show)}/>
      </div>
      <Text>Filter by:</Text>
      <Button onClick={()=>handleReset()}>Reset Filters</Button>
      <Button onClick={()=>handleClick()}>Personal Spots</Button>
    </SideBar>
  )
}


export default Filter
