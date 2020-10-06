import React from 'react';
import LoginStatus from '../Components/LoginStatus'
import { shallow } from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({
  adapter: new EnzymeAdapter()
})


describe('testing the LoginStatus Component',()=>{
  it('should render with loggedIn set to true',()=>{
    const wrapper = shallow(<LoginStatus loggedIn={true} />)
    expect(wrapper.find('[data-testid="login"]').length).toBe(2)
    expect(wrapper.find('[data-testid="loginButton"]').length).toBe(1)
  })
  it('should render with loggedIn set to false',()=>{
    const wrapper = shallow(<LoginStatus loggedIn={false} />)
    expect(wrapper.find('[data-testid="login"]').length).toBe(1)
    expect(wrapper.find('[data-testid="logged out"]').length).toBe(1)
  })
})
