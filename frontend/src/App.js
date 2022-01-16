import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import CarouselSlide from "../src/components/carousel/CarouselSlide";
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
import ReactCarousel from "./components/carousel/ReactCarousel"
import TopProducts from "./components/TopProducts/TopProducts";
import Search from "./components/Search/Search";

function App() {
  const [typeProduct,setTypeProduct]=useState('this');
  const [isSearch,setIsSearch]=React.useState(false);
  const [searchData,setSearchData]=React.useState([]);
   function productType(type) {
     console.log("this is a product type");
     console.log(typeProduct);
    setTypeProduct(type)
  
  }
// const filterData = useMemo((type)=>{
//   setTypeProduct(type)
// },[])

const searchItem = (check,data)=>{
  console.log("this is search item");
  console.log(check);
  console.log(data);
 setIsSearch(check);
 setSearchData(data);
}
React.useEffect(()=>{


  
},[])

  const HeaderFist = useMemo(() => {return <Header searchItem={()=>{}} setProductType={productType}/>})

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Header /> */}
            {HeaderFist}
            <CarouselSlide />
            <Trending />
            <TopProducts />
            <ProductCard
              topic={"Cutlery & Napkin Rings"}
              status={"Cutlery & Napkin Rings"}
            />
            <ProductCard
              topic={"Metal Articles"}
              status={"Metal Articles"}
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
          <Header searchItem={()=>{}}/>
          <About/>
          <Footer />
          </Route>

          <Route exact path="/contact">
          <Header searchItem={()=>{}}/>
          <ContactUs/>
          </Route>

          <Route exact path="/products">
            <Header searchItem={searchItem}/>
            {/* {HeaderFist} */}
            <AllProduct typePr={typeProduct} isSearch={isSearch} searchData={searchData} />
            <Footer />
          </Route>
          <Route path="/product/:productId" component={ProductDetail} />
          <Route exact path="/product">
            {/* <ProductCard search={isSearch}/> */}
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
          <Route exact path="/search/:query">
            <Header />
            <Search />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
