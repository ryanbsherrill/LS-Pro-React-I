import React, { Component } from 'react';
import NavBarButton from './NavBarButton';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>Ryan's First React App</h1>
        <div className="navbar-button-div">
          <NavBarButton text={'GitHub'}/>
        </div>
      </div>
    );
  }
}

export default NavBar;
