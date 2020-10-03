import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import useOutsideClick from '../../Hooks/UseOutsideClick';
import axios from 'axios';
// import axiosGet from '../../Utils/axiosGet.js'
import Button from '../Button'

import {backendUrl} from '../../utils/Constants';
import {SideBar,Tab} from '../../Assets/SideBarStyles';
import filterFuncs from '../../utils/FilterFuncs';

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

  return(

    <RightSideBar show={show} data-testid="filter">
      <RightTab onClick={()=>setShow(!show)} data-testid="onClick">
        <SearchIcon ref={node} style={{fontSize:'60',color:'white',cursor:'pointer'}}/>
      </RightTab>
      <Text>Filters:</Text>
      <Button data-testid="button" handleClick={filterFuncs.filter} url={'spot/all'} setData={props.setMapData} words='Reset Filters'/>
      <Button data-testid="button" handleClick={filterFuncs.filter} url={'spot/highest'} sSToken={'highest'} setData={props.setMapData} words='Best Boy'/>
      <Button data-testid="button" handleClick={filterFuncs.filter} url={'spot/lowest'} sSToken={'lowest'} setData={props.setMapData} words='Worst Boy'/>
    </RightSideBar>
  )
}


export default Filter
