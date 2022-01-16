// import React, { useEffect, useRef, useState } from "react";
// import { ReactComponent as WhatSvg } from "../../resources/icons/what.svg";
// import { ReactComponent as UserSvg } from "../../resources/icons/user.svg";
// import { ReactComponent as SearchSvg } from "../../resources/icons/search.svg";
// import { ReactComponent as LikeSvg } from "../../resources/icons/like.svg";
// import { useHistory } from "react-router-dom";
// import { ReactComponent as CrossSvg } from "../../resources/icons/cross.svg";
// import { ReactComponent as CompanyLogoSvg } from "../../resources/icons/craftSpotBl.svg";
// import { ReactComponent as SimpleMenuSvg } from "../../resources/icons/Menu.svg";
// import companyLogo from "../../assets/images/craftSpotBl.png"
// import craftLogo from "../../assets/images/craftSpot.png";
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

// import "./header.css";
// import { Link } from "react-router-dom";
// import { fetchData } from "../../middleware/requestHandler";

// export default function Header(props) {
//   console.log(props);

//   const menuRef = useRef(null);
//   const searchBarRef = useRef(null);
//   const sideBarRef = useRef(null);
//   const useProducts = useRef(null);
//   const [searchState, setSearchState] = useState(false);
//   const [menuState, setMenuState] = useState(false);
//   const router = useHistory()
//   const [productsDropdown, setProductsDropdown] = useState(false);
//   // const [type, setType] = useState("BAR PRODUCTS & ACCESSORIES");
//  const [effectSearch,setEffectSearch]=React.useState(false);
//   const [myOptions, setMyOptions] = useState([])
//   useEffect(() => {
//     if (searchState) {
//       menuRef.current.style.transform = "translateX(100%)";
//       searchBarRef.current.style.tranform = "translateX(0px)";
//     } else {
//       menuRef.current.style.transform = "translateX(0px)";
//       searchBarRef.current.style.tranform = "translateX(-100%)";
//     }
//   }, [searchState]);

//   useEffect(() => {
//     if (menuState) {
//       sideBarRef.current.style.transform = "translateX(0px)";
//       sideBarRef.current.style.opacity = "1";
//       document.body.style.touchAction = "none";
//     } else {
//       sideBarRef.current.style.transform = "translateX(-100%)";
//       sideBarRef.current.style.opacity = "0";
//       document.body.style.touchAction = "auto";
//     }
//   }, [menuState]);

//   const getDataFromAPI = () => {
  
  
//     fetchData("/list", {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     }).then((res) => {
     
    
//       for (var i = 0; i < res.length; i++) {
//         console.log(res[i].item_name)
       

//         myOptions.push(res[i].item_name)
      
//       }
//       setMyOptions(myOptions)
//     })
//     setEffectSearch(true)
  
   
//   }

// React.useEffect(()=>{ props.searchItem(true,myOptions);},[effectSearch])



//   return (
//     <>
//       <div
//         ref={menuRef}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           backgroundColor: "white",
//           borderBottom: "solid 1px #E5E5E5",
//           transition: "0.5s",
//           height: 53,
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-start",
//             alignItems: "center",
//             marginTop: "4px",
//           }}
//         >
//           <div style={{ marginLeft: 20 }}>
//             <span
//               className="hide-logo"
//               onClick={() => setMenuState(!menuState)}
//             >
//               <SimpleMenuSvg />{" "}
//             </span>
//             <span className="company-logo" onClick={()=>router.push('/')}>
//               <CompanyLogoSvg style={{height:50,width:100}} />
           
//             </span>
//           </div>
//           <div
//             style={{
//               marginRight: 10,
//               display: "flex",
//               flexGrow: 1,
//               justifyContent: "flex-end",
//               alignItems: "center",
//             }}
//           >
//             <span onClick={() => setSearchState(true)}>
//               <SearchSvg />
//             </span>
//             <span>
//               <WhatSvg />
//             </span>
//             <span>
//               <LikeSvg />
//             </span>
//             <span>
//               <UserSvg />
//             </span>
//           </div>
//         </div>
//         <div
//           ref={searchBarRef}
//           style={{
//             display: "flex",
//             backgroundColor: "white",
//             alignItems: "center",
//             marginTop: "0px",
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             borderBottom: "solid 1px #E5E5E5",
//             transition: "0.5s",
//             transform: "translateX(-100%)",
//           }}
//         >
//           {/* <input type="text" placeholder="Search here..." onChange={(e)=>{


//           }}></input> */}

// <Autocomplete
//         style={{ width: "100%" }}
//         freeSolo
//         autoComplete
//         getOptionLabel={(option) => typeof option === 'string'
//                   || option instanceof String ? option : ""}
//         autoHighlight
//         options={myOptions}
//         renderInput={(params) => (
//           <TextField {...params}
//             onChange={getDataFromAPI}
//             variant="outlined"
//             label="Search Box"
//           />
//         )}
//       />

//          <span onClick={() => setSearchState(false)}>
//             <CrossSvg />
//           </span>
//         </div>
//       </div>

//       <div ref={sideBarRef} className="sub-header">
//         <span
//           className="hide-logo"
//           style={{ marginLeft: 10 }}
//           onClick={() => setMenuState(false)}
//         >
//           <CrossSvg />
//         </span>
//         <div className="sub-header-item">

//           <div className="dropdown">
//             <div className="dropbtn" onClick={()=>{
//               setProductsDropdown(productsDropdown => !productsDropdown)
//             }} >
//               <span className="dropbtn-child">Products</span>
//               <i className="fa fa-caret-down"></i>
//             </div>
//             <div className="dropdown-content" ref={useProducts}>
//               <Link
//                 to={{
//                   pathname: "/products",
//                   state: { type: "Brass Articles" },
//                 }}
//                 onClick={()=>{setMenuState(false)}}
//               >
//                 Brass Articles
//               </Link>

//               <Link
//                 to={{
//                   pathname: "/products",
//                   state: { type: "Cutlery & Napkin Rings" },
//                 }}
//                 onClick={()=>{setMenuState(false)}}
//               >
//                 Cutlery & Napkin Rings
//               </Link>
//               <Link  to={{
//                   pathname: "/products",
//                   state: { type: "Wood Craft" },
//                 }}
//                 onClick={()=>{setMenuState(false);}}
//                 >Wood Craft & Furniture</Link>
//               <Link  to={{
//                   pathname: "/products",
//                   state: { type: "Metal Articles" },
//                 }}
//                 onClick={()=>{setMenuState(false)}}
//                 >Metal Articles</Link>
//                      <Link  to={{
//                   pathname: "/products",
//                   state: { type: "Glass Articles" },
//                 }}
//                 onClick={()=>{setMenuState(false)}}
//                 >Glass Articles</Link>
//             </div>
//           </div>
//           <a  className="outline" href="/exibition" style={{textDecoration:"none"}}>Exhibition</a>   
//           <a  className="outline" href="/about" style={{textDecoration:"none"}}> About Us</a>   
//           <a href="/contact" style={{textDecoration:"none"}}> Contact</a>
          
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';
import { ReactComponent as CompanyLogoSvg } from "../../resources/icons/craftSpotBl.svg";
import { Link } from "react-router-dom";
import "./header.css"
import { Button } from '@material-ui/core';

export default function Header() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);
  const [state,setState] = useState({query:''})
  const history = useHistory();

  const product_categories = [
    'Brass Articles','Cutlery & Napkin Rings','Metal Articles','Wood Craft & Furniture','Glass Articles'
  ]

  const handleSearch = (e) => {
    // e.preventDefault();
    if(state.query)
      history.push(`search/${state.query}`)
  }

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href='/'><CompanyLogoSvg style={{height:40,width:80}} />CraftSpot</MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  About Us
                </MDBNavbarLink>
              </MDBNavbarItem> */}
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='https://api.whatsapp.com/send/?phone=+919089149952'>
                  Contact Whatsapp
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='https://mail.google.com/mail/?view=cm&fs=1&to=anas.pasha@craftspotmarket.com'>
                  Contact Email
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/about'>
                  About Us
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <div className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='Search Products' onChange={(e)=>setState({query:e.target.value})} value={state.query} aria-label='Search' />
              <Button color='primary'  onClick={handleSearch} variant="contained">Search</Button>
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className="subheader">
      {
                      product_categories.map((v,k)=>{
                        return (<>
                          <MDBDropdownItem key={k}>
                            <Link  to={{
                              pathname: "/products",
                              state: { type: v },
                            }}
                            >{v}</Link>
                          </MDBDropdownItem>
                        </>)
                      })
                    }
      </div>
        <div className="mobile-subheader">
          <div className="dropdown">
          <button className="dropbtn">Products <i className="fa fa-caret-down"></i></button>
          <div className="dropdown-content">
          {
                      product_categories.map((v,k)=>{
                        return (<>
                        <a>
                          <MDBDropdownItem key={k}>
                            <Link  to={{
                              pathname: "/products",
                              state: { type: v },
                            }}
                            >{v}</Link>
                          </MDBDropdownItem>
                          </a>
                        </>)
                      })
                    }
          </div>
        </div>
      </div>
    </>
  );
}