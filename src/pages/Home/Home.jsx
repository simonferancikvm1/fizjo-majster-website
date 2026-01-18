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
    <section id="home-section" ref={sectionRef} className="home-section">
      <div className="overlay">
        <div className="home-content">
          <h2>Piotr Bajdziak</h2>
          <p className="slide slide-left">
            Witaj w moim gabinecie. Jestem magistrem fizjoterapii, absolwentem
            Akademii Górnośląskiej oraz Szkoły Mistrzostwa Sportowego BBTS
            Podbeskidzie.
          </p>

          <p className="slide slide-right">
            Jako wciąż aktywny sportowiec, doskonale rozumiem mechanikę ludzkiego
            ciała oraz wyzwania, jakie niesie ze sobą trening i codzienne
            funkcjonowanie.
          </p>

          <p className="slide slide-left">
            W swojej pracy w Szczecinie łączę wiedzę akademicką z praktyką,
            specjalizując się w rehabilitacji sportowej, treningu medycznym oraz
            zaawansowanych metodach terapii manualnej i powięziowej.
          </p>

          <p className="slide slide-right highlight">
            Niezależnie od tego, czy walczysz z przewlekłym bólem, czy wracasz do
            formy po kontuzji – pomogę Ci odzyskać sprawność.
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
