import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../middleware/requestHandler";
import "./allproduct.css"
function AllProduct() {
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
    <div className="product_container">
      {data.map((e) => {
        return (
          <>
            {
                <Link to={`/product/${e._id}`}>
                  <div className="product_container_box">
                  
                    <img src={`http://localhost:7860/images/${e.images[0]}`} />

                    <div className="product_name">
                      Rs. <span>{e.item_price}</span>
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
