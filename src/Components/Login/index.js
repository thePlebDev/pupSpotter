import React,{useState} from 'react';

import useLogin from '../../Hooks/useLogin';
import {loginValidation} from '../../utils/Validation';
import axios from 'axios'
import {backendUrl} from '../../utils/Constants'

const Login =()=>{
  const handleClick=()=>{
    axios(`${backendUrl}thing`)
    .then(data=>{console.log(data)})
    .catch(err=>{console.error(err)})
  }

  const {state,handleChange,handleSubmit} = useLogin(loginValidation)

  return(
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>
          Username
          <input type="text" name="username" value={state.username} onChange={(e)=>handleChange(e)}/>
        </label>

        <label>
          Password
          <input type='password' name="password" value={state.password}  onChange={(e)=>handleChange(e)}/>
        </label>

        <button type="submit">Submit</button>
      </form>
      <button onClick={(e)=>handleClick()} type='button'>Logged IN ?</button>
    </div>
  )
}

export default Login
