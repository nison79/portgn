import React from 'react'
import "./LeftHeader.css";
import { Link } from "react-router-dom";

function LeftHeader() {
    return (
        <div className = "leftheader">
                    <div className = "leftheader__text">
                <h1>George Nikoglou</h1>
                <h2>Contact</h2>
                <Link to='/' style = {{color:'lightgreen'}}>
                <h2 style = {{cursor :"pointer"}}>//Back</h2>
                </Link>
        </div> 
        </div>
    )
}

export default LeftHeader;
