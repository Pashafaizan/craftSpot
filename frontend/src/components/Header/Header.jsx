import React, { useEffect, useRef, useState } from "react"; 
import {ReactComponent as WhatSvg} from "../../resources/icons/what.svg";
import {ReactComponent as UserSvg} from "../../resources/icons/user.svg";
import {ReactComponent as SearchSvg} from "../../resources/icons/search.svg";
import {ReactComponent as LikeSvg} from "../../resources/icons/like.svg";
  import {ReactComponent as CrossSvg} from "../../resources/icons/cross.svg";
import {ReactComponent as CompanyLogoSvg} from "../../resources/icons/companylogo.svg";
import {ReactComponent as SimpleMenuSvg} from "../../resources/icons/Menu.svg";
import "./header.css";

export default function Header() {
  const menuRef = useRef(null);
  const searchBarRef = useRef(null);
  const sideBarRef = useRef(null);
  const [searchState,setSearchState] = useState(false);
  const [menuState,setMenuState] = useState(false);

  useEffect(()=>{
    if(searchState) {
      menuRef.current.style.transform = "translateX(100%)";
      searchBarRef.current.style.tranform = "translateX(0px)";
    } else {
      menuRef.current.style.transform = "translateX(0px)";
      searchBarRef.current.style.tranform = "translateX(-100%)";
    }
  },[searchState])

  useEffect(()=>{
    if(menuState) {
      sideBarRef.current.style.transform = "translateX(0px)";
      sideBarRef.current.style.opacity = "1";
      document.body.style.touchAction = "none";
    } else {
      sideBarRef.current.style.transform = "translateX(-100%)";
      sideBarRef.current.style.opacity = "0";
      document.body.style.touchAction = "auto";
    }
  },[menuState])

  return <>
   <div ref={menuRef} style={{position:"fixed",top:0,left:0,width:"100vw",backgroundColor:"white",borderBottom:"solid 1px #E5E5E5",transition:"0.5s",height:53}}>
    <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",marginTop:"4px"}}>
      <div style={{marginLeft:20}}>
        <span className="hide-logo" onClick={()=>setMenuState(!menuState)}><SimpleMenuSvg /> </span>
        <span className="company-logo"><CompanyLogoSvg /></span>
      </div>
      <div style={{marginRight:10,display:"flex",flexGrow:1,justifyContent:"flex-end",alignItems:"center"}}>
        <span onClick={()=>setSearchState(true)}><SearchSvg /></span>  
        <span><WhatSvg /></span>  
        <span><LikeSvg /></span>  
        <span><UserSvg /></span>  
      </div>
    </div>
    <div ref={searchBarRef} style={{display:"flex",backgroundColor:"white",alignItems:"center",marginTop:"0px",position:"fixed",top:0,left:0,width:"100%",borderBottom:"solid 1px #E5E5E5",transition:"0.5s",transform:"translateX(-100%)"}}>
      <input type="text" placeholder="Search here..." ></input>
      <span onClick={()=>setSearchState(false)}><CrossSvg /></span>
    </div>
   </div>

    <div ref={sideBarRef} className="sub-header">
      <span className="hide-logo" style={{marginLeft:10}} onClick={()=>setMenuState(false)}><CrossSvg /></span>
      <div className="sub-header-item">
        <div> Products </div>
        <div> Exhibition </div>
        <div> About Us </div>
        <div> Contact Us </div>
      </div>
    </div>
   
  </>
}


