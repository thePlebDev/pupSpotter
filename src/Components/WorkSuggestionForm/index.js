import React from 'react';


const WorkSuggestionForm =()=>{

  return(
    <div>
    <form data-testid="form">
        <label>
          <textarea>it do be like that sometimes</textarea>
        </label>
    </form>
    <button type="submit" data-testid="submit">Add</button>
    </div>
  )
}


export default WorkSuggestionForm
