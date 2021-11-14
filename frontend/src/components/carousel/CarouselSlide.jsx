// import React, { useEffect, useState } from "react";
// import "./carousel.css";

// const Carousel = () => {
//   const [imgSlidePos, setImgSlidePos] = useState(0);
//   const [transition, setTransition] = useState("ease-in 3s");
//   const [animationTime, setAnimationTime] = useState(5000);

//   let slideCrouselImage = [
//     "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg",
//     "https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Grocery_1500x600._CB669573043_.jpg",
//     "http://shinelites.com/images/2.jpg",
//     "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Milaap_Hero_pc1x._CB669734096_.jpg",
//     "http://shinelites.com/images/home1-banner2.jpg",
//     "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg",
//   ];

//   useEffect(() => {
//     window.setTimeout(() => {
//       goRight();
//     }, animationTime);
//   }, [imgSlidePos]);

//   function goRight() {
//     if (imgSlidePos === -100 * (slideCrouselImage.length - 1)) {
//       setAnimationTime(0);
//       setTransition("none");
//       setImgSlidePos(0);
//     } else {
//       setAnimationTime(5000);
//       setImgSlidePos(imgSlidePos - 100);
//       setTransition("ease-in 3s");
//     }
//   }

//   return (
//     <>
//       <div className="slider">
//         {slideCrouselImage.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className="slide"
//               style={{
//                 transform: `translateX(${imgSlidePos}%)`,
//                 backgroundImage: "url(" + item + ")",
//                 transition: transition,
//               }}
//             >
              
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Carousel;


import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carousel.css";
import cover1 from "../../assets/images/cover1.jpg";
import cover3 from "../../assets/images/Cover3.JPG";
import cover2 from "../../assets/images/test1.JPG";
function CarouselSlide() {
  return (
    <div className="slider">
   
      <Carousel fade variant="dark" >
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
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
    height="inherit"
 


      className="d-block w-100"
      src={cover2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
 
  )
}

export default CarouselSlide
