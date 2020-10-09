import React from 'react';
import WorkListItem from '../Components/WorkListItem';

import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('testing the WorkListItem Component',()=>{
  it('should render normally',()=>{
    const wrapper = shallow(<WorkListItem items='this' />)
    expect(wrapper.find('[data-testid="container"]').length).toBe(1)
    expect(wrapper.find('[data-testid="text"]').text()).toBe('this')
  })
})
