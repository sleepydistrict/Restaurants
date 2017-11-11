import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Restaurants from './Restaurants';
import About from './About';
import Details from './Details';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Restaurants} />
      <Route exact path='/about' component={About} />
      <Route exact path='/restaurants/:id' component={Details} />
    </Switch>  
  </main>  
)

export default Main;
