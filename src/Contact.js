import React from 'react';
import LeftHeader from './LeftHeader';
import "./Contact.css";
import facebookimg from "./assets/Icon awesome-facebook.png"
import instagramimg from "./assets/Icon awesome-instagram.png"
import linkedimg from "./assets/Icon awesome-linkedin.png"
import githubimg from "./assets/Icon awesome-github-square.png"

import LocationCityIcon from '@material-ui/icons/LocationCity';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import { useHistory } from 'react-router';
import { ExternalLink } from "react-external-link";


function Contact() {
    const history = useHistory();
    
    return (
        <div className = "contact">
        
                <LeftHeader className = "contact__leftheader"/>
                <div className = "contact__info">
                        
                            <div className ="contact__address">
                                <LocationCityIcon/>
                                <p >P.Dimitriou 20
                                    Drama//Arkadikos//Greece
                                </p>
                            </div>


                        <div className = "contact__mobile">
                        <PhonelinkRingIcon className = "contact__icon"/>
                            <p>
                                +30 9645419898
                            </p>
                        </div>
                    <div className = "contact__social">
                            <ExternalLink href = "https://www.facebook.com/gnikoglou/">
                                <img style= {{width : "100px",marginRight: "50px", marginTop:"100px"}} src = {facebookimg} alt ="facebookimg" />
                            </ExternalLink>
                            <ExternalLink href = "https://www.instagram.com/georgenikoglou/">
                                <img style= {{width : "100px",marginRight: "50px"}} src = {instagramimg} alt ="instagramimg" />
                            </ExternalLink>
                            <ExternalLink href = "https://www.linkedin.com/in/george-nikoglou-54b24532/">
                                <img style= {{width : "100px",marginRight: "50px"}} src = {linkedimg} alt ="linkedimg" />
                            </ExternalLink>
                            <ExternalLink href = "https://github.com/nison79">
                                <img style= {{width : "100px",marginRight: "50px"}} src = {githubimg} alt ="githubimg" />
                            </ExternalLink>
                    </div>
                    
            </div>
        </div>
    )
}

export default Contact;
