import React, { useEffect, useState } from "react";
import "./Main.css";
import Navbar from "./Navbar";
import img2 from '../../Images/caro-img/UP GOVT FELICITATION.jpeg'

function Carousel() {
  const images = [
    {
      src: "https://www.tatasustainability.com/images/Banners/CSR-Banner.jpg",
      caption:
        "For over 150 years, we have been serving the communities in which we operate. Community is pivotal to the Tata mission and is at the heart of everything we do, how we think and who we are.",
      title: "CSR",
      tag: "Social",
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
  const [fade, setFade] = useState(true); // State to manage fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Trigger fade in
      }, 700); // Duration for fade out
    }, 4000); // Change the image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

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
            opacity: fade ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            objectPosition:"top"
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
              className="bannerT topP20"
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
          <div
            className="containerIn topP2515"
            style={{
              margin: "0px auto",
              maxWidth: "1045px",
              paddingTop: "25px",
            }}
          >
            <div
              className="bannerTextF"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: "400",
                fontSize: "16px",
                color: "rgb(255, 255, 255)",
                lineHeight: "22px",
                maxWidth: "360px",
                paddingLeft: "15px",
              }}
            >
              {images[currentIndex].caption}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
