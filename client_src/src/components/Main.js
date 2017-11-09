import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Restaraunts from './Restaurants';
import Cuisine from './Cuisine';
import RestaurantDetails from './RestaurantDetails'
import AddRestaurant from './AddRestaurant'
import EditRestaurant from './EditRestaurant'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Restaraunts} />
      <Route exact path='/cuisine' component={Cuisine} />
      <Route exact path='/restaurants/add' component={AddRestaurant} />
      <Route exact path='/restaurants/edit/:id' component={EditRestaurant} />
      <Route exact path='/restaurants/:id' component={RestaurantDetails} />
    </Switch>  
  </main>
)

export default Main;