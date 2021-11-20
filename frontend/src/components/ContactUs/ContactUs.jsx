import React from "react";
import "./contact.css";
function ContactUs() {
  return (
    <div className="contact">
      <div>
        <div>
          <h2>Craft Spot Inc</h2>
          <h6>Work and Factory </h6>
          <p className="address">
            c1/112 Transport Nagar Moradabad (U.P) India
          </p>
        </div>

        <div>
          <h3>Contact Number</h3>
          <p className="contact_border">
            
            <div> Mob: </div>
           <div>+919089149952</div> 
          </p>
          <p className="contact_border">
            {" "}
            <div> Email: </div>
           <div> anaspasha1810@gmail.com</div>
          </p>
          <p className="contact_border">
         
            <div> Email: </div>
            <div>   faizanpasha10044@gmail.com</div>
          </p>
          <p className="contact_border">
            {" "}
            <div>  website: </div>
            <div>  www.craftofficialmarket.com</div>
          </p>
        </div>
      </div>
      <div className="contact_form">
        <h3>Any Query</h3>
        <input
          placeholder="Name"
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            border: "2px solid black",
          }}
        ></input>
        <input
          placeholder="Email"
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            border: "2px solid black",
          }}
        />
        <textarea
          placeholder="Message"
          rows="2"
          cols="28"
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            border: "2px solid black",
          }}
        />
        <button className="submit_btn">Submit</button>
      </div>
    </div>
  );
}

export default ContactUs;
