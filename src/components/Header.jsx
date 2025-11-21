import React from 'react'
import { useState } from "react";
import { House, Image, DollarSign, Phone, Briefcase, Facebook, Instagram, Menu } from "lucide-react";
import "./Header.css";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);


    const handleLinkClick = () => {
        setMenuOpen(false); // close menu after clicking a link
    };

    

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="logo">
                    <img src="images/logo_main.png" alt="Logo" className="logo-img" />
                </div>


                {/* Desktop Menu */}

                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#home-section" className="nav-item" onClick={handleLinkClick}><House className="icon" /> HOME</a>
                    <a href="#services-section" className="nav-item" onClick={handleLinkClick}><Briefcase className="icon" /> <span className="link-text">SERVICES</span></a>
                    <a href="#gallery-section" className="nav-item" onClick={handleLinkClick}><Image className="icon" /> GALLERY</a>
                    <a href="#pricing-section" className="nav-item" onClick={handleLinkClick}><DollarSign className="icon" /> PRICING</a>
                    <a href="#contact-section" className="nav-item" onClick={handleLinkClick}><Phone className="icon" /> CONTACT</a>
                </nav>




                {/* Mobile Menu Toggle */}
                <div className="mobile-header-row">
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu className="icon" />
                    </button>
                    <div className="social-media">
                        <a href="#facebook" className="nav-item"><Facebook className="icon" /></a>
                        <a href="#instagram" className="nav-item"><Instagram className="icon" /></a>
                    </div>
                </div>
            </div>
        </header>
    );
}