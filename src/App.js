import React from 'react';
//import { useState } from 'react';
import './App.css';
import pfp from './poggingdude.png'


export default function App() {
    //let pfp = require('./poggingdude.png');
    return (
        <>
            <head>
                <title>Kameron Ferrer | CS Graduate</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
                    integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
                    crossOrigin="anonymous"
                />
            </head>
            <body>
                <div id="header" className="flex-header" style={{ backgroundColor: "#ccebf1" }}>
                    <h3 id="name" className="flex-name" style={{ fontSize: 40, color: "black" }}>
                        Kameron Ferrer
                    </h3>
                    <a
                        className="flex-links"
                        style={{ padding: 15 }}
                        href="#about"
                    >
                        <i style={{ float: "right", fontSize: 20, color: "black" }}> About</i>
                    </a>
                    <a
                        style={{ padding: 15 }}
                        href="#portfolio"
                    >
                        <i style={{ float: "right", fontSize: 20, color: "black" }}>
                            {" "}
                            Portfolio{" "}
                        </i>
                    </a>
                    <a
                        style={{ padding: 15 }}
                        href="#contact"
                    >
                        <i style={{ float: "right", fontSize: 20, color: "black" }}> Contact </i>
                    </a>

                </div>

                <br />

                <div className="container" style={{ marginTop: 30 }}>
                    <hr className="featurette-divider" />
                    <div id="about" className="row featurette">
                        <div className="col-md-7">
                            <h2
                                className="featurette-heading"
                                style={{ backgroundColor: "#eefcff" }}
                            >
                                A LITTLE ABOUT <span className="text-muted">ME.</span>
                            </h2>
                            <p className="lead" style={{ backgroundColor: "#ededed", padding: 15 }}>
                                Welcome to my home page. My name is Kameron Ferrer and I am a Filipino
                                American born on September 29th, 2002. I am a 4th year Computer
                                Science major at CSULB and I plan to graduate in Fall 2024. During my
                                time at CSULB I have gained experience in C languages, and As a career
                                I want to either become a Game Programmer or a Software Engineer. I
                                hope that I can meet a lot of new people at CSULB and I hope I can
                                become an amazing programmer while at CSULB!
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img
                                src={pfp}
                                alt={pfp}
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <section id="portfolio" className="portfolio">
                        <div className="portfolio-header" id="portfolio-header">
                            Portfolio
                        </div>
                        <div id="portfolio-content" className="row featurette">
                            <button style={{
                                padding: 100
                            }
                            }>
                                Hello
                            </button>
                        </div>
                    </section>


                    <hr className="featurette-divider" />

                    <div className="row featurette">
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
                                        CECS Major
                                    </a>
                                </p>
                                <p>Last updated on 1-27-24</p>
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
