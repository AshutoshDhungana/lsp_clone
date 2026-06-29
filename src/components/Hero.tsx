import React from "react";
import "./Hero.css"
import heroImage from "../assets/hero_image.webp"
import heroTitleLogo from "../assets/student-partnership-logo.svg"

function Hero(): React.JSX.Element {
    return (
        <div className="hero">
            <div className="hero-top">
                <div className="hero-left">
                    <div className="hero-logo-container">                    
                            <img src={heroTitleLogo} alt="Leapfrog Student Partnership Program"/> 
                    </div>
                    <h1 className="hero-title" >Learn, Lead and Grow</h1>
                    <p className="hero-subtitle">
                        Learn new and in-demand skills, grow your network, and build your future in a career that interests you the most.
                    </p>
                </div>
                <div className="hero-right">
                    <img 
                        className="hero-image" 
                        src= {heroImage} 
                        alt="Leapfrog Student Partnership Program" 
                    />
                </div>
            </div>
            <div className="hero-bottom">
                <h2 className="hero-bottom-title">
                    What is Leapfrog Student<br />Partnership Program?
                </h2>
                <p className="hero-bottom-description">
                    Leapfrog Student Partnership Program is a future-oriented program aiming to help IT and engineering students build their career paths and create an impact in the tech community. As a Leapfrog Student Partner, you will serve as an opinion leader and an influencer to engage and connect with.
                </p>
            </div>
        </div>
    )}

export default Hero;