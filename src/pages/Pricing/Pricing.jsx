import React from 'react'
//import { useState, useRef, useEffect } from 'react';
import './Pricing.css';

import { SERVICES, INFO } from '../../config';

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
                            {SERVICES.map((item, index) => (
                                <tr key={index}>
                                    <td>

                                        <span className='service-name'>{item.name}</span>
                                        {/* new line */}
                                        <span className="mobile-only"><br /> ({item.duration})</span>

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
                    <img src="images/cash.webp" alt="Cash Payment" className="payment-icon" />
                    <img src="images/blik.webp" alt="Blik Payment" className="payment-icon" />
                    {/* 
                    <img src="images/visa.webp" alt="Visa Payment" className="payment-icon" /> 
                    <img src="images/mastercard.webp" alt="Mastercard Payment" className="payment-icon" /> 
                    */}
                </div>
            </div>
            <div className="visit-info">
                <p className="visit-info-title">
                    Jak przygotować się do wizyty?
                </p>

                <p className="visit-info-line highlight">
                    👕 Proszę zabrać ze sobą <strong>wygodne ubranie </strong><br />
                    (luźne spodenki i koszulkę, które łatwo zdjąć, aby odsłonić leczony obszar).
                </p>

                <p className="visit-info-line highlight">
                    📄 <strong>Dokumentacja medyczna</strong><br />
                    RTG, USG, MRI – dotyczące aktualnych dolegliwości.
                </p>
            </div>
        </section>
    );
}
