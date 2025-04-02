import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // optional, only if you want to style it

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                <li><Link to="travel" smooth={true} duration={500}>Travel</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;