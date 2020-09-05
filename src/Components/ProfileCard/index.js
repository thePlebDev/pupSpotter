import React,{useRef,useState} from 'react';
import styled from 'styled-components'

import { About,BackCard,FrontCard,CardContainer,Image,Name,AboutBack} from '../../Assets/ProfileCardStylings';
import useOutsideClick from '../../Hooks/UseOutsideClick';
import useProfileCardHook from '../../Hooks/useProfileCardHook';


const Card = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  transform-style: preserve-3d;
  transition:all 0.5s ease;
  transform:${props=>props.show || props.show2?'rotateY(180deg)':'rotateY(0deg)'};

`
const Location = styled.div`
align-self:flex-end;
cursor:pointer;
font-size:1.3em;
width:80px;
text-align:center;
margin-left:50px;
margin-bottom:11.5px;
padding:5px;
`


const ProfileCard = ({name,description,location})=>{

  const node= useRef();
  const node2 = useRef();
  const [text,setText] = useState(false);
  const {show} = useOutsideClick(node);
  const {display} = useProfileCardHook(node2)

  const handleClick =(e)=>{
    setText(true)

  }
  const handleClickAbout =(e)=>{
    setText(false)
  }



  return(
    <CardContainer>
      <Card show={show} show2={display}>
        <FrontCard>
          <div>
            <Image  src='https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
            alt={'cute doggy'}  />
            <Name>{name}</Name>
          </div>
          <About ref={node} onClick={(e)=>handleClickAbout(e)} >About</About>
          <Location ref={node2}onClick={(e)=>handleClick(e)}>Location</Location>

        </FrontCard>
        <BackCard >
            {
                text
                  ?
                <AboutBack>Latitude: {location.lat} Longitude: {location.lon}</AboutBack>
                  :
                <AboutBack>
                  {
                    description
                        ?
                    <div>{description}</div>
                        :
                    <div>not a good boy but the best!</div>
                  }

                </AboutBack>
            }
          </BackCard>
      </Card>
    </ CardContainer>
  )
}

export default ProfileCard
