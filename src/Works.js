import React from 'react';
import "./Works.css"
import img1 from "./assets/Web 1920 – 1.png";
import img2 from "./assets/Web 1920 – 2.png";
import img3 from "./assets/Web 1920 – 3.png";
import img4 from "./assets/Web 1920 – 4.png";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

function Works() {
    return (
    <div className = "works">
        <div className = "works__text">
                <h1>George Nikoglou</h1>
                <h2>Works//</h2>
                <Link to='/' style = {{color:'lightgreen'}}>
                <h2 style = {{cursor :"pointer"}}>//Back</h2>
                </Link>
        </div>  
            <div className = "works__images">
                <p>Clones</p>
                    <ExternalLink href = "https://fir-aa8ca.web.app/">
                        <img  src= {img1} alt = "Amazon-Logo"/>
                    </ExternalLink>
                    <ExternalLink href = "https://github.com/nison79/insta-app">
                        <img src= {img2} alt = "InstagramLogo"/>
                    </ExternalLink>
                    <ExternalLink href = "https://you-tube--clone.web.app/">
                        <img src= {img3} alt = "Youtube-Logo"/>
                    </ExternalLink>
                    <ExternalLink href = "https://github.com/nison79/airbnb-clone">
                        <img src= {img4} alt = "Airbnb-Logo"/>
                    </ExternalLink>
                
            </div>
    </div>
    )
}

export default Works;
