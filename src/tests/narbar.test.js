import React from 'react';
import NavBar from '../Components/NavBar';

import { shallow } from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({
  adapter: new EnzymeAdapter()
})


describe('testing the NavBar component ',()=>{
  it('should render properly',()=>{
      const wrapper = shallow(<NavBar />)
      expect(wrapper.find('[data-testid="tab"]').length).toBe(4)
  })
})
