import React from 'react'
import './header.css'
function Sidebar({value}) {
    
    return (<>
         <div className="sidebar_container" style={{ background:"white",transform:`translateX(${value}%)`,
        transition:"all 0.5s ease"}}>
            <div className="sidebar_box">
                <ul>
                <li><a href="/" data-after="Home">Home</a></li>
               <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#contacts" data-after="Contact">Contact</a></li>
                <li><a href="/login" data-after="Contact">Login</a></li>
                <li><a href="/register" data-after="Contact">Register</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Sidebar
