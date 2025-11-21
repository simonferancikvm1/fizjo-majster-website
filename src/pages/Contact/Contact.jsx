import React from 'react'
import './Contact.css';


export default function Contact() {
    return (
        <section id="contact-section" className="contact-section">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <div className="contact-box">
                    <p><strong>Address:</strong> 123 Main Street, City, Country</p>
                    <p><strong>Phone:</strong> +123 456 7890</p>
                    <p><strong>Email:</strong> example@email.com</p>

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