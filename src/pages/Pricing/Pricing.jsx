import React from 'react'
import { useState, useRef, useEffect } from 'react';
import './Pricing.css';

import { SERVICES } from '../../config';

const pricingData = [
  { name: 'Massage Therapy', time: '1h', price: '100 PLN', sessions: '1' },
  { name: 'Physical Therapy', time: '1h', price: '120 PLN', sessions: '1' },
  { name: 'Acupuncture', time: '1h', price: '90 PLN', sessions: '1' },
  { name: 'Rehabilitation', time: '1h', price: '110 PLN', sessions: '1' },
];

export default function Pricing() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleExpand = () => setExpanded(!expanded);

  useEffect(() => {
    if (contentRef.current) {
      if (expanded) {
        contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
      } else {
        contentRef.current.style.maxHeight = '0px';
      }
    }
  }, [expanded]);

  return (
    <section id="pricing-section" className="pricing-section">
      <h2>Cennik</h2>
      <div className="pricing-card" onClick={toggleExpand}>
        <h3>One Hour Session</h3>
        <p className="price">180 PLN</p>
        <p className="description">Click to see detailed pricing options</p>

        <div ref={contentRef} className={`pricing-details`}>
          <table className='pricing-table'>
            <thead>
              <tr>
                <th>Nazwa usługi</th>
                <th>Czas</th>
                <th>Cena</th>
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.time}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
