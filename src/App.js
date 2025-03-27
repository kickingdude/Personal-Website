import React from 'react';
import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import pfp from './images/poggingdude.png';
import firebase from './images/firebase.png';
import git from './images/Git.png';
import html from './images/html.png';
import java from './images/java.png';
import js from './images/Javascript.png';
import mongodb from './images/mongodb.png';
import python from './images/Python.png';
import react from './images/React.png';
import spring from './images/Spring.png';
import tensorflow from './images/Tensorflow_logo.png';
import chef from './images/icon.png';
import revature from './images/revature_logo.png';
import pokemon from './images/tcg.png';



export default function App() {
    //let pfp = require('./poggingdude.png');
    const [visibleSection, setVisibleSection] = useState('');
    
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const profile = document.querySelector('#profile');
        const profile_skills = document.querySelector('#profile-skills');
        const projects = document.querySelectorAll('.project-row');
        const section_observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSection(entry.target.id);
                        if (entry.target.id == 'about') {
                            profile.classList.add('profile_fade-in')
                            profile_skills.classList.add('profile-skills_fade-in')
                        }
                    }
                });

            }, {
                root: null,
                threshold: 0.5
        });
        const projects_observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.className == 'project-row') {
                        document.querySelector(`#${entry.target.id}`).classList.add('row_fade-in');
                    }
                }
            });

        }, {
            root: null,
            threshold: 0
        });
        sections.forEach((section) => section_observer.observe(section));
        projects.forEach((row) => projects_observer.observe(row));
        

        return () => {
            sections.forEach((section) => section_observer.unobserve(section));
            projects.forEach((row) => projects_observer.unobserve(row));
        };
    }, []);
    return (
        <>
            <head>
                <title>Kameron Ferrer | CS Graduate</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <div id="nav-bar" className="navigation-bar">
                    <div id="nav-header" className="navigation-header">
                        <a className={`navigation-item ${visibleSection ==='about'? 'navigation-item--active' : ''}`} href="#about">
                            About
                        </a>
                        <a className={`navigation-item ${visibleSection === 'portfolio' ? 'navigation-item--active' : ''}`} href="#portfolio">
                            Portfolio
                        </a>
                        <a className={`navigation-item ${visibleSection === 'contact' ? 'navigation-item--active' : ''}`} href="#contact">
                            Contact
                        </a>
                    </div>
                </div>

                <br />

                <div className="container">
                    <hr className="featurette-divider" />
                    <section id="about" className="about-me">
                        <div className="about-me-header">
                            About
                        </div>
                        <div id = "about-content" className="about-content">
                            <div id="profile" className='profile'>
                                <img className="profile-pfp"
                                    src={pfp}
                                    alt={pfp}
                                />
                                <p className="profile-intro">
                                    I am a Computer Science graduate from California State University, Long Beach, with a strong passion for software development, artificial intelligence, and problem-solving. My expertise lies in backend development, database management, and AI-driven applications, where I strive to create innovative and efficient solutions.
                                    I am always eager to learn and explore emerging technologies, particularly in AI, full-stack development, and cloud computing. My goal is to contribute my skills and passion for technology to a forward-thinking organization, helping build impactful software solutions that enhance user experiences.
                                    Let's connect and collaborate!
                                </p>
                            </div>
                            <div id="profile-skills" className='profile-skills'>
                                <div className="skills-rows">
                                    <div className="skills">
                                        <img src={html} alt={html} />
                                        <div className="skills-name">HTML</div>
                                    </div>
                                    <div className="skills">
                                        <img src={java} alt={java} />
                                        <div className="skills-name">JAVA</div>
                                    </div>
                                    <div className="skills">
                                        <img src={python} alt={python} />
                                        <div className="skills-name">PYTHON</div>
                                    </div>

                                </div>
                                <div className="skills-rows">
                                    <div className="skills">
                                        <img src={js} alt={js} />
                                        <div className="skills-name">JAVASCRIPT</div>
                                    </div>
                                    <div className="skills">
                                        <img src={react} alt={react} />
                                        <div className="skills-name">REACT</div>
                                    </div>
                                    <div className="skills">
                                        <img src={spring} alt={spring} />
                                        <div className="skills-name">SPRING</div>
                                    </div>
                                    <div className="skills">
                                        <img src={mongodb} alt={mongodb} />
                                        <div className="skills-name">MONGODB</div>
                                    </div>
                                </div>
                                <div className="skills-rows">
                                    <div className="skills">
                                        <img src={git} alt={git} />
                                        <div className="skills-name">GIT</div>
                                    </div>
                                    <div className="skills">
                                        <img src={firebase} alt={firebase} />
                                        <div className="skills-name">FIREBASE</div>
                                    </div>
                                    <div className="skills">
                                        <img src={tensorflow} alt={tensorflow} />
                                        <div className="skills-name">TENSORFLOW</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="featurette-divider" />

                    <section id="portfolio" className="portfolio">
                        <div className="portfolio-header" id="portfolio-header">
                            Portfolio
                        </div>
                        <div id="portfolio-content" className="portfolio-content">
                            <div id = "row1" className="project-row">
                                <a className="project" href="https://github.com/Ratio-plusplus/Genielicious">
                                    <img src={chef} alt={chef} className="project-img"/>
                                    <div className="project-title">
                                    Genielicious
                                    </div>
                                    <div className="project-txt">
                                    AI-Powered Food Recommendation Mobile App 
                                    </div>
                                </a>
                                <a className="project" href="https://github.com/kickingdude/kickingdude-pep-spring-project">
                                    <img src={revature} alt={revature} className="project-img"/>
                                    <div className="project-title">
                                        Spring Social Media Blog API
                                    </div>
                                    <div className="project-txt">
                                        Spring messaging with Revature
                                    </div>
                                </a>
                                <a className="project" href="https://github.com/aldriechV/CardDatabase">
                                    <img src={pokemon} alt={pokemon} className="project-img"/>
                                    <div className="project-title">
                                        Card Game Database
                                    </div>
                                    <div className="project-txt">
                                        CV Infused Card Database
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>


                    <hr className="featurette-divider" />

                    <div id="contact"className="row featurette">
                        <div className="col-md-5">
                            <h2 className="featurette-heading">LINKS</h2>
                            <a
                                style={{
                                    textDecoration: "none",
                                    border: "0.2px solid #000",
                                    color: "#000",
                                    background: "#e6e4e4",
                                    padding: 5,
                                    borderRadius: 1
                                }}
                                href="https://github.com/kickingdude"
                            >
                                Github
                            </a>
                            <a
                                style={{
                                    textDecoration: "none",
                                    border: "0.2px solid #000",
                                    color: "#000",
                                    background: "#e6e4e4",
                                    padding: 5,
                                    borderRadius: 1
                                }}
                                href="https://www.linkedin.com/in/kameron-ferrer/"
                            >
                                LinkedIn
                            </a>
                            <a
                                style={{
                                    textDecoration: "none",
                                    border: "0.2px solid #000",
                                    color: "#000",
                                    background: "#e6e4e4",
                                    padding: 5,
                                    borderRadius: 1
                                }}
                                href="https://www.twitch.tv/kickingdude16"
                            >
                                Twitch
                            </a>
                        </div>

                        <ul>
                            <hr className="featurette-divider" />
                            <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
                                <p>
                                    Created by{" "}
                                    <a href="mailto:kameron.ferrer@student.csulb.edu">Kameron Ferrer</a>{" "}
                                    -{" "}
                                    <a href="https://www.twitch.tv/kickingdude16" target="_blank">
                                        CS Undergraduate
                                    </a>
                                </p>
                                <p>Last updated on 3-26-25</p>
                                <i
                                    className="fas fa-chalkboard-teacher"
                                    style={{
                                        fontSize: 60,
                                        color: "gold",
                                        textShadow: "2px 2px 4px #000000"
                                    }}
                                />
                            </div>
                        </ul>
                    </div>
                </div>
            </body>
        </>

    );
}
