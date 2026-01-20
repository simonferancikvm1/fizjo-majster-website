import React from 'react'
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import './Contact.css';
import { CONTACT, INFO } from '../../config';


export default function Contact() {
    return (
        <section id="contact-section" className="contact-section">
            <div className="contact-container">
                <h2>Kontakt</h2>
                <div className="contact-box">
                    <div className='contact-items-list'>
                        <div className="contact-item">
                            <Phone className="contact-icon" />
                            <a href={`tel:${CONTACT.phone}`} className="contact-link">
                                {CONTACT.phone}
                            </a>
                        </div>

                        <div className="contact-item">
                            <Mail className="contact-icon" />
                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="contact-link"
                            >
                                {CONTACT.email}
                            </a>
                        </div>
                        {/* WhatsApp link disabled
                    <div className="contact-item">
                        <MessageCircle className="contact-icon" />
                        <a
                            href="https://wa.me/421900123456"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                    */}
                        <div className="contact-item">
                            <MapPin className="contact-icon" />
                            <a
                                href="https://www.google.com/maps/place/al.+Powsta%C5%84c%C3%B3w+Wielkopolskich+66%2F68,+70-111+Szczecin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                {CONTACT.address}
                            </a>
                        </div>
                    </div>
                    <div className="map-container">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d594.7261232869943!2d14.52815427648291!3d53.40651499380644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa08dd6737500b%3A0x12a3ecb4fabf0a95!2sal.%20Powsta%C5%84c%C3%B3w%20Wielkopolskich%2066%2F68%2C%2070-111%20Szczecin!5e0!3m2!1ssk!2spl!4v1767800978050!5m2!1ssk!2spl"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                        <div className="map-info">
                            <p className="map-info-line">
                                <strong>Budynek Przychodni</strong> — wejście z boku budynku
                            </p>

                            <p className="map-info-line highlight">
                                🚗 <strong>PARKING</strong> z tyłu przychodni POZ<br />
                                <span className="parking-number">Miejsce parkingowe nr 2</span>
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}