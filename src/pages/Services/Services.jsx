import React from 'react'
import { useState, useRef } from 'react';
import './Services.css';

import { SERVICES } from '../../config';




export default function Services() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    

    return (
        <section id="uslugi" className="services-section">
            <h2>Usługi</h2>
            <div className="services-list">
                {SERVICES.map((service, index) => (
                    <div
                        key={index}
                        className="service-item"
                        onClick={() => toggleExpand(index)}
                    >
                        

                        
                        <div className="service-info">
                            <img src={service.img} alt={service.name} className="service-img" />
                            <div>
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                            </div>
                       </div>

                            <div
                                
                                className={`service-details ${expandedIndex === index ? 'open' : ''}`}
                            >
                                <p>{service.details}</p>
                                {/*
                                <video
                                    src={service.video}
                                    controls
                                    width="100%"
                                    className="service-video"
                                />
                                */}
                            </div>
                        </div>
                    
                ))}
            </div>
        </section>
    );
}