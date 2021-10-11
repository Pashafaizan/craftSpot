import React from 'react'
import Card from "../../ProductCard/ProductCard"
import Header from "../../Header/Header"
import SellerHeader from "./SellerHeader/SeallerHeader"
function SellerDashboard() {
    return (
        <div>
            <SellerHeader/>
            {/* <Header/> */}
            <Card/>
           
        </div>
    )
}

export default SellerDashboard
