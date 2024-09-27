import React, { useEffect, useState } from "react";
import "../main/Main.css";
import Navbar from "../main/Navbar";
import img2 from "../../Images/caro-img/UP GOVT FELICITATION.jpeg";

function Epage() {
  const images = [
    {
      src: "https://www.tatasustainability.com/images/Banners/CSR-Banner.jpg",

      title: "Tech Innovation Conference",
      tag: "CSR",
    },
    {
      src: "https://www.tatasustainability.com/images/Banners/CSR-Banner.jpg", // Add more images with this format
      caption: "Description for the second image goes here.",
      title: "Title 2",
      tag: "Tag 2",
    },
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className="bg-CSR"
      style={{ minHeight: "464px", position: "relative" }}
    >
      <Navbar />
      <div
        className="clear captionP"
        style={{ paddingTop: "123px", clear: "both" }}
      />
      <div className="container" style={{ maxWidth: "1210px", width: "100%" }}>
        <img
          src={images[currentIndex].src}
          alt="Carousel Background"
          style={{
            width: "100%",
            height: "464px",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,

            transition: "opacity 1s ease-in-out",
            objectPosition: "top",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            className="captionPL"
            style={{ paddingLeft: "15px", color: "white" }}
          >
            <div
              className="captionBox"
              style={{
                border: "1px solid rgb(255, 255, 255)",
                padding: "5px 8px",
                display: "inline-block",
                fontFamily: "Lato, sans-serif",
                fontWeight: "300",
                fontSize: "11px",
                lineHeight: "12px",
                color: "rgb(255, 255, 255)",
                letterSpacing: "2px",
              }}
            >
              {images[currentIndex].tag}
            </div>
            <div
              className="bannerT topP20 col-4"
              style={{
                paddingTop: "20px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "700",
                fontSize: "43px",
                lineHeight: "40px",
                letterSpacing: "-0.78px",
                color: "rgb(255, 255, 255)",
              }}
            >
              {images[currentIndex].title}
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ marginTop: "6rem" }}>
        <div className="container">
          <div className="row justify-content-center  text-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="card bg-light py-4 rounded">
                <div className="card-body d-flex justify-content-center align-items-center text-primary">
                  <div className="me-3">
                    <i class="fa fa-users display-2" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="fs-1 fw-bold mb-0">100000</h3>
                    <p className="fs-5">Millions of earners</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="card bg-light py-4 rounded">
                <div className="card-body text-primary">
                  <h3 className="fs-1 fw-bold   mb-0">100+</h3>
                  <p className="fs-5">countries</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="card bg-light py-4 rounded">
                <div className="card-body text-primary">
                  <h3 className="fs-1 fw-bold  mb-0">1M+</h3>
                  <p className="fs-5">credentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Epage;
