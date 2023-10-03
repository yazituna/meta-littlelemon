import React from "react";
import FooterLogo from "../assets/footerlogo.png";

const socials = [
    {
      title: "Facebook",
      url: "https://facebook.com",
      getImageSrc: () => require("../assets/facebook.png"),
    },
    {
        title: "Instagram",
        url: "https://instagram.com",
        getImageSrc: () => require("../assets/instagram.png"),
    },
    {
        title: "Pinterest",
        url: "https://pinterest.com",
        getImageSrc: () => require("../assets/pinterest.png"),
    },
    {
        title: "Tiktok",
        url: "https://tiktok.com",
        getImageSrc: () => require("../assets/tiktok.png"),
    },
    {
        title: "Youtube",
        url: "https://youtube.com",
        getImageSrc: () => require("../assets/youtube.png"),
    },
  ];

const Footer = () => {
    return (
        <footer className="bg-gray">
            <div className="column">
                <img id="footer-logo" src={FooterLogo} alt="Little Lemon Footer Logo" />
            </div>
            <div className="column">
                <h3 className="section-categories">Sitemap</h3>
                <nav>
                    <ul className="footer-nav-list">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </nav>
            </div>
            <div className="column15">
                <h3 className="section-categories">Contact</h3>
                <p>4823 Lowland Drive, Chicago</p>
                <p>815-371-6256</p>
                <p>info@littlelemon.com</p>
            </div>
            <div className="column15">
            <h3 className="section-categories">Social Media</h3>
            <div>
                {socials.map((social) => (
                  <a href={social.url} target='_blank'>
                    <img className="social-icon" src={social.getImageSrc()} alt={social.title} />
                  </a>
                  ))}
            </div>
            </div>
        </footer>
    );
  };

export default Footer;