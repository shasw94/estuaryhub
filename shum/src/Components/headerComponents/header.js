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
            <li className="last"><a onClick={() => this.scroll("section4")} >CONTACT US</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}


export default Header;
