import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as WhatSvg } from "../../resources/icons/what.svg";
import { ReactComponent as UserSvg } from "../../resources/icons/user.svg";
import { ReactComponent as SearchSvg } from "../../resources/icons/search.svg";
import { ReactComponent as LikeSvg } from "../../resources/icons/like.svg";
import { useHistory } from "react-router-dom";
import { ReactComponent as CrossSvg } from "../../resources/icons/cross.svg";
import { ReactComponent as CompanyLogoSvg } from "../../resources/icons/craftSpotBl.svg";
import { ReactComponent as SimpleMenuSvg } from "../../resources/icons/Menu.svg";
import companyLogo from "../../assets/images/craftSpotBl.png"
import craftLogo from "../../assets/images/craftSpot.png";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import "./header.css";
import { Link } from "react-router-dom";
import { fetchData } from "../../middleware/requestHandler";

export default function Header(props) {
  console.log(props);

  const menuRef = useRef(null);
  const searchBarRef = useRef(null);
  const sideBarRef = useRef(null);
  const useProducts = useRef(null);
  const [searchState, setSearchState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const router = useHistory()
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [type, setType] = useState("BAR PRODUCTS & ACCESSORIES");
 const [effectSearch,setEffectSearch]=React.useState(false);
  const [myOptions, setMyOptions] = useState([])
  useEffect(() => {
    if (searchState) {
      menuRef.current.style.transform = "translateX(100%)";
      searchBarRef.current.style.tranform = "translateX(0px)";
    } else {
      menuRef.current.style.transform = "translateX(0px)";
      searchBarRef.current.style.tranform = "translateX(-100%)";
    }
  }, [searchState]);

  useEffect(() => {
    if (menuState) {
      sideBarRef.current.style.transform = "translateX(0px)";
      sideBarRef.current.style.opacity = "1";
      document.body.style.touchAction = "none";
    } else {
      sideBarRef.current.style.transform = "translateX(-100%)";
      sideBarRef.current.style.opacity = "0";
      document.body.style.touchAction = "auto";
    }
  }, [menuState]);

  const getDataFromAPI = () => {
  
  
    fetchData("/list", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
     
    
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_name)
       

        myOptions.push(res[i].item_name)
      
      }
      setMyOptions(myOptions)
    })
    setEffectSearch(true)
  
   
  }

React.useEffect(()=>{ props.searchItem(true,myOptions);},[effectSearch])



  return (
    <>
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          backgroundColor: "white",
          borderBottom: "solid 1px #E5E5E5",
          transition: "0.5s",
          height: 53,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "4px",
          }}
        >
          <div style={{ marginLeft: 20 }}>
            <span
              className="hide-logo"
              onClick={() => setMenuState(!menuState)}
            >
              <SimpleMenuSvg />{" "}
            </span>
            <span className="company-logo" onClick={()=>router.push('/')}>
              <CompanyLogoSvg style={{height:50,width:100}} />
           
            </span>
          </div>
          <div
            style={{
              marginRight: 10,
              display: "flex",
              flexGrow: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <span onClick={() => setSearchState(true)}>
              <SearchSvg />
            </span>
            <span>
              <WhatSvg />
            </span>
            <span>
              <LikeSvg />
            </span>
            <span>
              <UserSvg />
            </span>
          </div>
        </div>
        <div
          ref={searchBarRef}
          style={{
            display: "flex",
            backgroundColor: "white",
            alignItems: "center",
            marginTop: "0px",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            borderBottom: "solid 1px #E5E5E5",
            transition: "0.5s",
            transform: "translateX(-100%)",
          }}
        >
          {/* <input type="text" placeholder="Search here..." onChange={(e)=>{


          }}></input> */}

<Autocomplete
        style={{ width: "100%" }}
        freeSolo
        autoComplete
        getOptionLabel={(option) => typeof option === 'string'
                  || option instanceof String ? option : ""}
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />

         <span onClick={() => setSearchState(false)}>
            <CrossSvg />
          </span>
        </div>
      </div>

      <div ref={sideBarRef} className="sub-header">
        <span
          className="hide-logo"
          style={{ marginLeft: 10 }}
          onClick={() => setMenuState(false)}
        >
          <CrossSvg />
        </span>
        <div className="sub-header-item">

          <div className="dropdown">
            <div className="dropbtn" onClick={()=>{
              setProductsDropdown(productsDropdown => !productsDropdown)
            }} >
              <span className="dropbtn-child">Products</span>
              <i className="fa fa-caret-down"></i>
            </div>
            <div className="dropdown-content" ref={useProducts}>
              <Link
                to={{
                  pathname: "/products",
                  state: { type: "BAR PRODUCTS & ACCESSORIES" },
                }}
                onClick={()=>{setMenuState(false)}}
              >
                Bar Products and Accessories
              </Link>

              <Link
                to={{
                  pathname: "/products",
                  state: { type: "Cutlery and Napkin rings" },
                }}
                onClick={()=>{setMenuState(false)}}
              >
                Cutlery and Napkin rings
              </Link>
              <Link  to={{
                  pathname: "/products",
                  state: { type: "KITCHENWARED" },
                }}
                onClick={()=>{setMenuState(false)}}
                >Kitchenwares</Link>
              <Link  to={{
                  pathname: "/products",
                  state: { type: "WOODEN FURNITURES" },
                }}
                onClick={()=>{setMenuState(false);}}
                >Wooden Furnitures</Link>
              <Link  to={{
                  pathname: "/products",
                  state: { type: "COPPERWARE PRODUCTS" },
                }}
                onClick={()=>{setMenuState(false)}}
                >Copperware Products</Link>
              <Link  to={{
                  pathname: "/products",
                  state: { type: "METAL ITEMS" },
                }}
                onClick={()=>{setMenuState(false)}}
                >METAL ITEMS</Link>
                     <Link  to={{
                  pathname: "/products",
                  state: { type: "MIRRORS & DECORATIVE" },
                }}
                onClick={()=>{setMenuState(false)}}
                >MIRRORS and DECORATIVE</Link>
            </div>
          </div>
          <a  className="outline" href="/exibition" style={{textDecoration:"none"}}>Exhibition</a>   
          <a  className="outline" href="/about" style={{textDecoration:"none"}}> About Us</a>   
          <a href="/contact" style={{textDecoration:"none"}}> Contact</a>
          
        </div>
      </div>
    </>
  );
}
