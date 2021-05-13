import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/scss/global.scss';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import NotPage from '../pages/NotPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route 
        exact
        path="/"
        component={Home}
      />
      <Route 
        exact
        path="/:id/pokemon"
        component={Pokemon}
      />
      <Route 
        exact
        component={NotPage}
      />
    </Switch>
  </BrowserRouter>
)

export default App