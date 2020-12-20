import React from 'react';
import ReactDOM from 'react-dom';
import { provider } from 'react-redux';
import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';
import Results from './components/results';
import Details from './components/details';

const Root = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Results} />
      <Route path='/details/:itemId' component={Details} />
      <Redirect from='/' to='/results'></Redirect>
    </Switch> 
  </BrowserRouter>
);

ReactDOM.render(Root,document.getElementById('root'));