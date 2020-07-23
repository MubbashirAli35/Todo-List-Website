// imported libraries

import React from 'react';
import 'fontsource-roboto';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

// imported files

import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/SignUp' component={SignUp} />
        <Route path='/SignIn' component={SignIn} />
        <Redirect to='/SignIn' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
