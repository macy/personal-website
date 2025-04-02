import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-section">
                    <h3>Biography</h3>
                    <p>Hello! I am Macy, a HeadStart Cohort 7 fellow. I'm passionate about technology and creating meaningful solutions that make a difference in people's lives.</p>
                </div>

                <div className="about-section">
                    <h3>Interests</h3>
                    <div className="interests-grid">
                        <div className="interest-item">
                            <h4>Technology</h4>
                            <p>Web Development, Software Engineering, AI/ML</p>
                        </div>
                        <div className="interest-item">
                            <h4>Learning</h4>
                            <p>Continuous learning, exploring new technologies</p>
                        </div>
                        <div className="interest-item">
                            <h4>Personal Growth</h4>
                            <p>Professional development, skill enhancement</p>
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <h3>Personal Background</h3>
                    <p>I'm part of the HeadStart program, which has been an incredible journey in my professional development. Through this program, I've been able to enhance my skills and work on meaningful projects.</p>
                </div>
            </div>
        </section>
    );
};

export default About;