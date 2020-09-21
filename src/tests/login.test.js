import React from 'react';
import Login from '../Components/Login';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
Enzyme.configure({
  adapter: new EnzymeAdapter()
})
const simulateChangeOnInput = (wrapper,inputSelector,newValue,inputName)=>{
  const input = wrapper.find(inputSelector)
  input.simulate('change',{
    target:{name:inputName,value:newValue}
  })
  return wrapper.find(inputSelector)
}

describe('testing the login from',()=>{
  it('should render two inputs',()=>{
    const component = shallow(<Login/>)
    const wrapper = component.find('[data-testid="loginForm"]')
    expect(wrapper.length).toBe(2)
  })
  it('make sure that there are changes to the input',()=>{
    const component = shallow(<Login/>)
    const updatedUsernameInput = simulateChangeOnInput(component,'#username','Dave','username')
    expect(updatedUsernameInput.props().value).toEqual('Dave');


  })
})
