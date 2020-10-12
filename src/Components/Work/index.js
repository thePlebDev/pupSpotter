import React from 'react';
import styled from 'styled-components';

import WorkSuggestion from '../WorkSuggestion';
import WorkDoing from '../WorkDoing';


const WorkContainer = styled.div`
   display:grid;
   align-items:center;


   @media (min-width:1200px){
     grid-template-columns:repeat(3,1fr);
     grid-auto-rows: 300px;
   }
`

const WorkItems = styled.div`
  width:60%;
  margin:5px auto;
  align-self:start;
`
const Work = ()=>{

  return(
    <WorkContainer data-testid="workContainer">

        <WorkItems data-testid="workSuggestion"  >
          <WorkSuggestion/>
        </WorkItems>

        <WorkItems data-testid="workList" >
          <WorkDoing title={'Doing'}/>
        </WorkItems>

        <WorkItems data-testid="workList" >
          <WorkDoing title={'Testing'}/>
        </WorkItems>

        <WorkItems data-testid="workList" >
          <WorkDoing title={'Done'}/>
        </WorkItems>


    </WorkContainer>
  )
}

export default Work
