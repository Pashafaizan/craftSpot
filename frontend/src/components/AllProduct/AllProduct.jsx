import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../middleware/requestHandler";
import Rating from '@mui/material/Rating';
import "./allproduct.css"
function AllProduct() {
  const imgRef =  React.useRef([...new Array(26)].map(() => React.createRef()));
  const [isShown, setIsShown] = useState(-1);
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

  useEffect(()=>{
    
    
      if(isShown != -1) {
        console.log(data[isShown])
        imgRef.current[isShown].current.src = `http://localhost:7860/images/${data[isShown].images[Math.floor(Math.random() * data[isShown].images.length)]}`
      }  
    
    

  },[isShown])

  console.log(data)
  return (
    <div className="product_container"> 
      {data.map((e,i) => {
        return (
          <>
            {
                <Link to={`/product/${e._id}`} style={{textDecoration:"none"}} onMouseEnter={() => setIsShown(i)} onMouseLeave={() => setIsShown(-1)}>
                  <div className="product_container_box">
                  
                    <img src={`http://localhost:7860/images/${e.images[0]}`} ref={imgRef.current[i]} />

                    <div className="product_name">  
                      <div>{e.item_name}</div>
                      <div id="price">Rs.{e.item_price}</div>
                       <div id="price">Description : {e.item_description  }</div>
                       <Rating id="rating" name="half-rating-read" defaultValue={Math.floor(Math.random() *  (4.5 - 2.5 + 1) + 2.5)} precision={0.5} readOnly />
                    </div>
                  </div>
                </Link>
             }
          </>
        );
      })}
    </div>
  );
}

export default AllProduct;
