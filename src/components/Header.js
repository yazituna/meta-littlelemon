import React from "react";
import Nav from "./Nav";
import logo from '../assets/Logo.svg';

const Header = (props) => {
  return (
    <header>
      <div className="column">
        <img src={logo} alt="Little Lemon Logo" width="360" />
      </div>
      <div className="column-right">
        <Nav navs={props.navs}/>
      </div>
    </header>
  );
};

export default Header;
