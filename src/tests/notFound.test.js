import React from 'react';
import NotFound from '../Components/NotFound';

import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({
  adapter: new EnzymeAdapter()
})


describe('testing the NotFound Component',()=>{
  it('should render properly',()=>{
    const wrapper = shallow(<NotFound />)
    expect(wrapper.find('[data-testid="notFound"]').length).toBe(1)
    expect(wrapper.find('[data-testid="notFoundText"]').text()).toBe('404')
    expect(wrapper.find('[data-testid="notFoundHome"]').text()).toBe('Home')
  })
})
