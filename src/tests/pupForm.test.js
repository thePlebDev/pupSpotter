import React from 'react';
import PupForm from '../Components/PupForm';
import { shallow } from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { renderHook,act } from '@testing-library/react-hooks';
import useCounter from '../Hooks/useTesting';


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
  it('testing the custom useForm hook',()=>{
    const {result} = renderHook(()=>useCounter())
    act(()=>{
      result.current.increment()
    })

    expect(result.current.count).toBe(3)
  })
})
