import React from 'react';
import styled from 'styled-components';

import WorkSuggestion from '../WorkSuggestion';


const WorkContainer = styled.div`
   display:flex;
   flex-direction:columns;
   justify-content:center;
   align-items:center;
`



const Work = ()=>{

  return(
    <WorkContainer data-testid="workContainer">

        <div data-testid="workSuggestion" style={{width:'50%'}}>
          <WorkSuggestion/>
        </div>

        <div data-testid="workList">

        </div>

        <div data-testid="workList">

        </div>

        <div data-testid="workList">

        </div>

        <div data-testid="workList">

        </div>

    </WorkContainer>
  )
}

export default Work
