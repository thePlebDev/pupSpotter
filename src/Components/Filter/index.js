import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import useOutsideClick from '../../Hooks/UseOutsideClick';
import axios from 'axios';
// import axiosGet from '../../Utils/axiosGet.js'
import Button from '../Button'

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

const RightTab = styled(Tab)`
right:200px;
border-radius:10%;
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

    <RightSideBar show={show} id="filter">
      <RightTab onClick={()=>setShow(!show)}>
        <SearchIcon ref={node} style={{fontSize:'60',color:'white',cursor:'pointer'}}/>
      </RightTab>
      <Text>Filters:</Text>
      <Button handleClick={handleReset} words='Reset Filters'/>
      <Button handleClick={handleClick} words='Best Boy'/>
      <Button handleClick={handleClick} words='Worst Boy'/>
    </RightSideBar>
  )
}


export default Filter
