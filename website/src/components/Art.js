import React from 'react';
import './Art.css';

const Art = () => {
    const images = [
        "/images/Art1.jpg",
        "/images/Art2.JPG",
        "/images/Art3.jpg",
        "/images/Art4.jpg",
        "/images/Art5.jpg",
        "/images/Art6.JPG",
        "/images/Art7.jpg",
        "/images/Art8.PNG",
        "/images/Art9.JPG"
    ];

    return (
        <section id="art">
            <h2>Art Projects</h2>
            <div className="art-container">
                <div className="art-gallery">
                    <div className="art-grid">
                        {images.map((image, index) => (
                            <div key={index} className="art-item">
                                <img src={image} alt={`Art Project ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <p className="art-description">
                        A collection of my creative works and artistic projects, showcasing various styles and techniques.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Art; 