import React, { Component } from 'react';

import Scroll from "react-scroll";
// import {
//   Link
// } from 'react-router-dom';
var scroller = Scroll.scroller;
class Header extends Component {
  scroll(id) {
    scroller.scrollTo(id, {
      duration: 400,
      delay: 50,
      smooth: true,
      offset: 50 // Scrolls to element + 50 pixels down the page
    });
  }
  render() {
    return (

      <header>

        <div className="logo">
          ESTUARY HUB
        </div>
        <nav>
          <ul>
            <li className="first"><a  onClick={() => this.scroll("section1")}>Home </a></li>
            <li><a  onClick={() => this.scroll("section2")}>Aim</a></li>
            <li><a  onClick={() => this.scroll("section3")}>Team</a></li>
            <li className="last"><a onClick={() => this.scroll("section4")} >Contact Us</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}


export default Header;
