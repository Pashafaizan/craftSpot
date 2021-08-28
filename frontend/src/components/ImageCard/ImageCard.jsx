import React from "react";
import "./imageCard.css";
// import
function ImageCard(props) {
  console.log(props.image);
  return (
    <div className="image_container">
      {/* {console.log(props.image)} */}
      {props.image.map((item, index) => {
        console.log(item, index);
        return (
          <div
            className="image_box"
            key={index}
            onClick={() => {
              props.callback(item, true);
            }}
          >
            {/* {console.log(item)} */}
            <img
              src={`http://localhost:7860/images/${item}`}
              style={{ width: 95 }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ImageCard;
