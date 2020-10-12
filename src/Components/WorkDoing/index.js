import React,{useRef} from 'react';
import styled from 'styled-components';
import {ContainerList,Title,Arrow,TitleContainer} from '../../Assets/WorkStylings';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import WorkListItem from '../WorkListItem'

import useWorkAccordian from '../../Hooks/UseWorkAccordian';

const data =[
  {
  words:'google authentication'
},
{
words:'leader boards'
},
{
words:'native mobile app'
}
]
const Display = styled.div`
  transition: max-height 0.2s ease-out;
  max-height:${props=>props.clicked ? props.height + "px": '0'};

  overflow:hidden;
`

const WorkDoing = ()=>{
  const node = useRef(null)

  const {show,scrollHeight,handleClick} = useWorkAccordian(node)
  return(
    <ContainerList data-testid="container" style={{width:'301px'}}>
        <TitleContainer onClick={()=>{handleClick() }}>
          <Title>Doing</Title>
          <Arrow show={show}>
            <ArrowUpwardIcon />
          </Arrow>
        </TitleContainer>
        <Display clicked={show} ref={node} height={scrollHeight} >
            {
              data.map((item,index)=>{
                return<WorkListItem key={index} data-testid="items" items={item.words}/>
              })
            }
        </Display>
    </ContainerList>
  )
}

export default WorkDoing
