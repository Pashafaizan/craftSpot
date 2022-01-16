// import React from "react";
// import "./Footer.css";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
// import EmailIcon from "@material-ui/icons/Email";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import Link from "@material-ui/core/Link";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";

// export default function Footer() {
//   return (
//     <div className="main-footer">
//       <div className="footer_row">
//         <div className="row1">
//           <h3 style={{ margin: 10 }}>Contact us</h3>
//           <ul style={{ listStyle: "none" }}>
//             <li style={{ margin: 10 }}>
//               <LocalPhoneIcon
//               className="socialIcon"
//                 style={{ fontSize: "1.4rem", width: "0.8em", margin: 5,color:"blueviolet" }}
//               />
//               +919089149952
//             </li>
//             <li style={{ margin: 10 }}>
//               <LocalPhoneIcon
//               className="socialIcon"
//                 style={{ fontSize: "1.4rem", width: "0.8em", margin: 5,color:"blue" }}
//               />
//               +916398667487
//             </li>
//             <li style={{ margin: 10 }}>
//               <LocationOnIcon className="socialIcon" style={{ margin: 5,color:"green" }} />
//               C1/112 Transport Nagar Moradabad Uttar Pradesh India.
//             </li>
//             <li style={{ margin: 10 }}>
//               <EmailIcon className="socialIcon" style={{ margin: 5, color: "#B23121" }} />
//               anas.pasha@craftspotmarket.com
//             </li>
//             <li style={{ margin: 10 }}>
//               <EmailIcon className="socialIcon" style={{ margin: 5, color: "#B23121" }} />
//               adeeba.pasha@craftspotmarket.com
//             </li>
//           </ul>
//         </div>

//         <div className="row2">
//           <h3>Follow us</h3>
//           <ui
//             style={{
//               listStyle: "none",
//               fontSize: "3em",
//               cursor: "pointer",
//               textDecoration: "none",
//             }}
//           >
//             <li className="follow">
//               <YouTubeIcon
//               className="socialIcon"
//                 href=""
//                 style={{ fontSize: "0.8em", margin: 5, color: "	#FF0000" }}
//               />
//               <FacebookIcon
//               className="socialIcon"
//                 style={{ fontSize: "0.8em", margin: 5, color: "#3b5998 " }}
//               />
         
//               <Link href="https://www.instagram.com/craftspotofficial/">
//                 <InstagramIcon
//                 className="socialIcon"
//                   style={{ fontSize: "0.8em", margin: 5, color: "#bc2a8d" }}
//                 />
//               </Link>
//               <Link href="https://www.linkedin.com/in/craft-spot-473463226/">
//                 <LinkedInIcon
//                 className="socialIcon"
//                   style={{ fontSize: "0.8em", margin: 5, color: " #0e76a8" }}
//                 />
//               </Link>
//             </li>
//           </ui>
//         </div>
//       </div>
//       <div className="rowFirst">
//         <p style={{ textAlign: "center" }}>
//           &copy;2021 All rights reserved | Design by CraftSpot
//         </p>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {/* <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a> */}
          <a href='https://api.whatsapp.com/send/?phone=+919089149952' className='me-4 text-reset'>
            <i className='fab fa-whatsapp'></i>
          </a>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=anas.pasha@craftspotmarket.com' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='https://www.instagram.com/craftspotofficial' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://www.linkedin.com/in/craft-spot-473463226/' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a> */}
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>CraftSopt Market
              </h6>
              <p style={{textAlign:'justify'}}>
              CraftSpot is the best manufacturer, exporter and supplier of MDF wooden coaster set, Iron hamper basket, iron lotus design candle stand, wooden serving tray set and much more.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Top Products</h6>
              <p>
                <a href='/product-category/BRASS ARTICLE' className='text-reset'>
                  Brass Articles
                </a>
              </p>
              <p>
                <a href='/product-category/ALUMINUM CRAFTED' className='text-reset'>
                  Cutlery & Napkin
                </a>
              </p>
              <p>
                <a href='/product-category/WOODEN CRAFTED' className='text-reset'>
                  Metal Articles
                </a>
              </p>
              <p>
                <a href='/product-category/CAKE STAND' className='text-reset'>
                Wood Craft & Furniture
                </a>
              </p>
              <p>
                <a href='/product-category/CAKE STAND' className='text-reset'>
                  Glass Articles
                </a>
              </p>
            </div>

            {/* <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>&nbsp;</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Aluminium Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Wire Mesh Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Hexagon Glass Mirror
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Silver Products
                </a>
              </p>
            </div> */}

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Transport Nagar, Moradabad, UP
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                anas.pasha@craftspotmarket.com
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                adeeba.pasha@craftspotmarket.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +91 90891 49952
              </p>
              <p>
                <i className='fas fa-print me-3'></i> +91 63986 67487
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href=''>
          CraftSpotMarket.com
        </a>
      </div>
    </MDBFooter>
  );
}