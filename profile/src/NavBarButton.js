import React, { Component } from 'react';
import './NavBar.css';

class NavBarButton extends Component {
  render() {
    return (
      <div>
        <a href="https://github.com/ryanbsherrill" target="blank"><button>{this.props.text}</button></a>
      </div>
    );
  }
}

export default NavBarButton;
