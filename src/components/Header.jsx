import React from 'react'
import { useState } from "react";
import { House, Image, DollarSign, Phone, Briefcase, Facebook, Instagram, Menu } from "lucide-react";
import "./Header.css";
import { SOCIAL } from '../config';


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
                    <a href="#home-section" onClick={handleLinkClick}>
                        <img src="images/logo_main.png" alt="Logo" className="logo-img" />
                    </a>
                </div>
                {/* Desktop Menu */}
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#home-section" className="nav-item" onClick={handleLinkClick}><House className="icon" /> O mnie</a>
                    <a href="#services-section" className="nav-item" onClick={handleLinkClick}><Briefcase className="icon" /> Usługi</a>
                    <a href="#gallery-section" className="nav-item" onClick={handleLinkClick}><Image className="icon" /> Galeria</a>
                    <a href="#pricing-section" className="nav-item" onClick={handleLinkClick}><DollarSign className="icon" /> Cennik</a>
                    <a href="#contact-section" className="nav-item" onClick={handleLinkClick}><Phone className="icon" /> Kontakt</a>
                </nav>
                {/* Mobile Menu Toggle */}
                <div className="mobile-header-row">
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu className="icon" />
                    </button>
                    <div className="social-media">
                        <a href={SOCIAL.facebook} target="blank" className="nav-item"><Facebook className="icon" /></a>
                        <a href={SOCIAL.instagram} target="blank" className="nav-item"><Instagram className="icon" /></a>
                    </div>
                </div>
            </div>
        </header>
    );
}