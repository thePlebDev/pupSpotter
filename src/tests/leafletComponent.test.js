import React from 'react';
import LeafletComponent from '../Components/LeafletComponent';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('tesing the LeafletComponent',()=>{
  it('it should render properly',()=>{
    const wrapper = shallow(<LeafletComponent />)
    const title = wrapper.find('[data-testid="title"]')
    const heart = wrapper.find('[data-testid="heart"]')
    const content = wrapper.find('[data-testid="content"]')

    expect(title.length).toBe(1)
    expect(heart.length).toBe(1)
    expect(content.length).toBe(1)
  })

  it('should render the proper text when given props',()=>{
    const titleContent ='title'
    const contentContent = 'it do be like that sometimes'
    const wrapper = shallow(<LeafletComponent name={titleContent} description={contentContent}/>)

    const title = wrapper.find('[data-testid="title"]')
    const content = wrapper.find('[data-testid="content"]')

    expect(title.text()).toBe(titleContent)
    expect(content.text()).toBe(contentContent)
  })
})
