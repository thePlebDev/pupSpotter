import React from 'react';
import styled from 'styled-components';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import WorkSuggestionForm from '../WorkSuggestionForm'
import WorkListItem from '../WorkListItem'

const ContainerList = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#3f51b5;
  opacity:0.8;
  border-radius:4px;
`


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
const Title = styled.div`
  font-size:1.3em;
  font-weight:600;
  color:white;
  letter-spacing:1px;
  padding-left:5px;
`


const WorkSuggestion =()=>{

  return(
    <ContainerList data-testid="container">
      <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
        <Title>ADD</Title>
        <PlayCircleFilledIcon style={{color:'white','padding-right':'5px','padding-top':'5px',transformOrigin:'center',transform:'rotate(90deg)'}}/>
      </div>
        {
          data.map((item,index)=>{
            return<WorkListItem key={index} data-testid="items" items={item.words}/>
          })
        }
        <WorkSuggestionForm/>
    </ContainerList>
  )
}

export default WorkSuggestion
