import React from 'react'
import "./trending.css"
import trending1 from '../../resources/icons/trending1.png'
import trending2 from '../../resources/icons/trending2.png'
import trending3 from '../../resources/icons/trending3.png'
import trending4 from '../../resources/icons/trending4.png'

function Trending() {
    return (
        <div className="trending_container">
         
            <div className="container_box">
                <div className="product_name">70% off Laptops</div>
                <img src={trending1}/>
            </div>
            <div className="container_box">
                <div className="product_name">50% off shirts</div>
                <img src={trending2}/>
            </div>
            <div className="container_box">
                <div className="product_name">25% off shirts</div>
                <img src={trending3}/>
            </div>
            <div className="container_box">
                <div className="product_name">35% off shirts</div>
                <img src={trending4}/>
            </div>
        </div>
    )
}

export default Trending
