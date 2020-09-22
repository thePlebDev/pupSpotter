import React from 'react';
import Notification200 from '../../Components/Notification/notification200'
import {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('testing the Notificaiton200 from the staus',()=>{
  let component,
  status = "200",
  words = "sucess"
  beforeEach(()=>{
    component = shallow(<Notification200 status={status} words={words} />)
  })
  afterEach(()=>{
    component.unmount()
  })
  it('should render normally',()=>{
    const wrapper = component.find('[data-testid="200"]')
    expect(wrapper.length).toBe(1)
  })
  it('should render with the proper staus',()=>{
    const wrapper = component.find('[data-testid="status"]')
    expect(wrapper.text()).toEqual(status)
  })
  it('should render with the proper words',()=>{
    const wrapper = component.find('[data-testid="words"]')
    expect(wrapper.text()).toEqual(words)
  })
})
