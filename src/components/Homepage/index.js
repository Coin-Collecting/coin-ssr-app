import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render() {
    return (
      <p className="App-intro">
        This is the homepage
        <br/>
        <Link to="/collection">Collection</Link>
      </p>
    );
  }
}
