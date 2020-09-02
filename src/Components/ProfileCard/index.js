import React,{useRef} from 'react';
import styled from 'styled-components'

import { About,Location,BackCard,FrontCard,Button,AboutButton,CardContainer,Image,Name,AboutBack} from '../../Assets/ProfileCardStylings';
import useOutsideClick from '../../Hooks/UseOutsideClick';


const Card = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  transform-style: preserve-3d;
  transition:all 0.5s ease;
  transform:${props=>props.show?'rotateY(180deg)':'rotateY(0deg)'};

`

const ProfileCard = ()=>{
  const node= useRef();
  const {show} = useOutsideClick(node)
  return(
    <CardContainer>
      <Card show={show}>
        <FrontCard>
          <div>
            <Image  src='https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
            alt={'cute doggy'}  />
            <Name>Dave</Name>
          </div>
          <About ref={node} >About</About>
          <Location >Location</Location>
        </FrontCard>
        <BackCard >
          <AboutBack>
            Dave is a very good boy! I saw him jumping in a puddle.
          </AboutBack>
        </BackCard>
      </Card>
    </ CardContainer>
  )
}

export default ProfileCard
