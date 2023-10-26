import React from "react";
import Nav from "./Nav";
import logo from '../assets/Logo.svg';

const Header = (props) => {
  return (
    <header>
      <div className="column25">
        <img src={logo} alt="Little Lemon Logo" className="header-logo" width="240" />
      </div>
      <div className="column-right">
        <Nav navs={props.navs}/>
      </div>
    </header>
  );
};

export default Header;
