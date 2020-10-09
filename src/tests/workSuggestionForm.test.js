import React from 'react';

import WorkSuggestionForm from '../Components/WorkSuggestionForm'

import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('testing the WorkSuggestionForm Component',()=>{
  it('should render properly',()=>{
    const wrapper = shallow(<WorkSuggestionForm/>)
    expect(wrapper.find('[data-testid="form"]').length).toBe(1)
    expect(wrapper.find('[data-testid="submit"]').length).toBe(1)
  })
})
