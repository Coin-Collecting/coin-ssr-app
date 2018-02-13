import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'/logo.svg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { this.props.children }
      </div>
    );
  }
}