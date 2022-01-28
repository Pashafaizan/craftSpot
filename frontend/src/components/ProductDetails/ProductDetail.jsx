import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../middleware/requestHandler";
import Header from "../Header/Header";
import "./productDetail.css";
import ProductDescription from "../ProductDescription/ProductDescription";
import ba from "../ImageCard/ImageCard";
// import { selectedProducts, removeSelectedProducts } from "../../actions/index";
import { useSelector, useDispatch } from "react-redux";
import ImageCard from "../ImageCard/ImageCard";
import Addcartproduct from "../Addcartproduct/Addcartproduct";
import { useHistory } from "react-router-dom";
import Popup from "../Popup/Popup";

function ProductDetail() {
  let history = useHistory();
  const dispatch = useDispatch();

  const { productId } = useParams();
  const [popUpState, setPopUpState] = useState(false);
  const [image, setImage] = useState(false);
  const [imageName, setImageName] = useState([]);
  const [productData, setProductData] = useState([]);

  const [singleImage, setSingleImage] = useState([]);
  const productitems = useSelector((state) => state);
  // const [form,setForm] = useState({to_name:'CraftSpot',from_email:'',phone_number:'',message:'',product_name:'General'});
  useEffect(() => {
    fetchData(`/product?id=${productId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((json) => {
      console.log("this is json images")
      console.log(json);
  
      setProductData(json);
      setImageName(json.images);
      setSingleImage(json.images[0]);

 
    });
  }, []);
  const payload = [
    productData.item_name,
    productData.item_color,
    productData.material,
  ];
  console.log(productData);
  return (
    <div>
      <Header searchItem={()=>{}}/>

      <div className="product-container">
        <div className="productDetails">
          <div className="product-left-container">
            <ImageCard
              image={imageName}
              callback={(imagename, open = false) => {
                setSingleImage(imagename);
              }}
            />
            <img
              className="product_img"
              src={`${process.env.REACT_APP_API_KEY}/api/v1/images/product/${singleImage}`}
            />
          </div>
          <div className="product-right-container">
            <div className="product_name">{productData.item_name}</div>
            <div className="product-price">
              <strong>Rs. </strong> <span>{productData.item_price}</span>
            </div>
            <div>Availability</div>
            <div>{productData.material}</div>
            <div className="purchase_btn">
              <button
                style={{ color: "white", backgroundColor: "dodgerblue" }}
                onClick={() => {
                 
                  setPopUpState(true);
                }}
              >
                Send query
              </button>
             
            </div>
          </div>
        </div>
      </div>

      <div className="product-description">
        <h3>Product Description</h3>
        <ProductDescription data={productData} />
      </div>
 
      {popUpState && (
        <Popup
          open={popUpState}
          setOpen={(state) => {
            setPopUpState(state);
          }}
          data={productData}
        />
      )}
    </div>
  );
}

export default ProductDetail;
