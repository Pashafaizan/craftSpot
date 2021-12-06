import React, { useEffect, useState } from "react";
import "./productcard.css";
import { Link } from "react-router-dom";
import circle from "../../resources/icons/circle.png";
import trending2 from "../../resources/icons/50_off.png";
import fifty_off from "../../resources/icons/trending2.png";
import { fetchData } from "../../middleware/requestHandler";

function ProductCard({ topic, status }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData("/list", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((data) => {
      console.log('data here')
      console.log(data);
      setData(data);
    });
  }, []);
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          marginTop: 30,
          fontFamily: "PT Sans Caption",
          
          fontWeight: "lighter",
        }}
      >
        {" "}
        {topic}
      </h3>
      <div className="product_container">
        {data.map((e) => {
          return (
            <>
              {e.show_type === status && (
                <>
                  
                    <div className="product_container_box">
                    
                      <img
                        src={`${process.env.REACT_APP_API_KEY}/images/${e.images[0]}`}
                      />
                   
                      <div>{e.item_name}</div>
                      <div className="product_name">
                        Rs. {e.item_price}
                      </div>
                      <Link to={`/product/${e._id}`}>
                     
                      <button className="btn_details"><span>Details</span></button>
                      </Link>
                    </div>
                    <div>
        
                    </div>
                 
                
                </>
              )}
            </>
          );
        })}
       
   
      </div>
    </>
  );
}

export default ProductCard;
