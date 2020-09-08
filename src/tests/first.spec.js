import React from 'react';
import Register from '../Components/Register';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';


describe('testing',()=>{
  test('testing snapshot of SideBar',()=>{
    const tree = renderer
      .create(<Register></Register>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
