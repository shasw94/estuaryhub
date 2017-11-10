import React, { Component } from 'react';

import './Assets/css/default.min.css';

import Header from './Components/headerComponents/header.js'
import Home from './Components/pages/Homepage/home.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-container">
          <Header />
          <Home />
        </div>
      </div>
    );
  }
}


export default App;
