import React, { useEffect, useState } from "react";
import "../main/Main.css";
import Navbar from "../main/Navbar";
import "./Page.css";
import { MDBCardImage } from "mdb-react-ui-kit";
import CountUp from "react-countup";
import { db } from "../../Firebase";
import { getDoc, doc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import Loader from "../main/Loader";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Epage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [columnCount, setColumnCount] = useState(3);
  const [textWidth, setTextWidth] = useState("37rem");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openPopUp = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closePopUp = () => {
    setIsOpen(false);
  };

  // Slick Carousel settings
  const settings = {
    initialSlide: selectedImageIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: true,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docref = doc(db, "events", id);
        const eventsSnapshot = await getDoc(docref);

        if (eventsSnapshot.exists()) {
          const eventData = eventsSnapshot.data();
          setEvent(eventData);
        }
      } catch (error) {
        setError("Error fetching events");
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setColumnCount(2); // Use 2 columns for phone screens
        setTextWidth("100%");
      } else {
        setColumnCount(3); // Use 3 columns for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial column count

    // Cleanup listener on unmount
    fetchData();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className="bg-CSR"
      style={{ minHeight: "600px", position: "relative" }}
    >
      <Navbar />
      <div
        className="clear captionP"
        style={{ paddingTop: "280px", clear: "both" }}
      />
      <div className="container" style={{ maxWidth: "1210px", width: "100%" }}>
        <div
          style={{
            width: "100%",
            height: "600px",
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
          }}
        >
          <img
            src={event.mainImage}
            alt="Carousel Background"
            style={{
              width: "100%",
              height: "600px",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,

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
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            className="captionPL"
            style={{ paddingLeft: "15px", color: "white" }}
          >
            {/* <div
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
              {event.programType}
            </div> */}
            {/* <div style={{}} className="fs-5 mt-2">
              {event.partner}
            </div> */}
            <div
              style={{
                paddingTop: "10px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "700",
                fontSize: "38px",
                lineHeight: "40px",
                letterSpacing: "-0.78px",
                color: "rgb(255, 255, 255)",
                width: `${textWidth}`,
              }}
            >
              {event.title}
            </div>
            {/* <div className="mt-2">
              <span style={{}} className="fs-6">
                {event.eventVenue}
              </span>{" "}
              ,
              <span style={{}} className="mx-2 fs-6">
                {new Date(event.eventDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "6rem" }}>
        <div className="row justify-content-center">
          {/* Single card containing all sections */}
          <div className="col-lg-10 col-md-12">
            <div
              className="card rounded py-4 fixed-card"
              style={{ background: "rgb(71 104 176)" }}
            >
              <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center text-white">
                {/* Section 1 */}
                <div
                  className="d-flex justify-content-center align-items-center text-center mb-3 mb-md-0"
                  style={{ flex: 0.9 }}
                >
                  <div className="me-3"></div>
                  <div>
                    <h3 className="fs-2 fs-md-1 fw-bold mb-0">
                      <CountUp
                        start={0}
                        end={event.beneficiarynum}
                        duration={3}
                        separator=","
                      />
                    </h3>
                    <p className="fs-6 fs-md-5 fixed-title-container">
                      {event.beneficiarytext}
                    </p>
                  </div>
                </div>

                {/* Vertical separator */}
                <div
                  className="vertical-separator mx-4 d-none d-md-block"
                  style={{
                    width: "2px",
                    backgroundColor: "#fff",
                    height: "80px",
                  }}
                ></div>

                {/* Section 2 */}
                <div
                  className="d-flex justify-content-center align-items-center text-center mb-3 mb-md-0"
                  style={{ flex: 0.9 }}
                >
                  <div>
                    <div className="d-flex align-items-center">
                      <h3 className="fs-2 fs-md-1 fw-bold mb-0">
                        <CountUp
                          start={0}
                          end={event.value}
                          duration={3}
                          separator=","
                        />
                      </h3>
                      <span className="mx-2 fs-2">
                        <i className="fa fa-inr" aria-hidden="true"></i>
                      </span>
                      <span className="mx-2 fs-2">/</span>
                      <h3 className="fs-2 fs-md-1 fw-bold mb-0">
                        <CountUp
                          start={0}
                          end={event.quantity}
                          duration={3}
                          separator=","
                        />
                      </h3>
                      <span className="fs-3 mx-1 fs-md-1 fw-bold mb-0">
                        {event.unittype}
                      </span>
                    </div>
                    <p className="fs-6 fs-md-5 fixed-title-container">
                      {event.quantvaluetext}
                    </p>
                  </div>
                </div>

                {/* Vertical separator */}
                <div
                  className="vertical-separator mx-4 d-none d-md-block"
                  style={{
                    width: "2px",
                    backgroundColor: "#fff",
                    height: "80px",
                  }}
                ></div>

                {/* Section 3 */}
                <div
                  className="d-flex justify-content-center align-items-center text-center"
                  style={{ flex: 0.9 }}
                >
                  <div>
                    <h3 className="fs-3 fs-md-2 fw-bold mb-0">
                      {event.partner}
                    </h3>
                    <p className="fs-6 fs-md-5 text-center fixed-title-container">
                      <span>{event.eventVenue}</span> -{" "}
                      <span style={{}} className="mx-2 fs-6">
                        {new Date(event.eventDate).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container  ">
        <div className="containerBody mt-5">
          <Link
            to="/"
            className="btn"
            style={{ backgroundColor: "rgb(222 153 57)", color: "white" }}
          >
            &lt; &lt; Back to CSR Page
          </Link>
        </div>
        <div className="containerBody mt-2 py-4">
          <h2 className="text-primary  pb-1" style={{ fontSize: "22px" }}>
            Program Details <i class="bi bi-exclamation-circle"></i>
          </h2>
          <hr />
          <div className="bodytextPara">{event.description}</div>

          {/* <div className="bodytext aos-init aos-animate">
            The Tata group’s activities relate to education, livelihoods and
            skill development, rural development, water and sanitation,
            healthcare, and strengthening services.
          </div> */}
        </div>
      </div>

      <div className="container">
        <div className="containerBody mt-2 py-2  ">
          <h2
            className="text-primary pb-1 fw-light"
            style={{ fontSize: "22px" }}
          >
            Capturing the Essence of Our Community Efforts
          </h2>
          <div className="yellow-line" />
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-9 col-md-9 mt-2 mb-5">
            <div style={{ columnCount: columnCount, columnGap: "5px" }}>
              {event.images.map((image, index) => (
                <div
                  key={index}
                  style={{ breakInside: "avoid", marginBottom: "10px" }}
                >
                  <MDBCardImage
                    src={image}
                    alt={image.alt}
                    fluid
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      cursor: "pointer",
                      borderRadius: "4px",
                    }}
                    onClick={() => openPopUp(index)}
                  />
                  
                </div>
              ))}
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="popup-container" onClick={closePopUp}>
            <div
              className="carousel-popup"
              onClick={(e) => e.stopPropagation()}
            >
              <Slider {...settings}>
                {event.images.map((image, index) => (
                  <div key={index} className="carousel-image-wrapper">
                    <img
                      src={image}
                      alt={image.alt}
                      className="carousel-image"
                    />
                     {/* <div className="watermark">Your Watermark</div> */}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .popup-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(2px);
        }

        .carousel-popup {
          width: 90%;
          max-width: 800px;
        }

        .carousel-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 600px; /* Fixed height for all images */
          overflow: hidden;
        }

        .carousel-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* Ensures images maintain aspect ratio */
          width: auto;
          height: 100%; /* Ensures the image fills the height uniformly */
        }
         
      `}</style>
    </div>
  );
}

export default Epage;
