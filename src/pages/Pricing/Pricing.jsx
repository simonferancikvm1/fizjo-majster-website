import React from 'react'
//import { useState, useRef, useEffect } from 'react';
import './Pricing.css';

import { PRICING } from '../../config';

const pricingData = [
    { name: 'Massage Therapy', time: '1h', price: '100 PLN', sessions: '1' },
    { name: 'Physical Therapy', time: '1h', price: '120 PLN', sessions: '1' },
    { name: 'Acupuncture', time: '1h', price: '90 PLN', sessions: '1' },
    { name: 'Rehabilitation', time: '1h', price: '110 PLN', sessions: '1' },
];

export default function Pricing() {

    return (
        <section id="pricing-section" className="pricing-section">
            <h2>Cennik</h2>
            <div className="pricing-card">


                <div className='pricing-details'>
                    <table className='pricing-table'>
                        <thead>
                            <tr>
                                <th>Rodzaj zabiegu</th>
                                <th>Czas trwania</th>
                                <th>Cena</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PRICING.map((item, index) => (
                                <tr key={index}>
                                    <td>

                                        <span className='service-name'>{item.name}</span>
                                        {/* new line */}
                                        <span className="mobile-only"><br /> ({item.duration})</span>


                                        <p className='description'>{item.description}</p>
                                    </td>
                                    <td className='desktop-only'>
                                        {item.duration}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="payment-methods">
                    <img src="images/blik.png" alt="Blik Payment" className="payment-icon" />
                    <img src="images/visa.png" alt="Visa Payment" className="payment-icon" />
                    <img src="images/mastercard.png" alt="Mastercard Payment" className="payment-icon" />
                </div>
            </div>
        </section>
    );
}
