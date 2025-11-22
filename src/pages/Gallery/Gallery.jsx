import React from 'react'
import { useState } from 'react';
import './Gallery.css';
import { IMAGES } from '../../config';



export default function Gallery() {
    const [preview, setPreview] = useState(null);


    return (
        <section id="gallery-section" className="gallery-section">
            <div className="gallery-grid">
                {IMAGES.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="gallery-img"
                        onClick={() => setPreview(src)}
                    />
                ))}
            </div>


            {preview && (
                <div className="preview-overlay" onClick={() => setPreview(null)}>
                    <img src={preview} alt="Preview" className="preview-img" />
                </div>
            )}
        </section>
    );
}