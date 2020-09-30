import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {axiosPost} from '../../utils/AxiosFuncs';
import {backendUrl} from '../../utils/Constants';

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

const LeafletPopup = ({name,description,id})=>{
  const [clicked,setClicked] = useState(false);
  console.log(id)

  const handleClick =()=>{
    setClicked(true)

  }
  useEffect(()=>{
    if(clicked){
      axiosPost(`${backendUrl}spot/vote`,{id})
      .then(data=>console.log(data))
      .catch(error=>console.log(error))
    }

  },[clicked])

  return(
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <Title>{name}</Title>
      <Content>{description}</Content>
      <Heart clicked={clicked} onClick={()=>handleClick(true)}>
        <FavoriteIcon style={{cursor:'pointer',borderRadius:'50%',position:'absolute',left:'10px',top:'5px'}}/>
      </Heart>
    </div>
  )
}

export default LeafletPopup
