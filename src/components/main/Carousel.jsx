import React, { useEffect, useState } from "react";
import "./Main.css";
import Navbar from "./Navbar";
import img2 from "../../Images/caro-img/GOC 31SA.jpeg";
import img3 from "../../Images/caro-img/Stationary Distribution at Western Laddakh Schools 2016.jpeg";
import img1 from "../../Images/caro-img/UP GOVT FELICITATION.jpeg";

function Carousel() {
  const images = [
    {
      src: img1,
      caption:
        "For over 150 years, we have been serving the communities in which we operate. Community is pivotal to the Tata mission and is at the heart of everything we do, how we think and who we are.",
      title: "CSR",
      tag: "Social",
    },
    {
      src: img2,
      caption:
        "For over 150 years, we have been serving the communities in which we operate. Community is pivotal to the Tata mission and is at the heart of everything we do, how we think and who we are.",
      title: "CSR",
      tag: "Army",
    },
    {
      src: img3,
      caption:
        "For over 150 years, we have been serving the communities in which we operate. Community is pivotal to the Tata mission and is at the heart of everything we do, how we think and who we are.",
      title: "CSR",
      tag: "Education",
    },
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFade(true);
        }, 700);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  return (
    <div
      className="bg-CSR"
      style={{ minHeight: "464px", position: "relative" }}
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
    >
      <Navbar />
      <div
        className="clear captionP"
        style={{ paddingTop: "123px", clear: "both" }}
      />
      <div className="container" style={{ maxWidth: "1210px", width: "100%" }}>
        <div
          style={{
            width: "100%",
            height: "464px",
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
          }}
        >
          <img
            src={images[currentIndex].src}
            alt="Carousel Background"
            style={{
              width: "100%",
              height: "464px",
              objectFit: "cover",
              opacity: fade ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              objectPosition: "top",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgb(0 0 0 / 50%)",
              zIndex: 1,
            }}
          />
        </div>
        <div style={{ position: "relative", zIndex: 2, marginBottom: "5rem" }}>
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
              className="bannerT topP20 "
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
                borderLeft: "6px solid rgb(255, 255, 255)",
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
