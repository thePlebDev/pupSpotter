import React from 'react';
import {Link} from 'react-router-dom'
//THIS SCREAMS REFACTOR BUT FIRST LETS JUST GET THE THING WORKING

const Success =()=>{
  return(
    <div style={{position:'absolute',fontSize:'1.5em',top:'-23px',left:'10%',color:'green'}}>
        User created.
        <Link to="/login" style={{padding:'2px 16px',border:'1px solid black', borderRadius:'4px',textAlign:'center'}}> Login </Link>

        </div>
  )
}
const Fail =()=>{
  return(
    <div style={{position:'absolute',fontSize:'1.5em',top:'-23px',left:'10%',color:'red'}}>Username already exists</div>
  )
}



export {Success,Fail}
