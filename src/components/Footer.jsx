import "./Footer.css";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { CONTACT, SOCIAL } from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Social Icons */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Instagram size={22} />
            </a>

            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h3 className="footer-title">Opening Hours</h3>
          <p>Mon – Fri: 08:00 – 18:00</p>
          <p>Sat: 09:00 – 13:00</p>
          <p>Sun: Closed</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>

          <div className="footer-item">
            <Phone className="footer-icon" />
            <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
          </div>

          <div className="footer-item">
            <Mail className="footer-icon" />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>

        {/* Address */}
        <div className="footer-section">
          <h3 className="footer-title">Address</h3>

          <div className="footer-item">
            <MapPin className="footer-icon" />
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.address}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Fizjo Majster. All rights reserved.
      </div>
    </footer>
  );
}