import React,{useState} from 'react';



const TestForm = ()=>{
  const [state,setState] = useState({test:''})
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(state)
  }
  const handleChange =(e)=>{
    let {value,name} = e.target
    setState({...state,[name]:value})
    console.log(state)
  }

  return(
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label>
          <input id="name-input" value={state.test} name='test' onChange={(e)=>handleChange(e)}/>
        </label>
      </form>

    </div>
  )
}

export default TestForm
