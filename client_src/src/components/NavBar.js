import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component{
  render(){
    return(
      <div>
        <nav className="green darken-1">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Restaurants</a>
            <a data-activates="main-menu" 
            className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>
            <ul className="right hide-on-small-only">
              <li><Link to="/"><i className="fa fa-users"></i>
               Restaurants</Link></li>
            </ul>
            <ul className="side-nav" id="main-menu">
            <li><Link to="/"><i className="fa fa-users"></i>
            Restaurants</Link></li>
            <li><Link to="/cuisine"><i className="fa fa-question-circle"></i>
               Cuisine</Link></li>
            <li><Link to="/restaurants/add"><i className="fa fa-plus"></i>
               Add Restaurants</Link></li>
            </ul>
          </div>
      </nav>
      </div>  
    )
  }
}

export default NavBar;