import React from 'react'
import { useState, useRef } from 'react';
import './Services.css';

import { SERVICES } from '../../config';



export default function Services() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    

    return (
        <section id="services-section" className="services-section">
            <h2>Usługi</h2>
            <div className="services-list">
                {SERVICES.map((service, index) => (
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