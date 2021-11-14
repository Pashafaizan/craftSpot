import React from 'react'
import "./trending.css"
import trending1 from '../../resources/icons/copperMugs.jpg'
import trending2 from '../../resources/icons/spoon.jpg'
import trending3 from '../../resources/icons/kitchen.jpg'
import trending4 from '../../resources/icons/wooden furnitures.jpg'
import { Link } from "react-router-dom";

function Trending() {
    return (
        <div className="trending_container">
            
           <h1>Product categories</h1>
            <div className="trending_produts">
            <Link style={{ textDecoration: 'none' }}  to={{
                  pathname: "/products",
                  state: { type: "COPPERWARE PRODUCTS" },
                }} className="container_box">
              
                <img src={trending1}/>
                <div className="product_name">Copperware Products</div>
            </Link>
      
            <Link style={{ textDecoration: 'none' }} to={{
                  pathname: "/products",
                  state: { type: "Cutlery and Napkin rings" },
                }}  className="container_box">
               
                <img src={trending2}/>
                <div className="product_name">Napkin rings</div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to={{
                  pathname: "/products",
                  state: { type: "KITCHENWARED" },
                }}  className="container_box">
               
                <img src={trending3}/>
                <div className="product_name">Kitchenwares</div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to={{
                  pathname: "/products",
                  state: { type: "wooden furnitures" },
                }}  className="container_box">
               
                <img src={trending4}/>
                <div className="product_name">wooden furnitures</div>
            </Link>
        </div>
        </div>
    )
}

export default Trending
