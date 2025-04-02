import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Travel.css';

const Travel = () => {
    const travels = [
        {
            location: "Paris, France",
            date: "Summer 2023",
            description: "Exploring the City of Light, visiting the Eiffel Tower, Louvre Museum, and enjoying French cuisine.",
            highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "French Cuisine"]
        },
        {
            location: "Shanghai, China",
            date: "Summer 2024",
            description: "Immersing in Chinese culture, visiting family, and experiencing the vibrant city life.",
            highlights: ["The Bund", "Yu Garden", "Street Markets", "Local Cuisine"]
        },
        {
            location: "Los Angeles, USA",
            date: "Winter 2024",
            description: "Exploring the vibrant city life, visiting iconic landmarks, and enjoying the beautiful beaches.",
            highlights: ["Hollywood", "Santa Monica", "Venice Beach", "Universal Studios"]
        }
    ];

    const images = [
        { src: "/images/travel1.jpg" },
        { src: "/images/travel2.jpg" },
        { src: "/images/travel3.jpg" },
        { src: "/images/travel4.jpg" },
        { src: "/images/travel5.jpg" },
        { src: "/images/travel6.jpg" }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0px'
    };

    return (
        <section id="travel">
            <h2>My Travels</h2>
            <div className="main-carousel-container">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                            <img src={image.src} alt={`Travel ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="travel-container">
                {travels.map((trip, index) => (
                    <div key={index} className="travel-card">
                        <div className="travel-header">
                            <h3>{trip.location}</h3>
                            <span className="travel-date">{trip.date}</span>
                        </div>
                        <p className="travel-description">{trip.description}</p>
                        <div className="travel-highlights">
                            <h4>Highlights</h4>
                            <ul>
                                {trip.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Travel; 