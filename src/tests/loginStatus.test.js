import React from 'react';
import LoginStatus from '../Components/LoginStatus';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})


//test the snapshot DONE
//make sure it renders DONE
//test the props true and false value. DONE
// simulate the event and make sure the color is right DONE
describe('testing the login status component',()=>{
  it('setting up the snapshot',()=>{
    const LoginStatusComponent = renderer.create(<Router><LoginStatus/></Router>).toJSON()
    expect(LoginStatusComponent).toMatchSnapshot()
  })
  it('should render',()=>{
    const component = shallow(<LoginStatus/>)
    const wrapper = component.find('[data-testid="login"]')
    expect(wrapper.length).toBe(1)
  })
  it('testing the props true',()=>{
    const props = {
      loggedIn:true
    }
    const component = shallow(<LoginStatus{...props}/>)
    const wrapper = component.find('[data-testid="login"]')
    expect(wrapper.length).toBe(3)
  })
  it('testing the props false',()=>{
    const props = {
      loggedIn:false
    }
    const component = shallow(<LoginStatus{...props}/>)
    const wrapper = component.find('[data-testid="login"]')
    expect(wrapper.length).toBe(1)
  })
})
