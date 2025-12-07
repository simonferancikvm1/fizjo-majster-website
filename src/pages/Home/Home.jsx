import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

export default function Home() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="home-section" ref={sectionRef} className="home-section">
      <div className="overlay">
        <div className="home-content">
          <h1>Piotr Bajdziak</h1>
          <p>I am a passionate physiotherapist.</p>
        </div>
        <img
          src="images/majster.webp"
          alt="Majster"
          className={`majster-img ${inView ? 'slide-in' : ''}`}
        />
      </div>
    </section>
  );
}
