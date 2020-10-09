import React from 'react';
import styled from 'styled-components';

import WorkSuggestionForm from '../WorkSuggestionForm'
import WorkListItem from '../WorkListItem'

const ContainerList = styled.div`
  display:flex;
  flex-direction:column;
  border: 1px solid red;
  justify-content:center;
  align-items:center;
`


const data =[
  {
  words:'suggestionOne'
},
{
words:'suggestionTwo'
},
{
words:'suggestionThree'
}
]

const WorkSuggestion =()=>{

  return(
    <ContainerList data-testid="container">
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
