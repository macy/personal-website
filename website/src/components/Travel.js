import React from 'react';
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
            location: "Tokyo, Japan",
            date: "Spring 2023",
            description: "Immersing in Japanese culture, visiting temples, and experiencing the vibrant city life.",
            highlights: ["Shibuya Crossing", "Senso-ji Temple", "Tsukiji Market", "Cherry Blossoms"]
        },
        {
            location: "New York City, USA",
            date: "Winter 2023",
            description: "Exploring the Big Apple, visiting iconic landmarks, and experiencing the city's energy.",
            highlights: ["Central Park", "Times Square", "Statue of Liberty", "Broadway"]
        }
        // Add more travel experiences as needed
    ];

    return (
        <section id="travel">
            <h2>Travel Adventures</h2>
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