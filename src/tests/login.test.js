import React from 'react';
import Login from '../Components/Login'

import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({
  adapter: new EnzymeAdapter()
})

const simulateChangeOnInput = (wrapper,inputSelector,newValue,inputName)=>{
  const input = wrapper.find(inputSelector)
  input.simulate('change',{
    target:{
    name:inputName,
    value:newValue
  }
})
  return wrapper.find(inputSelector)
}

describe('testing the login component',()=>{
  it('should render correctly',()=>{
    const wrapper = shallow(<Login />)
    expect(wrapper.find('[data-testid="loginForm"]').length).toBe(2)
  })
  it('should test that the input is changing',()=>{
    const wrapper = shallow(<Login />)

    const updatedNameInput = simulateChangeOnInput(wrapper,'#username-input','testing','username')
    const updatedValueInput = simulateChangeOnInput(wrapper,'#password-input','12345','password')

    expect(updatedNameInput.props().value).toEqual('testing')
    expect(updatedValueInput.props().value).toEqual("12345")
  })
})
