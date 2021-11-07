import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Carousel from "../src/components/carousel/Carousel";
import Header from "../src/components/Header/Header";
import ProductCard from "../src/components/ProductCard/ProductCard";
import Trending from "../src/components/Trending/Trending";
import ApplinceceSlider from "../src/components/ApplicenceSlider/ApplinceceSlider";
import Banner from "../src/components/Banner/Banner";
import Footer from "../src/components/Footer/Footer";
import Form from "../src/components/Form/Form";
import React, { useState, useEffect } from "react";
import ProductDetail from "../src/components/ProductDetails/ProductDetail";
import AllProduct from "./components/AllProduct/AllProduct";
import Addcartproduct from "./components/Addcartproduct/Addcartproduct";
import Login from "./components/Marchandise/Login/Login";
import Signup from "./components/Marchandise/Signup/Signup";
import SellerDashboard from "./components/Marchandise/SellerDashboard/SellerDashboard";
import { useMemo } from "react";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  const [typeProduct,setTypeProduct]=useState('this');
  
   function productType(type) {
     console.log("this is a product type");
     console.log(typeProduct);
    setTypeProduct(type)
  
  }
// const filterData = useMemo((type)=>{
//   setTypeProduct(type)
// },[])
  const HeaderFist = useMemo(() => {return <Header setProductType={productType}/>})

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Header /> */}
            {HeaderFist}
            <Carousel />
            <Trending />
            <ProductCard
              topic={"BAR PRODUCTS & ACCESSORIES"}
              status={"BAR PRODUCTS & ACCESSORIES"}
            />
            <ProductCard
              topic={"METAL FURNITURES"}
              status={"METAL FURNITURES"}
            />
            <Footer />
          </Route>
          {/* <Route exact path="/form">
            <Form />
          </Route> */}
          <Route exact path="/cart">
            <Addcartproduct />
          </Route>
          <Route exact path="/about">
          <Header />
          <About/>
          </Route>

          <Route exact path="/contact">
          <Header />
          <ContactUs/>
          </Route>

          <Route exact path="/products">
            {/* <Header/> */}
            {HeaderFist}
            <AllProduct typePr={typeProduct}/>
          </Route>
          <Route path="/product/:productId" component={ProductDetail} />
          <Route exact path="/product">
            <ProductCard />
          </Route>
          <Route exact path="/marchandise/login">
            <Login />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/product/form">
            <Form />
          </Route>
          <Route exact path="/marchandise/signup">
            <Signup />
          </Route>
          <Route exact path="/seller/dashboard">
            <SellerDashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
