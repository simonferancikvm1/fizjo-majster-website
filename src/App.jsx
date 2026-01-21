import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Booksy from './components/ReservationButton'
import Home from './pages/Home/Home'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import Services from './pages/Services/Services'
import Pricing from './pages/Pricing/Pricing'
import ReservationButton from './components/ReservationButton'
import ScrollToSection from './components/ScrollToSection';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <ScrollToSection />
      <Header />
      <Home />
      <Services />
      <Gallery />
      <Pricing />
      <Contact />
      <ReservationButton />
      <Footer />
    </Router>
  );
}


export default App
