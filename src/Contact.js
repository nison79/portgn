import React from 'react';
import "./Contact.css";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import {Button} from "@material-ui/core";
import { useHistory } from 'react-router';


function Contact() {
    const history = useHistory();
    
    return (
        <div className = "contact">
        
                
                <div className = "contact__info">
                    <h2>find me in : </h2>
                        <div className ="contact__address">
                            <LocationCityIcon/>
                            <p >p.dimitriou 20
                                Drama/Greece
                            </p>
                        </div>


                    <div className = "contact__mobile">
                    <PhonelinkRingIcon className = "contact__icon"/>
                        <p>
                            +30 9645419898
                        </p>
                    </div>


                    <div className = "contact__button">

                    <Button onClick={() => history.push("/")}
                    variant = "outlined">Home</Button>

                    </div>
                        
                    
                    
            </div>
        </div>
    )
}

export default Contact;
