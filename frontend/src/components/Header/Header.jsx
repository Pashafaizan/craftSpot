import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as WhatSvg } from "../../resources/icons/what.svg";
import { ReactComponent as UserSvg } from "../../resources/icons/user.svg";
import { ReactComponent as SearchSvg } from "../../resources/icons/search.svg";
import { ReactComponent as LikeSvg } from "../../resources/icons/like.svg";
import { ReactComponent as CrossSvg } from "../../resources/icons/cross.svg";
import { ReactComponent as CompanyLogoSvg } from "../../resources/icons/companylogo.svg";
import { ReactComponent as SimpleMenuSvg } from "../../resources/icons/Menu.svg";

import "./header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  console.log(props);

  const menuRef = useRef(null);
  const searchBarRef = useRef(null);
  const sideBarRef = useRef(null);
  const useProducts = useRef(null);
  const [searchState, setSearchState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [type, setType] = useState("BAR PRODUCTS & ACCESSORIES");
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
            <span className="company-logo">
              <CompanyLogoSvg />
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
          <input type="text" placeholder="Search here..." onChange={(e)=>{

          }}></input>
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
              useProducts.current.style.display="block";
              console.log("faizan pahsa")
            }} >
              Products
              <i className="fa fa-caret-down"></i>
            </div>
            <div className="dropdown-content" ref={useProducts}>
              <Link
                to={{
                  pathname: "/products",
                  state: { type: "BAR PRODUCTS & ACCESSORIES" },
                }}
              >
                Bar Products and Accessories
              </Link>

              <Link
                to={{
                  pathname: "/products",
                  state: { type: "Cutlery and Napkin rings" },
                }}
              >
                Cutlery and Napkin rings
              </Link>
              <Link  to={{
                  pathname: "/products",
                  state: { type: "KITCHENWARED" },
                }}>Kitchenwares</Link>
              <Link  to={{
                  pathname: "/products",
                  state: { type: "wooden furnitures<" },
                }}>wooden furnitures</Link>
              <Link  to={{
                  pathname: "/products",
                  state: { type: "COPPERWARE PRODUCTS" },
                }}>Copperware Products</Link>
              <Link  to={{
                  pathname: "/products",
                  state: { type: "METAL FURNITURES" },
                }}>METAL FURNITURES</Link>
                     <Link  to={{
                  pathname: "/products",
                  state: { type: "MIRRORS & DECORATIVE" },
                }}>MIRRORS and DECORATIVE</Link>
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

// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import { Container, Row, Col,Nav, NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css";

// function Header() {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg">
//         <Container fluid>
//           <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: "100px" }}
//               navbarScroll
//             >
//               <Nav.Link href="#action1">Home</Nav.Link>
//               <Nav.Link href="#action2">Link</Nav.Link>
//               <NavDropdown title="Link" id="navbarScrollingDropdown">
//                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">
//                   Something else here
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="#" disabled>
//                 Link
//               </Nav.Link>
//             </Nav>
//             <Form className="d-flex">
//               <FormControl
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// export default function Header() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: "none", sm: "block" } }}
//           >
//             MUI
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: "none", md: "flex" } }}>
//             <IconButton
//               size="large"
//               aria-label="show 4 new mails"
//               color="inherit"
//             >
//               <Badge badgeContent={4} color="error">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="inherit"
//             >
//               <Badge badgeContent={17} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               {/* <AccountCircle /> */}
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }
