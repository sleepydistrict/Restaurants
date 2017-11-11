import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Restaurants from './Restaurants';
import About from './About';
import Details from './Details';
import AddRestaurant from './AddRestaurant';
import Edit from './Edit';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Restaurants} />
      <Route exact path='/about' component={About} />
      <Route exact path='/restaurants/add' component={AddRestaurant} />
      <Route exact path='/restaurants/edit/:id' component={Edit} />
      <Route exact path='/restaurants/:id' component={Details} />
    </Switch>  
  </main>  
)

export default Main;
