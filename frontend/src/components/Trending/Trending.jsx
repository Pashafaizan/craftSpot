import React from "react";
import "./trending.css";
import trending1 from "../../resources/icons/HomeAssoceries.jpg";
import trending2 from "../../resources/icons/Furniture.jpg";
import trending3 from "../../resources/icons/kitchen and bar.jpg";
import trending4 from "../../resources/icons/HomeDecoration.jpg";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";

function Trending() {
  return (
    <div className="trending_container">
       <Heading text={"Top Categories"} />
      <div className="trending_produts">
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: "/products",
            state: { type: "Home Accessories" },
          }}
          className="container_box"
        >
          <img src={trending1} />
          <div className="product_name">Home Accessories</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: "/products",
            state: { type: "Furniture" },
          }}
          className="container_box"
        >
          <img src={trending2} />
          <div className="product_name">Furniture</div>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: "/products",
            state: { type: "Kitchen & Bar" },
          }}
          className="container_box"
        >
          <img src={trending3} />
          <div className="product_name">Kitchen & Bar</div>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: "/products",
            state: { type: "Home Decor" },
          }}
          className="container_box"
        >
          <img src={trending4} />
          <div className="product_name">Home Decor</div>
        </Link>
     
        
       
      </div>
    </div>
  );
}

export default Trending;
