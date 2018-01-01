import React, { Component } from 'react';

import Scroll from "react-scroll";

// import {
//   Link
// } from 'react-router-dom';
var scroller = Scroll.scroller;
class Content extends Component {
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

      <content>

        <nav className="content-nav">
          <ul>
            <li className="first"><a  onClick={() => this.scroll("section1")}>SOLUTIONS </a></li>
            <li><a  onClick={() => this.scroll("section2")}>PRODUCTS</a></li>
            <li><a  onClick={() => this.scroll("section3")}>PARTNERS</a></li>
            <li><a  onClick={() => this.scroll("section3")}>RESOURCES</a></li>
            <li><a  onClick={() => this.scroll("section3")}>CUSTOMER SUCCESS</a></li>
            <li><a  onClick={() => this.scroll("section3")}>NEWS & EVENTS</a></li>
            <li className="last"><a onClick={() => this.scroll("section4")} >COMPANY</a></li>
          </ul>
        </nav>
      </content>
    );
  }
}


export default Content;
