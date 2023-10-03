import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {

    const navs = props.navs;

    return (
        <nav>
            {navs.map((nav) => (
                  <Link to={nav.to} className='nav-item'>
                    {nav.page}
                  </Link>
                  ))}
        </nav>
    );
  };

export default Nav;