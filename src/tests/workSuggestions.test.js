import React from 'react';

import WorkSuggestion from '../Components/WorkSuggestion';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({
  adapter: new EnzymeAdapter()
})


describe('testing the work suggestion component',()=>{
  it('should render properly',()=>{
    const wrapper = shallow(<WorkSuggestion/>)
    expect(wrapper.find('[data-testid="container"]').length).toBe(1)
    expect(wrapper.find('[data-testid="items"]').length).toBe(3)
    expect(wrapper.find('[data-testid="items"]').first().text()).toBe('suggestionOne')
  })
})
