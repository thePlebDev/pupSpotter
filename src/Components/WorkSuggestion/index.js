import React,{ useState,useRef } from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import WorkSuggestionForm from '../WorkSuggestionForm';
import WorkListItem from '../WorkListItem';
import {ContainerList,Title,Arrow,TitleContainer} from '../../Assets/WorkStylings';
import useWorkAccordian from '../../Hooks/UseWorkAccordian';


const data =[
  {
  words:'hurry up and add leader boards, that would make everything so much better'
},
{
words:'suggestionTwo'
},
{
words:'suggestionThree'
}
]
//STAYS
const Display = styled.div`
  transition: max-height 0.2s ease-out;
  max-height:${props=>props.clicked ? props.height + "px": '0'};

  overflow:hidden;
`


const WorkSuggestion =()=>{
  const node = useRef(null)

  const {show,scrollHeight,handleClick} = useWorkAccordian(node)


  return(
    <ContainerList data-testid="container">
      <TitleContainer onClick={()=>{handleClick() }}>
        <Title>ADD</Title>
        <Arrow show={show}>
          <ArrowUpwardIcon />
        </Arrow>
      </TitleContainer>
        <Display clicked={show} ref={node} height={scrollHeight} style={{width:'95%'}}>
            {
              data.map((item,index)=>{
                return<WorkListItem key={index} data-testid="items" items={item.words}/>
              })
            }
            <WorkSuggestionForm/>

        </Display>
    </ContainerList>
  )
}

export default WorkSuggestion
