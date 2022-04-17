

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
    'Home Accessories','Furniture','Kitchen & Bar','Decorative Hardware','Garden','Pets','Home Decor'
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
              {/* <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='https://api.whatsapp.com/send/?phone=+919089149952'>
                  Contact Whatsapp
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='https://mail.google.com/mail/?view=cm&fs=1&to=anas.pasha@craftspotmarket.com'>
                  Contact Email
                </MDBNavbarLink>
              </MDBNavbarItem> */}
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