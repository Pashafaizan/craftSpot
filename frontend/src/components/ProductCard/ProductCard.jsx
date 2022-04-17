import React, { useEffect, useState } from "react";
import "./productcard.css";
import { Link } from "react-router-dom";
import circle from "../../resources/icons/circle.png";
import trending2 from "../../resources/icons/50_off.png";
import fifty_off from "../../resources/icons/trending2.png";
import { fetchData } from "../../middleware/requestHandler";
import Heading from "../Heading/Heading";

function ProductCard({ topic, status,isSearch }) {
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

      <div style={{padding:'0px 10px',marginTop:30}}>
        <Heading text={topic} />
      </div>
      <div className="product_container">
        {data.map((e) => {
          console.log(e.categories,"categories");
          console.log(status,"status")
          return (
            <>
              {e.categories === status && (
                <>
                  
                    <div className="product_container_box">
                    
                      <img
                        src={`${process.env.REACT_APP_API_KEY}/api/v1/images/product/${e.images[0]}`}
                      />
                   
                      <div>{e.item_name}</div>
                
                      <Link to={`/product/${e._id}`}>
                     
                      <button className="btn_details"><span>Details</span></button>
                      </Link>
                    </div>
                    <div>
        
                    </div>
                 
                
                </>
              )}
            </> 
         
          )
        })}
       
   
      </div>
    </>

  );
}

export default ProductCard;
