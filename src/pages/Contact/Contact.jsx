import React from 'react'
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import './Contact.css';
import { CONTACT } from '../../config';


export default function Contact() {
    return (
        <section id="contact-section" className="contact-section">
            <div className="contact-container">
                <h2>Kontakt</h2>
                <div className="contact-box">
                    <div className='contact-items-list'>
                    <div className="contact-item">
                        <Phone className="contact-icon" />
                        <a href="tel:${CONTACT.phone}" className="contact-link">
                            {CONTACT.phone}
                        </a>
                    </div>

                    <div className="contact-item">
                        <Mail className="contact-icon" />
                        <a
                            href="mailto:${CONTACT.email}"
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
                            href="https://www.google.com/maps?q=Your+Street+123,+YourCity"
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.161474479367!2d14.448737361640875!3d53.42982104318152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0eff092d110b%3A0xf4db281a60b7b5fa!2sPodg%C3%B3rna%2014%2C%2072-002%20Mierzyn!5e0!3m2!1ssk!2spl!4v1763635290690!5m2!1ssk!2spl"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>



            </div>
        </section>
    );
}