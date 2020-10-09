import React from 'react'
import Work from '../Components/Work'



import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('testing the work component',()=>{
  it('should render properly',()=>{
    const wrapper = shallow(<Work/>)
    expect(wrapper.find('[data-testid="workContainer"]').length).toBe(1)
    expect(wrapper.find('[data-testid="workSuggestion"]').length).toBe(1)
    expect(wrapper.find('[data-testid="workList"]').length).toBe(4)
  })
})
