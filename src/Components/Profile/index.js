import React from 'react';
import styled from 'styled-components'

import ProfileCard from '../ProfileCard'

const Container = styled.div`
  display:grid;
  width:90%;
  margin-left:150px;
  margin-bottom:100px;
  align-items:center;
  grid-template-columns:repeat(auto-fit,minmax(400px,1fr));
  @media only screen and (max-width:600px){
    margin-left:50px;
  }

`



const Profile = (props)=>{
  const arrays = [1,2,3]

  return(
    <Container >
      {
        arrays.map((item,index)=>{
          return <ProfileCard key={index}/>
        })
      }
    </Container>
  )
}

export default Profile
