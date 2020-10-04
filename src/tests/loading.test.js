import React from 'react'
import Loader from '../Components/Loading';

import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({
  adapter: new EnzymeAdapter()
})


describe('testing that the loader loads',()=>{
  it('should render properly',()=>{
    const wrapper = shallow(<Loader/>)
    expect(wrapper.find('[data-testid="loading"]').length).toBe(1)
  })
})
