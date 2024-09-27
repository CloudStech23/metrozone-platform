import React, { useEffect, useState } from "react";
import "../main/Main.css";
import Navbar from "../main/Navbar";
import img1 from "../../Images/caro-img/WhatsApp Image 2023-09-22 at 9.33.14 PM.jpeg";
import img2 from "../../Images/caro-img/UP GOVT FELICITATION.jpeg";
import img3 from "../../Images/caro-img/GOC 31SA.jpeg";
import img4 from "../../Images/caro-img/COMMANDER 8 MOUNTAIN ARTY BDE.jpeg";
import img5 from "../../Images/caro-img/WhatsApp Image 2023-09-22 at 9.33.14 PM.jpeg";
import img6 from "../../Images/caro-img/Medical Camp at District Hospital,Drass, Kargil 2014.jpeg";
import "./Page.css";
import { MDBCol, MDBCardImage } from "mdb-react-ui-kit";
import CountUp from "react-countup";

function Epage() {
  const [columnCount, setColumnCount] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setColumnCount(2); // Use 2 columns for phone screens
      } else {
        setColumnCount(3); // Use 3 columns for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial column count

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    {
      src: "https://www.tatasustainability.com/images/Banners/CSR-Banner.jpg",

      title: "Tech Innovation Conference",
      tag: "Health-Care",
      date: "12 Sept 2024",
      location: "Jammu Kashmir",
      partner: "Tata Consultancy Services",
    },
    {
      src: "https://www.tatasustainability.com/images/Banners/CSR-Banner.jpg", // Add more images with this format
      caption: "Description for the second image goes here.",
      title: "Title 2",
      tag: "Tag 2",
      date: "13 sept 2024",
      location: "Delhi",
    },
    // Add more images as needed
  ];
  const imageGridData = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
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
            {/* <span style={{}} className="my-2 mx-4 fs-4 d-block">
                Partnering with {images[currentIndex].partner}
              </span> */}
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
            <div className="mt-2">
              <span style={{}} className="fs-6">
                {images[currentIndex].location}
              </span>{" "}
              ,
              <span style={{}} className="mx-2 fs-6">
                {images[currentIndex].date}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ marginTop: "4rem" }}>
        <div className="container">
          <div className="row justify-content-center  text-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
              <div
                className="card py-4 rounded"
                style={{ background: "#ff762f" }}
              >
                <div className="card-body d-flex justify-content-center align-items-center text-white">
                  <div className="me-3">
                    <i class="fa fa-users display-2" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="fs-1 fw-bold mb-0"><CountUp start={0} end={40000} duration={3} separator="," /></h3>
                    <p className="fs-5">Millions of earners</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
              <div
                className="card   py-4 rounded"
                style={{ background: "#cb005c" }}
              >
                <div className="card-body d-flex justify-content-center align-items-center text-white">
                  <div className="me-3">
                    <i
                      class="bi bi-currency-rupee display-2"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h3 className="fs-1 fw-bold mb-0"><CountUp start={0} end={100000} duration={3} separator="," /></h3>
                    <p className="fs-5">Millions of earners</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
              <div
                className="card   py-4 rounded"
                style={{ background: "#2a226e" }}
              >
                <div className="card-body d-flex justify-content-center align-items-center text-white">
                  <div className="me-3">
                    <i class="fa fa-globe display-2" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="fs-2 fw-bold mb-0">Jammu Kashmir</h3>
                    <p className="fs-5">events in diff locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  ">
        <div className="containerBody mt-4 py-5">
          <h2 className="text-primary  pb-1" style={{ fontSize: "22px" }}>
            Program Details <i class="bi bi-exclamation-circle"></i>
          </h2>
          <hr />
          <div className="bodytextPara">
            Our CSR programmes aim to be relevant to local, national, and global
            contexts, keep disadvantaged communities as the focus based on
            globally agreed sustainable development principles and be
            implemented in partnership with governments, NGOs, and other
            relevant stakeholders. Tata companies are involved in a wide variety
            of community development and environment preservation projects.
          </div>

          <div className="bodytextPara aos-init aos-animate">
            In FY19, the group has spent INR 1,095 crore on CSR expenditure and
            has positively impacted 11.7 million lives.
          </div>

          <div className="bodytext aos-init aos-animate">
            The Tata group’s activities relate to education, livelihoods and
            skill development, rural development, water and sanitation,
            healthcare, and strengthening services.
          </div>
        </div>
      </div>

      <div className="container">
        <div className="containerBody mt-2 py-2  ">
          <h2 className="text-primary pb-1" style={{ fontSize: "22px" }}>
            Other Initiatives in Education and Holistic Development
          </h2>
          <div className="yellow-line" />
        </div>

        <div className="row justify-content-center">
          <div
            className="col-10 col-md-9 mt-2 mb-5"
            style={{
              maxHeight: "35rem",
              overflowY: "scroll",
              scrollbarWidth: "thin",
            }}
          >
            <div
              style={{
                columnCount: columnCount, // Three columns for medium and larger screens
                columnGap: "10px", // Adjust spacing between columns
              }}
            >
              {imageGridData.map((image, index) => (
                <div
                  key={index}
                  style={{
                    breakInside: "avoid",
                    marginBottom: "10px",
                  }}
                >
                  <MDBCardImage
                    src={image.src}
                    alt={image.alt}
                    fluid
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      cursor: "pointer",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Epage;
