import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { fetchData } from "../../middleware/requestHandler";
import Rating from '@mui/material/Rating';
import "./allproduct.css"
import {selectedProducts, removeSelectedProducts,setProducts} from "../../redux/action/productAction"
import Heading from "../Heading/Heading";
function AllProduct(props) {
  const dispatch = useDispatch();
  
  const imgRef =  React.useRef([...new Array(26)].map(() => React.createRef()));
  const [isShown, setIsShown] = useState(-1);
  const [data, setData] = useState([]);
  const location = useLocation();
  const {type} = location.state;
 
  useEffect(() => {
    fetchData("/list", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((data) => {
      dispatch(setProducts(data))
   
      setData(data);
    });
  }, []);

  useEffect(()=>{
    
    
      if(isShown != -1) {
         
        imgRef.current[isShown].current.src = `${process.env.REACT_APP_API_KEY}/api/v1/images/product/${data[isShown].images[Math.floor(Math.random() * data[isShown].images.length)]}`
      }  
    
    

  },[isShown])

  
  return (
    <>
    
       <div style={{ padding:'0px 10px'}}>
       <Heading text={type}/>
       </div>
    <div className="product_container"> 
 
      {data.map((e,i) => {
        return (
          <>
       
      
          
            {e.categories==type.replaceAll('and','&') &&
                <Link to={`/product/${e._id}`} style={{textDecoration:"none"}} onMouseEnter={() => setIsShown(i)} onMouseLeave={() => setIsShown(-1)}>
                  <div className="product_container_box">
                  
                    <img src={`${process.env.REACT_APP_API_KEY}/api/v1/images/product/${e.images[0]}`} ref={imgRef.current[i]} />

                    <div className="product_name">  
                      <div>{e.item_name}</div>
                   
                    </div>
                  </div>
                </Link>
                
             }</>
        );
      })}

    </div>
    </>
  );
}

export default AllProduct;
