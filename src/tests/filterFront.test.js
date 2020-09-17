import React from 'react';
import Filter from '../Components/Filter';
import { shallow } from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { renderHook,act } from '@testing-library/react-hooks';



Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('testing the filter component',()=>{
  it('should test that it renders',()=>{
    const component = shallow(<Filter/>);
    const wrapper = component.find('#filter')
    expect(wrapper.length).toBe(1)
  })

})
