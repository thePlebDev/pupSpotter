import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {axiosPost} from '../../utils/AxiosFuncs';
import {backendUrl} from '../../utils/Constants';
import useLeaftletHook from '../../Hooks/LeafletComponent';

const Title = styled.h2`
border-bottom:2px solid #3f51b5;
width:100%;
text-align:center;
`
const Content = styled.div`
  font-size:1.2em;
`
const Heart = styled.div`
  color:${props=>props.clicked? 'red': '#c3c3c3'};
`

const LeafletPopup = ({name,description,hook,id})=>{
  const {handleClick,clicked} = hook(id)

  return(
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <Title data-testid="title">{name}</Title>
      <Content data-testid="content">{description}</Content>
      <Heart data-testid="heart" clicked={clicked} onClick={()=>handleClick(true)}>
        <FavoriteIcon style={{cursor:'pointer',borderRadius:'50%',position:'absolute',left:'10px',top:'5px'}}/>
      </Heart>
    </div>
  )
}

export default LeafletPopup
