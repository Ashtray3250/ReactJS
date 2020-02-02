import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <MuiThemeProvider>
       <Router/>
    </MuiThemeProvider>
    </BrowserRouter>,
   document.getElementById('root'),
);