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
            
            
            <Link  to={{
                  pathname: "/products",
                  state: { type: "COPPERWARE PRODUCTS" },
                }} className="container_box">
                <div className="product_name">Copperware Products</div>
                <img src={trending1}/>
            </Link>
            <Link  to={{
                  pathname: "/products",
                  state: { type: "Cutlery and Napkin rings" },
                }}  className="container_box">
                <div className="product_name">Cutlery and Napkin rings</div>
                <img src={trending2}/>
            </Link>
            <Link to={{
                  pathname: "/products",
                  state: { type: "KITCHENWARED" },
                }}  className="container_box">
                <div className="product_name">Kitchenwares</div>
                <img src={trending3}/>
            </Link>
            <Link to={{
                  pathname: "/products",
                  state: { type: "wooden furnitures" },
                }}  className="container_box">
                <div className="product_name">wooden furnitures</div>
                <img src={trending4}/>
            </Link>
        </div>
    )
}

export default Trending
