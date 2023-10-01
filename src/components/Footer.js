import React from "react";
import FooterLogo from "../assets/Logo.svg";

const Footer = () => {
    return (
        <footer>
            <img src={FooterLogo} alt="Little Lemon Footer Logo" />
            <h2>Sitemap</h2>
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
            <h2>Contact</h2>
            <p>Address</p>
            <p>Phone number</p>
            <p>Email</p>
            <h2>Social Media</h2>
        </footer>
    );
  };

export default Footer;