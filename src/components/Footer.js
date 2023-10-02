import React from "react";
import FooterLogo from "../assets/Logo.svg";

const Footer = () => {
    return (
        <footer className="bg-gray">
            <div className="column">
                <img src={FooterLogo} alt="Little Lemon Footer Logo" />
            </div>
            <div className="column">
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
            </div>
            <div className="column">
                <h2>Contact</h2>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div className="column">
            <h2>Social Media</h2>
            </div>
        </footer>
    );
  };

export default Footer;