import React,{useState,useEffect} from 'react';
import styled from 'styled-components';



import ProfileCard from '../ProfileCard'
import Loading from '../Loading';
import NoDogs from '../NoDogs';
import useProfile from '../../Hooks/UseProfileApiCall';

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
  const [dogData,setDogData] = useState();
  const {status} = useProfile()


  useEffect(()=>{
    if(status.status === 200){
      setDogData(status.data)
    }

    else if(status.status===400){
      props.history.push('/login')
    }
  },[status,props.history])

  if(status.status === 204){
    return <NoDogs/>
  }

  return(
    <Container >
      {
        dogData
          ?
        dogData.map((item,index)=>{
          return <ProfileCard key={item._id} name={item.name} description={item.description} location={item.location}/>
        })
        :
        <Loading/>
      }

    </Container>
  )
}

export default Profile
