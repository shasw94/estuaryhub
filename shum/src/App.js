import React, { Component } from 'react';

import './Assets/css/default.min.css';

import Header from './Components/headerComponents/header.js'
import Content from './Components/Contents/content.js'
import Home from './Components/pages/Homepage/home.js'
import Team from './Components/pages/team/team.js'
import Aim from './Components/pages/aim/aim.js'
import Contact from './Components/pages/Contact/contact'
import Scroll from 'react-scroll';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

var Element = Scroll.Element;

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="row">
          <div className="col-xs-12 ">
            <Header />
            <Content />
            <Element name="section1" className="top-container">
              <Home />
            </Element>
          </div>
        </div>
        <Element name="section2">
                <Aim />
        </Element>
        {/* <Element name="section3">
            <Team />
        </Element> */}
        <Element name="section4">
            <Contact />
        </Element>
      </div>
      </Router>
    );
  }
}


export default App;
