import React from 'react';
import Notification500 from '../../Components/Notification/notification500';
import {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('testing the 500 notification',()=>{

  let component,
  status="500",
  words="Error, try again!"
  beforeEach(()=>{
    component = shallow(<Notification500 status={status} words={words}/>)
  })
  afterEach(()=>{
    component.unmount()
  })

  it('should render normally',()=>{
    const wrapper = component.find('[data-testId="500"]')
    expect(wrapper.length).toBe(1)
  })
  it('should render with the proper words',()=>{
    const wrapper = component.find('[data-testId="words"]')
    expect(wrapper.text()).toEqual(words)
  })
})
