import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Restaurants from './Restaurants';
import About from './About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Restaurants} />
      <Route exact path='/' component={About} />
    </Switch>  
  </main>  
)

export default Main;
