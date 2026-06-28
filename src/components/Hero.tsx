import React, { useState } from "react";
import "./Hero.css"
import heroImage from "../assets/hero_image.webp"

function Hero() {
    return(
        <div className="hero">
            <div className="top">
                <div className="top-title">
                    <div className="top-title-right">
                        <div className="top-title-right-1"></div>
                        <div className="top-title-right-2"></div>
                    </div>
                    <div className="top-title-left">
                        <img className="hero-top-title-left-image" src={heroImage} alt="hero_image" />
                    </div>
                </div>
                <div className="top-subtitle">
                    <h1>
                        
                    </h1>
                </div>
            </div>
            <div className="bottom">

            </div>    
        </div>
  
    )
}


export default Hero;