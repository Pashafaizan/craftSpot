import React from "react";
import "./Footer.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="footer_row">
      <div className="row1">
       
          <h3 style={{margin:10}}>Contact us</h3>
          <ul style={{ listStyle: "none" }}>
            <li style={{margin:10}}>
              <LocalPhoneIcon style={{ fontSize: "1.4rem", width: "0.8em",margin:5 }} />
              9089149952
            </li>
            <li style={{margin:10}}>
              <LocalPhoneIcon style={{ fontSize: "1.4rem", width: "0.8em",margin:5 }}  />
              6398667487
            </li>
            <li style={{margin:10}}>
              <LocationOnIcon  style={{margin:5}} />
              C1/112 Transport Nagar Moradabad Uttar Pradesh India.
            </li>
            <li style={{margin:10}}>
              <EmailIcon  style={{margin:5}} />
              anaspasha1810@gmail.com
            </li>
            <li style={{margin:10}}>
              <EmailIcon style={{margin:5}}/>
              faizanpasha10044@gmail.com
            </li>
          </ul>
        
      </div>

      <div className="row2">
        <h3>Follow us</h3>
        <ui style={{ listStyle: "none", fontSize: "3em" }}>
          <li className="follow">
            <YouTubeIcon href="" style={{ fontSize: "0.8em",margin:5}} />
            <FacebookIcon style={{ fontSize: "0.8em",margin:5 }} />
            <TwitterIcon style={{ fontSize: "0.8em", margin:5 }} />
          </li>
        </ui>
      </div>
</div>
      <div className="rowFirst">
        <p style={{textAlign:"center"}}>
          &copy;2021 All rights reserved | Design by CraftSpot
        </p>
      </div>
    </div>
  );
}
