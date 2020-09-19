import React from 'react';
import Filter from '../Components/Filter';
import Button from '../Components/Button';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import axios from 'axios';
import axiosGet from '../utils/axiosGet'

jest.mock('axios');

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('testing the filter component',()=>{
  it('should test that it renders',()=>{
    const component = shallow(<Filter/>);
    const wrapper = component.find('#filter')
    expect(wrapper.length).toBe(1)
  })
  it('testing that the button gets clicked',()=>{
    const mockCallBack = jest.fn();
    const component = shallow(<Button handleClick={mockCallBack} />)
    component.find('#button').simulate('click')
    expect(mockCallBack.mock.calls.length).toBe(1)
  })
  it('fetches successfully data form an API', async()=>{
    const data ={
      data:[
        {one:'this is another thing'},
        {one:'it do be like that sometimes'},
        {one:'this could be the rest'}
      ]
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    const response = await axiosGet() //this uses the mocked get function instead of axios normal get function
    expect(response).toEqual(data.data)
  })
  // it('fetches erroneously data from an API',async ()=>{
  //   const errorMessage = 'Network Error'
  //   axios.get.mockImplementationOnce(()=>{
  //     Promise.reject(new Error(errorMessage)),
  //   })
  // })

})
