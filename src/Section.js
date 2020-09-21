import React from 'react';
import "./Section.css";
import img from "./assets/nathan-dumlao-ciO5L8pin8A-unsplash.jpg";
import { fadeOutRightBig } from "react-animations";
import Radium, {StyleRoot} from 'radium';




function Section() {
    const styles = {
        fadeOutRightBig: {
        animation: 'x 10s',
        animationName: Radium.keyframes(fadeOutRightBig, 'fadeOutRightBig')
        }
    }
    
    return (
        <div className = "section">
            <StyleRoot>
            <img src= {img} style = {styles.fadeOutRightBig}
                alt = "sea and waves"
            />
            </StyleRoot>
        
            
        </div>
    )
}

export default Section
