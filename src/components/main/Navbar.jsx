import React, { useEffect, useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [padding, setPadding] = useState("1rem 13rem");

  // Handle window resize for responsive padding
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setPadding("0rem 1rem"); // Reduced padding for mobile
    } else {
      setPadding("1rem 13rem"); // Default padding for desktop
    }
  };

  // Attach event listener on component mount and cleanup on unmount
  useEffect(() => {
    handleResize(); // Set initial padding
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
    };
  }, []);

  // Toggle the state of the drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <>
      <MDBNavbar light bgColor="transparent" style={{zIndex:2}}>
        <MDBContainer
          fluid
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: padding, // Responsive padding
            position: "relative",
            marginTop: "2rem",
          }}
        >
          {/* Hamburger Menu */}
          <btn
            aria-label=""
            onClick={toggleDrawer(true)} // Open drawer on click
            style={{
              margin: "0",
              padding: "0",
              border: "none",
              backgroundColor: "transparent",
              color: "white",
              cursor:'pointer'
            }}
            className="text-white tg-btn"
          >
            <i class="fa fa-bars text-white fs-2"  aria-hidden="true"></i>
          </btn>

          {/* Tata Logo */}
          <MDBNavbarBrand
            href="https://www.tata.com/"
            target="_blank"
            style={{ marginLeft: "auto" }}
          >
            <img
              src="https://www.tatasustainability.com/images/TATA-logo.svg"
              height="30"
              alt="Tata Logo"
              loading="lazy"
              style={{ marginRight: "10px" }} // Adjust right margin as needed
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      {/* Material-UI Drawer from top */}
      <Drawer
        anchor="top" // Drawer slides from the top
        open={isDrawerOpen}
        onClose={toggleDrawer(false)} // Close drawer on click outside
        className=""
      >
        {/* <List>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List> */}

        <div
          className="text-white"
          style={{ padding: "3rem 12rem", background: "#1d2739 " }}
        >
          <a
            className=""
            style={{ cursor: "pointer" }}
            onClick={toggleDrawer(false)}
          >
            {/* <i class="fa fa-times fs-1 text-danger mb-3" aria-hidden="true"></i> */}
            <Button className=" bg-danger text-white mb-4">Close</Button>
          </a>
          <div className="row gx-5">
            <div className="col-2">
              <div className="">
                <h3 className="text-primary fw-bold">About us</h3> <hr />
                <div className="pt-1">
                  <div className="nav-text pb-2">
                    <a
                      href="https://www.tatasustainability.com/AboutUs/TheTataGroup"
                      className="text-white text-decoration-none"
                    >
                      The Tata Group
                    </a>
                  </div>
                  <div className="nav-text pb-2">
                    <a
                      href="https://www.tatasustainability.com/AboutUs/TataSustainabilityGroup"
                      className="text-white text-decoration-none"
                    >
                      Tata Sustainability
                      <br />
                      Group
                    </a>
                  </div>
                  <div className="nav-text pb-2">
                    <a
                      href="https://www.tatasustainability.com/AboutUs/OurApproach"
                      className="text-white text-decoration-none"
                    >
                      How We Approach Sustainability
                    </a>
                  </div>
                  <div className="nav-text pb-2">
                    <a
                      href="https://www.tatasustainability.com/AboutUs/ContactUs"
                      className="text-white text-decoration-none"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div>
                <h3 className="text-primary fw-bold">Focus Area</h3> <hr />
              </div>
              <div className="row bottomP15 borNav">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="navTitle bottomP18">
                    {/* <table width="100%" cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td width="10">
                            <svg
                              height="12"
                              width="4"
                              viewBox="0 0 4 12"
                              xmlns="https://www.w3.org/2000/svg"
                            >
                              <rect className="a" height="12" width="4" />
                            </svg>
                          </td>
                          <td className="text-decoration-none">
                            <a className="text-decoration-none text-white" href="https://www.tatasustainability.com/SocialAndHumanCapital/CSR#">
                              Environment
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                  <div className="bottomP8">
                    <a href="https://www.tatasustainability.com/Environment/ClimateChange">
                      <img
                        src="https://www.tatasustainability.com/images/Menu/ClimateChangeEnergy.png"
                        className="iconImage"
                      />
                    </a>
                  </div>
                  <div className="subNav">
                    <a href="https://www.tatasustainability.com/Environment/ClimateChange">
                      Climate Change <br />& Energy
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                  <div className="bottomP8">
                    <a href="https://www.tatasustainability.com/Environment/Water">
                      <img
                        src="https://www.tatasustainability.com/images/Menu/Water.png"
                        className="iconImage"
                      />
                    </a>
                  </div>
                  <div className="subNav">
                    <a href="https://www.tatasustainability.com/Environment/Water">
                      Water
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                  <div className="bottomP8">
                    <a href="https://www.tatasustainability.com/Environment/CircularEconomy">
                      <img
                        src="https://www.tatasustainability.com/images/Menu/circular-economy.png"
                        className="iconImage"
                      />
                    </a>
                  </div>
                  <div className="subNav">
                    <a href="https://www.tatasustainability.com/Environment/CircularEconomy">
                      Circular <br />
                      Economy
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                  <div className="bottomP8">
                    <a href="https://www.tatasustainability.com/Environment/Biodiversity">
                      <img
                        src="https://www.tatasustainability.com/images/Menu/Biodiversity.png"
                        className="iconImage"
                      />
                    </a>
                  </div>
                  <div className="subNav">
                    <a href="https://www.tatasustainability.com/Environment/Biodiversity">
                      Biodiversity
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                  <div className="bottomP8">
                    <a href="https://www.tatasustainability.com/Environment/Biodiversity">
                      <img
                        src="https://www.tatasustainability.com/images/Menu/Biodiversity.png"
                        className="iconImage"
                      />
                    </a>
                  </div>
                  <div className="subNav">
                    <a href="https://www.tatasustainability.com/Environment/Biodiversity">
                      Biodiversity
                    </a>
                  </div>
                </div>
              </div>{" "}
              <hr />
              <div className="row bottomP15 borNav">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="navTitle bottomP18">
                    {/* <table width="100%" cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td width="10">
                            <svg
                              height="12"
                              width="4"
                              viewBox="0 0 4 12"
                              xmlns="https://www.w3.org/2000/svg"
                            >
                              <rect className="a" height="12" width="4" />
                            </svg>
                          </td>
                          <td className="text-decoration-none">
                            <a className="text-decoration-none text-white" href="https://www.tatasustainability.com/SocialAndHumanCapital/CSR#">
                              Environment
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                  <div className="bottomP8">
                    <a href="https://www.tatasustainability.com/Environment/ClimateChange">
                      <img
                        src="https://www.tatasustainability.com/images/Menu/ClimateChangeEnergy.png"
                        className="iconImage"
                      />
                    </a>
                  </div>
                  <div className="subNav">
                    <a href="https://www.tatasustainability.com/Environment/ClimateChange">
                      Climate Change <br />& Energy
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                  <div className="bottomP8">
                    <a href="https://www.tatasustainability.com/Environment/Water">
                      <img
                        src="https://www.tatasustainability.com/images/Menu/Water.png"
                        className="iconImage"
                      />
                    </a>
                  </div>
                  <div className="subNav">
                    <a href="https://www.tatasustainability.com/Environment/Water">
                      Water
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                  <div className="bottomP8">
                    <a href="https://www.tatasustainability.com/Environment/CircularEconomy">
                      <img
                        src="https://www.tatasustainability.com/images/Menu/circular-economy.png"
                        className="iconImage"
                      />
                    </a>
                  </div>
                  <div className="subNav">
                    <a href="https://www.tatasustainability.com/Environment/CircularEconomy">
                      Circular <br />
                      Economy
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                  <div className="bottomP8">
                    <a href="https://www.tatasustainability.com/Environment/Biodiversity">
                      <img
                        src="https://www.tatasustainability.com/images/Menu/Biodiversity.png"
                        className="iconImage"
                      />
                    </a>
                  </div>
                  <div className="subNav">
                    <a href="https://www.tatasustainability.com/Environment/Biodiversity">
                      Biodiversity
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                  <div className="bottomP8">
                    <a href="https://www.tatasustainability.com/Environment/Biodiversity">
                      <img
                        src="https://www.tatasustainability.com/images/Menu/Biodiversity.png"
                        className="iconImage"
                      />
                    </a>
                  </div>
                  <div className="subNav">
                    <a href="https://www.tatasustainability.com/Environment/Biodiversity">
                      Biodiversity
                    </a>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
