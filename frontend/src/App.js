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
import React, { useState } from "react";
import ProductDetail from "../src/components/ProductDetails/ProductDetail";
import AllProduct from "./components/AllProduct/AllProduct";
import Addcartproduct from "./components/Addcartproduct/Addcartproduct";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Carousel />
            <Trending />
            <ProductCard topic={"Top Categories"} status={"top"} />
            <ProductCard topic={"New Arrival"} status={"arrival"} />
   
            <Banner />
            <Footer />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/cart">
            <Addcartproduct />
          </Route>
          <Route exact path="/products">
          <Header />
            <AllProduct />
          </Route>
          <Route path="/product/:productId" component={ProductDetail} />
          <Route exact path="/product">
            <ProductCard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
