import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddRestaurant extends Component{
  AddRestaurant(newRestaurant){
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/restaurants',
      data: newRestaurant
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newRestaurant = {
      name: this.refs.name.value,
      address: this.refs.address.value,
      hours: this.refs.hours.value
    }
    this.AddRestaurant(newRestaurant);
    e.preventDefault();
  }
  
  render(){ 
    return (
     <div>
       <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Add Restaurant</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
        <div className="input-field">
          <input type="text" name="name" ref="name" />
          <label htmlFor="name">Name:</label>         
        </div> 
        <div className="input-field">
          <input type="text" name="address" ref="address" />
          <label htmlFor="address">Address:</label>         
        </div> 
        <div className="input-field">
          <input type="text" name="hours" ref="hours" />
          <label htmlFor="hours">Hours:</label>         
        </div>
        <input type="submit" value="Save" className="btn" /> 
       </form>
     </div>  
    )
  }
}

export default AddRestaurant;