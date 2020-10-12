import React from 'react';
import WorkDoing from '../Components/WorkDoing';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({
  adapter: new EnzymeAdapter()
})


describe('testing the workDoing component',()=>{
  it('should render normally',()=>{
    const wrapper = shallow(<WorkDoing />)
    expect(wrapper.find('[data-testid="container"]').length).toBe(1)
    expect(wrapper.find('[data-testid="items"]').length).toBe(3)
  })
})
