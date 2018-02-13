import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default class extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { this.props.children }
        <Footer/>
      </div>
    );
  }
}