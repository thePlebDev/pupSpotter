import React from 'react';
import PupForm from '../Components/PupForm';
import TestForm from '../Components/TestForm';
import renderer from 'react-test-renderer';
import { fireEvent } from "@testing-library/react"
import { shallow,mount } from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})
const simulateChangeOnInput = (wrapper,inputSelector,newValue,inputName)=>{
  const input = wrapper.find(inputSelector)
  input.simulate('change',{
    target:{name:inputName,value:newValue}
  })
  return wrapper.find(inputSelector)
}

describe('testing the pupForm',()=>{
  // it('testing the snapshot',()=>{
  //   const NotFoundComponent = renderer.create(<Router><PupForm/></Router>).toJSON()
  //   expect(NotFoundComponent).toMatchSnapshot();
  // })
  it('testing to make sure it renders',()=>{
    const component = shallow(<PupForm/>)
    const wrapper = component.find('[data-testid="pupForm"]')
    expect(wrapper.length).toBe(4)
  })
  it('tesitng the inputs',()=>{
    const wrapper = shallow(<PupForm/>)

    const updatedNameInput = simulateChangeOnInput(wrapper,'#name-input','Dave','name')
    const updatedDescInput = simulateChangeOnInput(wrapper,'#description-input','bueno boy','description')

    expect(updatedNameInput.props().value).toEqual('Dave')
    expect(updatedDescInput.props().value).toEqual('bueno boy')
  })
  it('testing the addLocation button',()=>{
    const wrapper = shallow(<PupForm/>);
    let addLocationBtn = wrapper.find('#button')
    addLocationBtn.simulate('click',{target:{
      name:'location',
      value:'turkey'
    }})
    addLocationBtn = wrapper.find('#button')
    expect(addLocationBtn.props().value).toEqual('eat')
  })
})
