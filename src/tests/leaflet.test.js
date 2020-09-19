import React from 'react';
import axios from 'axios';

import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
Enzyme.configure({
  adapter: new EnzymeAdapter()
})

jest.mock('axios');
