import React, { Component } from 'react';

import './Assets/css/default.min.css';

import Header from './Components/headerComponents/header.js'
import Homepage from './Components/pages/homepage.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
      </div>
    );
  }
}


export default App;
