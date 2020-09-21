import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
   
    return (
        <div className = "header">
            
            <div className = "header__titlelefttext">
                    <h1>George Nikoglou</h1>
                    <p>ReactJs Development</p>
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
