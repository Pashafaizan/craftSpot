import React from 'react'
import company_logo from "../../resources/icons/company_logo.png";
import "./banner.css";
function Banner() {
    return (
        <div className="banner_container">
             <img src={company_logo} alt="company logo"></img>
             <div className="banner_name">
             <div className="trust_one">Yours Trusted <span>One</span></div>
             </div>
            
            
        </div>
    )
}

export default Banner
