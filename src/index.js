import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider,createMuiTheme} from '@material-ui/core/styles';


import App from './Components/App';
import './globalResets.scss'

const theme = createMuiTheme({
  mainColor:'red'
})

ReactDom.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,document.getElementById('root'));
