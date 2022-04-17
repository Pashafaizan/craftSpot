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
import Footer from "../Footer/Footer"

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
 
  useEffect(() => {
    fetchData(`/product?id=${productId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((json) => {
 
  
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
           
             <ProductDescription data={productData} />
            <div className="purchase_btn">
              <button
               
                onClick={() => {
                 
                  setPopUpState(true);
                }}
              >
                Send Query
              </button>
             
            </div>
          </div>
        </div>
      </div>
     
     <div className="description">
       <h4>Description</h4>
    {productData.item_description}
     </div>
     < Footer/>

  
 
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
