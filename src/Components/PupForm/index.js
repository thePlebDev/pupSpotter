import React,{useState} from 'react';

import useForm from '../../Hooks/useForm'

const PupForm =()=>{
const {handleClick,handleChange,handleSubmit,state,errors} = useForm()

  return(
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label>
          <div>Name</div>

          {errors.name ? <div>{errors.name}</div>:''}

          <input type="text" name='name' value={state.name} onChange={(e)=>{handleChange(e)}}/>
        </label>

        <label>
          <div>Date</div>
          <input type="date" name='date' value={state.date} onChange={(e)=>{handleChange(e)}} />
        </label>

        <label>
          <div>Image</div>
          {errors.image ? <div>{errors.image}</div>:''}
          <input type="file" name='image' value={state.image} onChange={(e)=>{handleChange(e)}} />
        </label>
        <div>
          {errors.loc ? <div>{errors.loc}</div>:''}
          <button type="button" value={state.loc} onClick={(e)=>{handleClick(e)}}>Add Location</button>
        </div>

        <div>
          <button type="Submit">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default PupForm
