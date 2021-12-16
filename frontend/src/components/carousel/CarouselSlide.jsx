import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carousel.css";
import cover1 from "../../assets/images/cover1.jpg";
import cover3 from "../../assets/images/Cover3.JPG";
// import cover2 from "../../assets/images/test1.JPG";
function CarouselSlide() {
  return (
    <div className="slider">
   
      <Carousel fade variant="primary" >
  <Carousel.Item interval={5000}>
    <img
 height="inherit"
    transform= "translate(-50%, -50%)"

      className="d-block w-100"
      src={cover3}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img

height="inherit"

      className="d-block w-100"
      src={cover1}
      alt="Second slide"
    />
    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
 
</Carousel>
</div>
 
  )
}

export default CarouselSlide
