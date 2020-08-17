import React,{useState} from 'react';

import useRegister from '../../Hooks/UseRegister'
import {registerValidation} from '../../utils/Validation';
const Register = () =>{
  const {name,bio,email,password,handleChange,handleSubmit} = useRegister(registerValidation)

  return(
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label>
            Name
            <input type='text' value={name} onChange={(e)=>handleChange(e)} name='name' />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type='email' value={email} onChange={(e)=>handleChange(e)} name='email' />
          </label>
        </div>
        <div>
          <label>
            Bio
            <input type='text' value={bio} onChange={(e)=>handleChange(e)} name='bio' />
          </label>
        </div>
        <div>
          <label>
          Password
            <input type='password' value={password} onChange={(e)=>handleChange(e)} name='password' />
          </label>
        </div>
        <button type="Submit">Register</button>

      </form>
    </div>
  )
}

export default Register;
