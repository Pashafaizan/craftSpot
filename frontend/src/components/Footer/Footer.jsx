import React from "react";
import "./Footer.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="footer_row">
        <div className="row1">
          <h3 style={{ margin: 10 }}>Contact us</h3>
          <ul style={{ listStyle: "none" }}>
            <li style={{ margin: 10 }}>
              <LocalPhoneIcon
                style={{ fontSize: "1.4rem", width: "0.8em", margin: 5 }}
              />
              +919089149952
            </li>
            <li style={{ margin: 10 }}>
              <LocalPhoneIcon
                style={{ fontSize: "1.4rem", width: "0.8em", margin: 5 }}
              />
              +916398667487
            </li>
            <li style={{ margin: 10 }}>
              <LocationOnIcon style={{ margin: 5 }} />
              C1/112 Transport Nagar Moradabad Uttar Pradesh India.
            </li>
            <li style={{ margin: 10 }}>
              <EmailIcon style={{ margin: 5, color: "#B23121" }} />
              anas.pasha@craftspotmarket.com
            </li>
            <li style={{ margin: 10 }}>
              <EmailIcon style={{ margin: 5, color: "#B23121" }} />
              adeeba.pasha@craftspotmarket.com
            </li>
          </ul>
        </div>

        <div className="row2">
          <h3>Follow us</h3>
          <ui
            style={{
              listStyle: "none",
              fontSize: "3em",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <li className="follow">
              <YouTubeIcon
                href=""
                style={{ fontSize: "0.8em", margin: 5, color: "	#FF0000" }}
              />
              <FacebookIcon
                style={{ fontSize: "0.8em", margin: 5, color: "#3b5998 " }}
              />
         
              <Link href="https://www.instagram.com/craftspotofficial/">
                <InstagramIcon
                  style={{ fontSize: "0.8em", margin: 5, color: "#bc2a8d" }}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/craft-spot-473463226/">
                <LinkedInIcon
                  style={{ fontSize: "0.8em", margin: 5, color: " #0e76a8" }}
                />
              </Link>
            </li>
          </ui>
        </div>
      </div>
      <div className="rowFirst">
        <p style={{ textAlign: "center" }}>
          &copy;2021 All rights reserved | Design by CraftSpot
        </p>
      </div>
    </div>
  );
}
