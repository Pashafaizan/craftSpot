import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { fetchData } from "../../middleware/requestHandler";
import Rating from '@mui/material/Rating';
import "./allproduct.css"
import {selectedProducts, removeSelectedProducts,setProducts} from "../../redux/action/productAction"
function AllProduct(props) {
  const dispatch = useDispatch();
  console.log(props.typePr);
  const imgRef =  React.useRef([...new Array(26)].map(() => React.createRef()));
  const [isShown, setIsShown] = useState(-1);
  const [data, setData] = useState([]);
  const location = useLocation();
  const {type} = location.state;
  console.log(type);
  useEffect(() => {
    fetchData("/list", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((data) => {
      dispatch(setProducts(data))
      console.log(data);
      setData(data);
    });
  }, []);

  useEffect(()=>{
    
    
      if(isShown != -1) {
        console.log(data[isShown])
        imgRef.current[isShown].current.src = `${process.env.REACT_APP_API_KEY}/api/v1/images/product/${data[isShown].images[Math.floor(Math.random() * data[isShown].images.length)]}`
      }  
    
    

  },[isShown])

  console.log(data)
  return (
    <>
       <h1 style={{marginTop:120,marginLeft:40}}>{type}</h1>
    <div className="product_container"> 
 
      {data.map((e,i) => {
        return (
          <>
          {console.log(e.show_type)}
          
            {e.show_type==type &&
                <Link to={`/product/${e._id}`} style={{textDecoration:"none"}} onMouseEnter={() => setIsShown(i)} onMouseLeave={() => setIsShown(-1)}>
                  <div className="product_container_box">
                  
                    <img src={`${process.env.REACT_APP_API_KEY}/api/v1/images/product/${e.images[0]}`} ref={imgRef.current[i]} />

                    <div className="product_name">  
                      <div>{e.item_name}</div>
                      <div id="price">Rs.{e.item_price}</div>
                       <div id="price">Description : {e.item_description  }</div>
                       <Rating id="rating" name="half-rating-read" defaultValue={Math.floor(Math.random() *  (4.5 - 2.5 + 1) + 1.5)} precision={0.5} readOnly />
                    </div>
                  </div>
                </Link>
             }
          </>
        );
      })}
    </div>
    </>
  );
}

export default AllProduct;
