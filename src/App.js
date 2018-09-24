import React, { Component } from 'react';
import './App.css';
import Map from './components/map'


class App extends Component {

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Water Quality Vessel</h1>
          <p className="badge badge-dark">We are the Ponstars</p>
          <Map/>
      </div>
    );

  }
}

export default (App);
