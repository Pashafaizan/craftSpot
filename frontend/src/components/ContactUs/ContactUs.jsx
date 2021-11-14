import React from 'react'
import './contact.css'
function ContactUs() {
    return (
        <div className="contact">
           <div style={{marginTop:10}} >
               <div>
               <h3>Craft Spot Inc</h3>
               <h2>Work and Factory </h2>
               <p>c1/112 Transport Nagar Moradabad (U.P) India</p>
               </div>

               <div>
                   <h3>Contact Number</h3>
                <p>  <span> Mob:</span>
                  +9089149952
                  </p>
                  <p>  <span> Email:</span>
                  anaspasha1810@gmail.com
                  </p>   
                   <p>  <span> Mob:</span>
                  faizanpasha10044@gmail.com
                  </p>
                  <p>  <span> website</span>
                  www.craftofficialmarket.com
                  </p>
               </div>
           </div>
           <div>
               <input placeholder="Name" style={{margin:10,padding:10,borderRadius:10,  border:"2px solid black"}}></input>
               <input placeholder="Email" style={{margin:10,padding:10,borderRadius:10, border:"2px solid black"}}/>
               <textarea placeholder="Message"  style={{margin:10,padding:10,borderRadius:10,border:"2px solid black"}}/>
               <button>Submit</button>
           </div>
        </div>
    )
}

export default ContactUs
