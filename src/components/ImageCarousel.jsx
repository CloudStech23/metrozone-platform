import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import img1 from "../Images/caro-img/UP GOVT FELICITATION.jpeg";
import img2 from "../Images/caro-img/GOC 31SA.jpeg";
import img3 from "../Images/caro-img/COMMANDER 8 MOUNTAIN ARTY BDE.jpeg";
import img4 from "../Images/caro-img/WhatsApp Image 2023-09-22 at 9.33.14 PM.jpeg";
import img5 from "../Images/caro-img/Medical Camp at District Hospital,Drass, Kargil 2014.jpeg";
import "./Common.css"

function ImageCarousel() {
  const demoImages = [
    {
      src: img1,
      description:
        "An inspiring moment with Yogi Ji, where we discussed the importance of leadership and community empowerment. His vision for a progressive society resonated deeply",
    },
    {
      src: img2,
      description: "Image with Army chief",
    },
    {
      src: img3,
      description: "Image description 3",
    },
    {
      src: img4,
      description: "Description for Image 4",
    },
    {
      src: img5,
      description: "Description for Image 5",
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: (
      <div className="slick-arrow slick-next black-blur-background">→</div>
    ),
    prevArrow: (
      <div className="slick-arrow slick-prev black-blur-background">←</div>
    ),
  };

  return (
    <>
      {/* Recognition Header */}
      <div className="recognition text-center mt-5 mb-2 py-2">
        <h2
          className="fw-normal fs-2 border-bottom-half"
          style={{ fontFamily: "Mukta, sans-serif" }}
        >
          Our Honoring Recognition
        </h2>
      </div>

      {/* Slick Carousel */}
      <Slider {...settings}>
        {demoImages.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              style={{
                width: "100%",
                height: "300px", // Maintain a fixed height
                objectFit: "cover", // Ensures the image covers the container
                objectPosition: "top", // Show the top part of the image
              }}
            />
            <div className="description">{image.description}</div>
          </div>
        ))}
      </Slider>

      {/* Custom Styles */}
      <style jsx>{`
        .recognition h2 {
          font-size: 1.8rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 20px;
          color: #333;
        }
        .image-container {
          position: relative;
          padding: 10px; /* Add spacing */
        }
        .carousel-image {
          width: 100%;
          height: 250px; /* Reduce the height of the images */
          object-fit: cover; /* Ensure the image covers the entire area without distortion */
        }
        .description {
          position: absolute;
          bottom: 10px; /* Set to 10px for margin from bottom */
          left: 10px;
          right: 10px;
          padding: 10px;
          background: rgba(0, 0, 0, 0.7); /* Black with transparency */
          color: white;
          text-align: center;
          backdrop-filter: blur(5px); /* Blur effect for background */
        }

        .black-blur-background {
          background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black */
          backdrop-filter: blur(10px); /* Applies a blur effect */
          border-radius: 5px; /* Optional: adds rounded corners */
          padding: 10px; /* Optional: adds some padding */
          position: relative; /* Ensures positioning within parent */
          z-index: 3; /* Makes sure it's above other elements */
        }

        .slick-prev {
          left: 20px; /* Position left arrow */
          z-index: 2;
        }
        .slick-next {
          right: 20px; /* Position right arrow */
        }

        @media (max-width: 768px) {
          .carousel-image {
            height: 200px; /* Further reduce the image height for mobile */
          }
        }
      `}</style>
    </>
  );
}

export default ImageCarousel;
