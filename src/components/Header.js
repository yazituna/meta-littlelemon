import React from "react";
import Nav from "./Nav";
import logo from '../assets/Logo.svg';

const Header = () => {
  return (
    <header>
        <img src={logo} alt="Little Lemon Logo" width="180" />
        <Nav />
    </header>
  );
};

export default Header;
