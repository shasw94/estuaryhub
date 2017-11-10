import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (

      <header>

        <div className="logo">
          ESTUARY HUB
        </div>
        <nav>
          <ul>
            <li className="first"><a href="#section1" >Home</a></li>
            <li><a href="#section2">Aim</a></li>
            <li><a href="#section3">Team</a></li>
            <li className="last"><a href="#section4" >Contact Us</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}


export default Header;
