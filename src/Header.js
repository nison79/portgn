import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
   
    return (
        <div className = "header">
            
            <div className = "header__titlelefttext">
                    <Link to = "/contact" style = {{ textDecoration: 'none', color: 'black',fontSize:"60px" }}>
                    <h1>George Nikoglou</h1>
                    </Link>
                    <div className = "header__titleinfo">
                        <p>ReactJs Developer</p>
                        <p>Front to Back aka Full Stack</p>
                        <p>XD designer&Photographer</p>
                        <p>Gsap Animator</p>
                    </div>
            </div>
            <div className = "header__titleright">
                <div className = "header__titlerighttext">
                    <Link to = '/works' style={{ textDecoration: 'none', color: 'black' }}>
                    <p>works</p>
                    </Link>
                    <Link to = "/contact" style={{ textDecoration: 'none', color:'black'}}>
                    <p>contact</p>
                    </Link>

                </div>
            </div>

            
        </div>
    )
}

export default Header
