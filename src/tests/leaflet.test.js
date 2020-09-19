import React from 'react';
import axios from 'axios';
import {axiosGet} from '../utils/AxiosFuncs'
import {backendUrl} from '../Utils/Constants'

import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
Enzyme.configure({
  adapter: new EnzymeAdapter()
})

jest.mock('axios');

describe('testing the leflet component',()=>{
  it('should mock the user is authenticated.',async ()=>{
    const data ={
      data:{
        message:'bueno',
        status:200
      }
    }
    axios.get.mockImplementationOnce(()=>Promise.resolve(data))
    const response = await axiosGet(`${backendUrl}isAuthenticated`)
    expect(response.status).toBe(200)
  })
  it('it should be the unAuthenticated response',async ()=>{
    const data ={
      data:{
        message:'User not Authenticated',
        status:400
      }
    }
    axios.get.mockImplementationOnce(()=>Promise.resolve(data))
    const response = await axiosGet(`${backendUrl}isAuthenticated`)
    expect(response.status).toBe(400)
  })
})

describe('mockin the axios get all request',()=>{
  it('should return a list of objects',async()=>{
    const data = {data:[
      {one:'this is number one'},
      {two:'this is number two'},
      {three:'this is number three'}
    ]}
    axios.get.mockImplementationOnce(()=>Promise.resolve(data))
    const response = await axiosGet('http://localhost:3001/spot/all')
    expect(response).toBe(data.data)
  })
})
