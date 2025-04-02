import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "Risk Analyst",
            company: "Department of Public Safety, Cybersecurity Headquarters",
            period: "2024",
            description: "Identified risks and vulnerabilities in state-wide media protection policies by leading a cross-functional risk assessment across all 100+ TX government agencies, resulting in the creation of risk mitigation strategies ",
            skills: ["NIST", "Risk Analysis", "Node.js"]
        },
        {
            title: "Full Stack Developer",
            company: "Rice APPS",
            period: "2024",
            description: "Engineering a mobile app designed for speech therapy through React Native for Texas Hearing Institute (THI), ●	Aiding thousands of children with hearing disabilities by creating an engaging, accessible virtual platform for spondee testing ",
            skills: ["React Native", "Javascript", "SupaBase"]
        }
        // Add more experiences as needed
    ];

    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <h3>{exp.title}</h3>
                        <h4>{exp.company}</h4>
                        <p className="period">{exp.period}</p>
                        <p className="description">{exp.description}</p>
                        <div className="skills">
                            {exp.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience; 