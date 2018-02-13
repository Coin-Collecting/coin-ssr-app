import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render() {
    return (
      <p className="App-intro">
        This is our custom component
        <br/>
        <Link to="/">Home</Link>
      </p>
    );
  }
}
