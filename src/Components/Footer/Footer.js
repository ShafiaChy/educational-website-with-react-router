import React from 'react';
// fontawesome icons packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    // fontawesome icons
    const icon = <FontAwesomeIcon icon={faFacebook} />
    const icon2 = <FontAwesomeIcon icon={faInstagram} />
    const icon3 = <FontAwesomeIcon icon={faTwitter} />
    return (
        // Footer section
        <div className="text-center pt-10 pb-20 bg-black mt-72">
            <h1 className="text-white text-3xl">Study Buddies.</h1>
            <h1 className="text-white text-2xl">Follow us on: {icon} {icon2} {icon3}</h1>
            
             
        </div>
    );
};

export default Footer;