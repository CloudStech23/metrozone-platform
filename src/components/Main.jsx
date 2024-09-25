import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import ImageCarousel from "./ImageCarousel";
import Accordion from "./Accordion";

export default function Main() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <div className="mb-4">
      <MDBNavbar expand="lg" light style={{ background: "rgb(51 51 194)",height:'4rem' }}>
        <MDBContainer fluid className="mx-4 text-white">
          <MDBNavbarBrand href="#" className="me-4 text-white">
            METROZONE GROUP
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon fas icon="bars" className="text-white" />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={openBasic}>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  className="me-3 text-white"
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active href="#" className="me-3 text-white">
                  Appreciation Letter
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link text-white"
                    role="button"
                  >
                    Event Categories
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link className="text-black">
                      Health-Camp
                    </MDBDropdownItem>
                    <MDBDropdownItem link className="text-black">
                      Sports
                    </MDBDropdownItem>
                    <MDBDropdownItem link className="text-black">
                      Army
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="#" className="me-3 text-white">
                  Top Highlights
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div className="px-4">
        <ImageCarousel />
      </div>
      <div className="px-5 ">
        <Accordion />
      </div>
    </div>
  );
}
