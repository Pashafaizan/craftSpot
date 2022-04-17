import React from "react";
import "./imageCard.css";
// import
function ImageCard(props) {
 
  return (
    <div className="image_container">
    
      {props.image.map((item, index) => {
       
        return (
          <div
            className="image_box"
            key={index}
            onClick={() => {
              props.callback(item, true);
            }}
          >
           
            <img
              src={`${process.env.REACT_APP_API_KEY}/api/v1/images/product/${item}`}
              style={{ width: 95 }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ImageCard;
