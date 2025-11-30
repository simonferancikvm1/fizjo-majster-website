import React, { useState } from 'react';
import './Gallery.css';
import { IMAGES } from '../../config';

export default function Gallery() {
    const [previewIndex, setPreviewIndex] = useState(null);

    const openPreview = (index) => setPreviewIndex(index);
    const closePreview = () => setPreviewIndex(null);

    const nextImage = (e) => {
        e.stopPropagation();
        setPreviewIndex((prev) => (prev + 1) % IMAGES.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setPreviewIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    };

    return (
        <section id="gallery-section" className="gallery-section">

            {/* Container that becomes carousel on mobile */}
            <div className="gallery-wrapper">
                <div className="gallery-grid">
                    {IMAGES.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            className="gallery-img"
                            onClick={() => openPreview(index)}
                        />
                    ))}
                </div>
            </div>

            {previewIndex !== null && (
                <div className="preview-overlay" onClick={closePreview}>

                    <button className="arrow left" onClick={prevImage}>‹</button>

                    <img
                        src={IMAGES[previewIndex]}
                        alt="Preview"
                        className="preview-img"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button className="arrow right" onClick={nextImage}>›</button>

                    <button className="close-btn" onClick={closePreview}>×</button>
                </div>
            )}
        </section>
    );
}
