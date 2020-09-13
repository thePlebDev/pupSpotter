import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const H1 = styled.h1`
  font-size:60px;
  color:#3f51b5;
  opacity:0.8;

`
const Text = styled.div`
  font-size:160px;
  color:white;
  font-weight:1000;
  letter-spacing:20px;

  background: url("https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80") center no-repeat;
`



const NotFound = ()=>{

  return(
    <div style={{width:'100%'}}>
      <div style={{width:'60%',margin:'0 auto',textAlign:'center'}}>
        <H1> Page not found </H1>
        <Text>404</Text>
        <Link to='/'>
          <H1 style={{cursor:'pointer' }}>Home</H1>
        </Link>

      </div>
    </div>
  )
}

export default NotFound
