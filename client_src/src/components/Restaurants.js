import React, { Component } from 'react';
import axios from 'axios';
import RestaurantItem from './RestaurantItem';

class Restaurants extends Component{
  constructor(props){
    super(props);
    this.state = {
      restaurants: []
    }
  }

  componentWillMount(){
    this.getRestaurants();
  }

  getRestaurants(){
    axios.get('http://localhost:3000/api/restaurants')
      .then((response) => {
        this.setState({restaurants: response.data}, () =>
        {
          // console.log(this.state);
        } 
      );
      })
      .catch(err => console.log(err));
  }

  
  render(){
    const restaurantItems = this.state.restaurants.map((restaurant, i) => {
      return(
        <RestaurantItem key={restaurant.id} item={restaurant} />
      )
    })
    return(
      <div>
        <h1>Restaurants</h1>
        <ul className="collection">
          {restaurantItems}
        </ul>  
      </div>  
    )
  }
}

export default Restaurants;