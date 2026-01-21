import React, { useEffect, useRef, useState } from 'react';
import { INFO } from "../../config";
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
    <section id="o-mnie" ref={sectionRef} className="home-section">
      <div className="overlay">
        <div className="home-content">
          <h2>Piotr Bajdziak</h2>
          <p className="slide slide-left">
            {INFO.bio[0]}
          </p>

          <p className="slide slide-right">
            {INFO.bio[1]}
          </p>

          <p className="slide slide-left">
            {INFO.bio[2]}
          </p>

          <p className="slide slide-right highlight">
            {INFO.bio[3]}
          </p>
        </div>
        {/*
        <img
          src="images/majster_goalie.webp"
          alt="Majster Goalie"
          className={`majster-goalie-img ${inView ? 'slide-in' : ''}`}
        />
        */}
      </div>
    </section>
  );
}
