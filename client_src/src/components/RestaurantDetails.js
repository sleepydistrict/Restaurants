import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RestaurantDetails extends Component{

  constructor(props){
    super(props);
    this.state = {
      details: ''
    }
  }

  componentWillMount(){
    this.getRestaurant();
  }

  getRestaurant(){
    let restaurantId = this.props.match.params.id
  axios.get(`http://localhost:3000/api/restaurants/${restaurantId}`)
  .then((response) => {
    this.setState({details: response.data}, () =>
    {
      console.log(this.state);
    } 
  );
  })
  .catch(err => console.log(err));
}

onDelete(){
  let restaurantId = this.state.details.id;
  axios.delete(`http://localhost:3000/api/restaurants/${restaurantId}`)
    .then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
}

  render(){
    return (
      <div>
        <br />
        <Link className="btn grey" to ="/">Back</Link>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item">Name: {this.state.details.name}</li>
          <li className="collection-item">Address: {this.state.details.address}</li>
          <li className="collection-item">Hours: {this.state.details.hours}</li>
        </ul>
        <Link className="btn" to={`/restaurants/edit/${this.state.details.id}`}>Edit</Link>
     
        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      </div>  
    )
  }
}

export default RestaurantDetails;