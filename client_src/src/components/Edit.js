import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Edit extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      address: '',
      hours: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getDetails();
  }

  getDetails(){
    let restaurantId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/restaurants/${restaurantId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        address: response.data.address,
        hours: response.data.hours,
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
  }

  Edit(newRestaurant){
    axios.request({
      method: 'put',
      url: `http://localhost:3000/api/restaurants/${this.state.id}`,
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
    this.Edit(newRestaurant);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  render(){ 
    return (
     <div>
       <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Edit Restaurant</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
        <div className="input-field">
          <input type="text" name="name" ref="name" value={this.state.name} 
          onChange={this.handleInputChange.bind(this)} />
          <label htmlFor="name">Name:</label>         
        </div> 
        <div className="input-field">
          <input type="text" name="address" ref="address" value={this.state.address}
          onChange={this.handleInputChange.bind(this)} />
          <label htmlFor="address">Address:</label>         
        </div> 
        <div className="input-field">
          <input type="text" name="hours" ref="hours" value={this.state.hours}
          onChange={this.handleInputChange.bind(this)} />
          <label htmlFor="hours">Hours:</label>         
        </div>
        <input type="submit" value="Save" className="btn" /> 
       </form>
     </div>  
    )
  }
}

export default Edit;