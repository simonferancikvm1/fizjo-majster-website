import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { IMAGES } from '../../config';

export default function Gallery() {
    const [previewIndex, setPreviewIndex] = useState(null);

    // Disable background scroll
    useEffect(() => {
        document.body.style.overflow = previewIndex !== null ? 'hidden' : 'auto';
        return () => (document.body.style.overflow = 'auto');
    }, [previewIndex]);

    const nextImg = (e) => {
        e.stopPropagation();
        setPreviewIndex((previewIndex + 1) % IMAGES.length);
    };

    const prevImg = (e) => {
        e.stopPropagation();
        setPreviewIndex((previewIndex - 1 + IMAGES.length) % IMAGES.length);
    };

    const close = (e) => {
        e.stopPropagation();
        setPreviewIndex(null);
    };

    return (
        <section id="galeria" className="gallery-section">
            <div className="gallery-grid">
                {IMAGES.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="gallery-img"
                        onClick={() => setPreviewIndex(index)}
                        loading='lazy'
                    />
                ))}
            </div>

            {previewIndex !== null && (
                <div className="preview-overlay" onClick={close}>
                    
                    {/* Close button */}
                    <button className="close-btn" onClick={close}>×</button>

                    {/* Left arrow */}
                    <button className="arrow left" onClick={prevImg}>‹</button>

                    {/* Image */}
                    <img
                        src={IMAGES[previewIndex]}
                        alt="Preview"
                        className="preview-img"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Right arrow */}
                    <button className="arrow right" onClick={nextImg}>›</button>
                </div>
            )}
        </section>
    );
}
