import React from 'react'


const WorkListItem =({items})=>{

  return(
    <div data-testid="container">
      <div data-testid="text">
        {items}
      </div>
    </div>
  )
}


export default WorkListItem
