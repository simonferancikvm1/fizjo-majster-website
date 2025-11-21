import React from 'react'
import { useState, useRef } from 'react';
import './Services.css';


const services = [
    {
        img: 'images/photo1.png',
        name: 'Massage Therapy',
        description: 'Relax and relieve stress with professional massage therapy.',
        details: 'Full body massage, aromatherapy, and deep tissue techniques for relaxation.',
        video: '/videos/massage.mp4', // place your video in public/videos
    },
    {
        img: 'images/photo1.png',
        name: 'Physical Therapy',
        description: 'Improve mobility and recover from injuries with tailored exercises.',
        details: 'Full body massage, aromatherapy, and deep tissue techniques for relaxation.',
        video: '/videos/massage.mp4', // place your video in public/videos
    },
    {
        img: 'images/photo1.png',
        name: 'Acupuncture',
        description: 'Enhance your well-being and reduce pain using traditional acupuncture.',
        details: 'Full body massage, aromatherapy, and deep tissue techniques for relaxation.',
        video: '/videos/massage.mp4', // place your video in public/videos
    },
    {
        img: 'images/photo1.png',
        name: 'Personal Training',
        description: 'Achieve your fitness goals with personalized training programs.',
        details: 'Full body massage, aromatherapy, and deep tissue techniques for relaxation.',
        video: '/videos/massage.mp4', // place your video in public/videos
    }
];


export default function Services() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    

    return (
        <section id="services-section" className="services-section">
            <h2>Our Services</h2>
            <div className="services-list">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-item"
                        onClick={() => toggleExpand(index)}
                    >
                        <img src={service.img} alt={service.name} className="service-img" />
                        <div className="service-info">
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>

                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className={`service-details ${expandedIndex === index ? 'open' : ''}`}
                            >
                                <p>{service.details}</p>
                                <video
                                    src={service.video}
                                    controls
                                    width="100%"
                                    className="service-video"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}