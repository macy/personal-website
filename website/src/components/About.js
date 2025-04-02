import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <img 
                    src="/images/MacyAbout.jpg" 
                    alt="Macy Li" 
                    className="about-image"
                />
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm Macy, a passionate software engineer with a keen interest in creating elegant solutions to complex problems. 
                        I love exploring new technologies and building applications that make a difference in people's lives.
                    </p>
                    <p>
                        When I'm not coding, you can find me traveling to new places, trying different cuisines, or reading about the latest tech trends. 
                        I believe in continuous learning and pushing the boundaries of what's possible in technology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;