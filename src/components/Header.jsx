import React from 'react'
import { useState, useEffect, useRef } from "react";
import { House, Image, DollarSign, Phone, Briefcase, Facebook, Instagram, Menu, X } from "lucide-react";
import "./Header.css";
import { SOCIAL } from '../config';
import { useNavigate } from "react-router-dom";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const navigate = useNavigate();


    const handleLinkClick = (page) => {
        setMenuOpen(false); // close menu after clicking a link
        navigate(page);
    };



    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="logo">
                    <button onClick={() => handleLinkClick("/o-mnie")}>
                        <img src="images/logo_main.webp" alt="Logo" className="logo-img" />
                    </button>
                </div>
                {/* Desktop Menu */}
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <button onClick={() => handleLinkClick("/o-mnie")}><House className="icon" /> O mnie</button>
                    <button onClick={() => handleLinkClick("/uslugi")}><Briefcase className="icon" /> Usługi</button>
                    <button onClick={() => handleLinkClick("/galeria")}><Image className="icon" /> Galeria</button>
                    <button onClick={() => handleLinkClick("/cennik")}><DollarSign className="icon" /> Cennik</button>
                    <button onClick={() => handleLinkClick("/kontakt")}><Phone className="icon" /> Kontakt</button>
                </nav>
                {/* Mobile Menu Toggle */}
                <div className="mobile-header-row">
                    <button
                        className={`menu-toggle ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X className="icon" /> : <Menu className="icon" />}
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