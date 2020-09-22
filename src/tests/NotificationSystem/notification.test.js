import React from 'react';
import Notification from '../../Components/Notification';
import {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('testing the Notification',()=>{
  it('should render correctly',()=>{
    const component = shallow(<Notification/>)
    const wrapper = component.find('#notification500')
    expect(wrapper.length).toBe(1)
  })
  it('should render the 200 status',()=>{
    const component = shallow(<Notification status={200} words={'cow in the house'}/>)
    const wrapper = component.find('[data-testid="notification200"]')
    expect(wrapper.length).toBe(1)
  })
  it('should render the 201 status',()=>{
    const component = shallow(<Notification status={201} words={'it do be like that sometimes'}/>)
    const wrapper = component.find('[data-testid="notification201"]')
    expect(wrapper.length).toBe(1)
  })
})
