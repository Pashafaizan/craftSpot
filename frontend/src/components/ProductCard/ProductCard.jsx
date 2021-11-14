import React, { useEffect, useState } from "react";
import "./productcard.css";
import { Link } from "react-router-dom";
import circle from "../../resources/icons/circle.png";
// import fifty_off from '../../resources/icons/50_off.png'
// import trending2 from '../../resources/icons/trending2.png'
import trending2 from "../../resources/icons/50_off.png";
import fifty_off from "../../resources/icons/trending2.png";
import { fetchData } from "../../middleware/requestHandler";
// {topic}
function ProductCard({ topic, status }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData("/list", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((data) => {
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
                      {/* <div style={{marginLeft:65,marginBottom:-65,zIndex:99,alignSelf:"start",backgroundImage:"url("+ circle+")",padding:7 , width: 50,height:50,backgroundSize:"cover"}}>
                       <img src={fifty_off} style={{width:35,height:35}} />
                   </div>    */}
                      <img
                        src={`http://localhost:7860/images/${e.images[0]}`}
                      />
                   
                      <div>product brand name</div>
                      <div className="product_name">
                        Rs. <span>{e.item_price}</span>
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
       
        {/* <div className="product_container_box">
                
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg"/>
                <div className="product_name"><span>RS 548</span></div>
            </div>
            <div className="product_container_box">
                
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg"/>

                <div className="product_name"><span>RS 548</span></div>
            </div>
            <div className="product_container_box">
                
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg"/>
                <div className="product_name"><span>RS 548</span></div>
            </div> */}
      </div>
    </>
  );
}

export default ProductCard;
