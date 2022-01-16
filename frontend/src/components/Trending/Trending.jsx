import React from 'react'
import "./trending.css"
import trending1 from '../../resources/icons/copperMugs.jpg'
import trending2 from '../../resources/icons/spoon.jpg'
import trending3 from '../../resources/icons/kitchen.jpg'
import trending4 from '../../resources/icons/wooden furnitures.jpg'
import { Link } from "react-router-dom";
import Heading from '../Heading/Heading'

function Trending() {
    return (
        <div className="trending_container">
            
           {/* <h1>Product categories</h1> */}
           <Heading text={'Top Categories'}/>
            <div className="trending_produts">
            <Link style={{ textDecoration: 'none' }}  to={{
                  pathname: "/products",
                  state: { type: "Brass Articles" },
                }} className="container_box">
              
                <img src={trending1}/>
                <div className="product_name">Brass Articles</div>
            </Link>
      
            <Link style={{ textDecoration: 'none' }} to={{
                  pathname: "/products",
                  state: { type: "Cutlery & Napkin Rings" },
                }}  className="container_box">
               
                <img src={trending2}/>
                <div className="product_name">Cutlery & Napkin Rings</div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to={{
                  pathname: "/products",
                  state: { type: "Metal Articles" },
                }}  className="container_box">
               
                <img src={trending3}/>
                <div className="product_name">Metal Articles</div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to={{
                  pathname: "/products",
                  state: { type: "Wood Craft & Furniture" },
                }}  className="container_box">
               
                <img src={trending4}/>
                <div className="product_name">Wood Craft & Furniture</div>
            </Link>
        </div>
        </div>
    )
}

export default Trending
