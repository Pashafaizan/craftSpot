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
      {/* <div className="Container"> */}
        <div className="row">
          {/* colomn 1*/}
          <div className="col">
            <h3>Cotact us</h3>
            <ui style={{ listStyle: "none" }}>
              <li>
                <LocalPhoneIcon
                  style={{ fontSize: "1.4rem", width: "0.8em" }}
                />
                0591-9586846
              </li>
              <li>
                <LocationOnIcon />
                Bengaluru City in Karnataka
              </li>
              <li>
                <EmailIcon />
                therichliving@gmail.com
              </li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h3>Guidance</h3>
            <ui style={{ listStyle: "none" }}>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contract Agreement</li>
            </ui>
          </div>
          {/* colomn 3*/}
          <div className="col">
            <h3>Product Website</h3>
            <ui style={{ listStyle: "none" }}>
              <li>m.life</li>
              <li>315464646</li>
            </ui>
          </div>{" "}
          {/* colomn 4*/}
          <div className="col">
            <h3>Follow us</h3>
            <ui style={{ listStyle: "none", fontSize: "3em" }}>
              <li className="follow">
                <YouTubeIcon style={{ fontSize: "0.8em" }} />
                <FacebookIcon style={{ fontSize: "0.8em" }} />
                <TwitterIcon style={{ fontSize: "0.8em" }} />
              </li>
            </ui>
          </div>
        </div>
        <div className="row2">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} All rights reserved | Design by
            MSAF
          </p>
        {/* </div> */}
      </div>
    </div>
  );
}
