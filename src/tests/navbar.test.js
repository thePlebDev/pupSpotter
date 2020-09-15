import React from 'react';
import NavBar from '../Components/NavBar';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router} from 'react-router-dom';


Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('testing component',()=>{
  it('should render with no errors',()=>{
    const component = shallow(<NavBar/>)
    const wrapper = component.find('.tab');
    expect(wrapper.length).toBe(4)
  })
  it('creating the snapshot',()=>{
    const NavBarComponent = renderer.create(<Router><NavBar /></Router>).toJSON();
    expect(NavBarComponent).toMatchSnapshot();
  })
})
