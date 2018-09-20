import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/Intro';

class App extends Component {

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Water Quality Vessel</h1>
          <p>We are the Ponstars</p>

      </div>
    );
      // return React.createElement('div', {className:App}, React.createElement('h1', null, 'WQV'))
  }   // These codes are equivalent^ top transforms to bot
}

export default App;
