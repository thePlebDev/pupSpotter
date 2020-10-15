import React from 'react';
import styled from 'styled-components';

import ForgotPasswordForm from '../ForgotPasswordForm'



const ForgotPassword =({show})=>{


  return(
    <div >
      {
        true
         ?
        <ForgotPasswordForm/>
          :
        <div></div>
      }
    </div>
  )
}

export default ForgotPassword
