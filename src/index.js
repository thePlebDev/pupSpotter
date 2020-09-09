import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles'

import App from './Components/App';
import './globalResets.scss'


ReactDom.render(
  <Router>
    <ThemeProvider theme={''}>
      <App />
    </ThemeProvider>
  </Router>,document.getElementById('root'));
