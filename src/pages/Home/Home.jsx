import React from 'react'
import './Home.css';

export default function Home() {
    return (
        <section id="home-section" className="home-section" style={{ backgroundImage: "url('images/gabinet_background.jpg')" }}>
            <div className="overlay">
                <div className="home-content">
                    <h1>Hello, I am John Doe</h1>
                    <p>I am a passionate developer and designer, creating user-friendly web experiences.</p>
                </div>
            </div>
        </section>
    );
}