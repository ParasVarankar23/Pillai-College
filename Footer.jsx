import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PillaiLogo from '../../Assets/pillailogo.jpg';
import Google from '../../Assets/google.jpg';
import App from '../../Assets/app.jpg';
import './Footer.css';

function Footer() {
return (
    <div>
    <footer className="footer-college">
        <div className="footer-container-college">
        <div className="footer-section-college">
            <img src={PillaiLogo} alt="Pillai Campus Logo" className="footer-logo-college" />
            <div className="social-icons-college">
            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-college">
                <FaFacebookF />
            </Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-college">
                <FaTwitter />
            </Link>
            <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-college">
                <FaLinkedinIn />
            </Link>
            <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-college">
                <FaInstagram />
            </Link>
            </div>
        </div>
        <div className="footer-section-college">
            <h3>Subscribe To Our Newsletter</h3>
            <form className="newsletter-form-college">
            <input type="email" placeholder="Enter your email ID" className="newsletter-input-college" />
            <button type="submit" className="newsletter-button-college">
                <FaArrowRight />
            </button>
            </form>
        </div>
        <div className="footer-section-college">
            <h3>Explore Our Campus</h3>
            <p>Visit us for a campus tour or explore our facilities online.</p>
            <div className="app-links-college">
            <Link to="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <img src={Google} alt="Google Play" className="app-link-image-college" />
            </Link>
            <Link to="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src={App} alt="App Store" className="app-link-image-college" />
            </Link>
            </div>
        </div>
        </div>
        <div className="footer-bottom-college">
        <p>© 2024 Pillai College. All Rights Reserved.</p>
        </div>
    </footer>
    </div>
);
}

export default Footer;
