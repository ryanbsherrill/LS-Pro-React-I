import React, { Component } from 'react';
import './NavBar.css';

class Body extends Component {
  render() {
    return (
      <div>
        <img src={'http://i.imgur.com/rBZ2QrQ.jpg'} alt="Where Am I?!?!?" width="600" height="400"/>
        <p>
        Hi. My name is Ryan and this is my first
        React App. I think I'm getting the hang
        of it already. It's nothing really, if
        you've ever used NodeJS before. It's
        just a simplified, front-end version of
        the same thing. Oh, by the way, I'm a space
        cat. Meoooooow!
        </p>
      </div>
    );
  }
}

export default Body;