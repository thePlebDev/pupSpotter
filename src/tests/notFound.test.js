import React from 'react';
import NotFound from '../Components/NotFound';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({
  adapter: new EnzymeAdapter()
})


describe('testing the not found',()=>{
  it('creating the snapshot',()=>{
    const NotFoundComponent = renderer.create(<Router><NotFound/></Router>).toJSON()
    expect(NotFoundComponent).toMatchSnapshot();
  })
  it('should render correctly',()=>{
  const component = shallow(<NotFound/>)
  const wrapper = component.find('[data-testid="notFound"]')
  expect(wrapper.length).toBe(1)
  })
})
