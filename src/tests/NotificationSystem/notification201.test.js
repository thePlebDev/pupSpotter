import React from 'react';
import {shallow} from 'enzyme'
import Notification201 from '../../Components/Notification/notification201'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})



describe('tesitng the 201 notification system',()=>{
  let component,
  status = 201,
  words= "Please login first"
  beforeEach(()=>{
    component = shallow(<Notification201 status={status} words={words} />)
  })
  afterEach(()=>{
    component.unmount()
  })
  it('should render normally',()=>{
    const wrapper = component.find('[data-testId="201"]')
    expect(wrapper.length).toEqual(1)
  })
  it('should contain the words that are entered',()=>{
    const wrapper = component.find('[data-testId="words"]')
    expect(wrapper.text()).toEqual(words)
  })
})
