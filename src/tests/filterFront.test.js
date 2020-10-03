import React from 'react';
import Filter from '../Components/Filter';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('testing the filter component',()=>{
  it('should test the first snapshot',()=>{
    const tree = renderer.create(<Filter/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should render properly',()=>{
    const wrapper = shallow(<Filter/>)
    expect(wrapper.find('[data-testid="filter"]').length).toBe(1)
    expect(wrapper.find('[data-testid="button"]').length).toBe(3)
  })

})
