import React from 'react';
import Button from '../Components/Button'
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('testing the button',()=>{

  it('should equal true',()=>{
    const wrapper = shallow(<Button />)
    const button = wrapper.find('[data-testid="button"]')
    expect(button.length).toBe(1)
  })
  it('should test that the function is called ',()=>{
    const words='it de be like that sometimes'
    const url="URL string"
    const sSToken=12332123
    const mockedFunction = jest.fn()
    const wrapper = shallow(<Button handleClick={mockedFunction} words={words} url={url} setData={mockedFunction} sSToken={sSToken}/>)
    const button = wrapper.find('[data-testid="button"]')
    button.simulate('click')
    //testing that clicking the button will handle a function
    expect(mockedFunction.mock.calls.length).toBe(1)

    //testing that the mocked function is called with the proper arguments
    expect(mockedFunction.mock.calls[0][0]).toBe(url)
    expect(mockedFunction.mock.calls[0][1]).toBe(mockedFunction)
    expect(mockedFunction.mock.calls[0][2]).toBe(sSToken)

    // test that the words are properly rendered
    expect(button.text()).toBe(words)
  });
});
