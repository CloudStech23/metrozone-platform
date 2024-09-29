import React, { useEffect, useState } from "react";
import "../main/Main.css";
import Navbar from "../main/Navbar";
import "./Page.css";
import { MDBCardImage } from "mdb-react-ui-kit";
import CountUp from "react-countup";
import { db } from "../../Firebase";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";


function Epage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [columnCount, setColumnCount] = useState(3);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const docref = doc(db, 'events', id);
        const eventsSnapshot = await getDoc(docref);

        if (eventsSnapshot.exists()) {
          const eventData = eventsSnapshot.data();
          setEvent(eventData);
        }
      } catch (error) {
        setError('Error fetching events');
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };
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
    fetchData();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }



  // const images = [
  //   {
  //     src: img6,

  //     title: "Medical Camp in Urban Area",
  //     tag: "Health-Care",
  //     date: "12 Sept 2024",
  //     location: "Jammu Kashmir",
  //     partner: "Metrozone Group",
  //   },
  //   {
  //     src: "https://www.tatasustainability.com/images/Banners/CSR-Banner.jpg", // Add more images with this format
  //     caption: "Description for the second image goes here.",
  //     title: "Title 2",
  //     tag: "Tag 2",
  //     date: "13 sept 2024",
  //     location: "Delhi",
  //   },
  //   // Add more images as needed
  // ];
  // const imageGridData = [
  //   { src: img1 },
  //   { src: img2 },
  //   { src: img3 },
  //   { src: img4 },
  //   { src: img5 },
  //   { src: img6 },
  // ];

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
            src={event.mainImage}
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
              {event.programType}
            </div>
            <div style={{}} className="fs-5 mt-2">
              {event.partner}
            </div>
            <div
              className="bannerT topP20 col-4"
              style={{
                paddingTop: "10px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "700",
                fontSize: "43px",
                lineHeight: "40px",
                letterSpacing: "-0.78px",
                color: "rgb(255, 255, 255)",
              }}
            >
              {event.title}
            </div>
            <div className="mt-2">
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
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "2.7rem" }}>
        <div className="row justify-content-center">
          {/* Single card containing all sections */}
          <div className="col-lg-10 col-md-12">
            <div
              className="card rounded py-4"
              style={{ background: "rgb(71 104 176)" }}
            >
              <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center text-white">
                {/* Section 1 */}
                <div
                  className="d-flex justify-content-center align-items-center text-center mb-3 mb-md-0"
                  style={{ flex: 1 }}
                >
                  <div className="me-3">
                    <i className="fa fa-users display-2" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="fs-1 fs-md-1 fw-bold mb-0">
                      {" "}
                      {/* Adjusted font size for mobile */}
                      <CountUp
                        start={0}
                        end={event.beneficiary}
                        duration={3}
                        separator=","
                      />
                    </h3>
                    <p className="fs-6 fs-md-5">
                      Beneficiaries took part in the event
                    </p>{" "}
                    {/* Adjusted font size for mobile */}
                  </div>
                </div>

                {/* Vertical separator */}
                <div
                  className="vertical-separator mx-4 d-none d-md-block" // Hide on mobile
                  style={{
                    width: "2px",
                    backgroundColor: "#fff",
                    height: "80px",
                  }}
                ></div>

                {/* Section 2 */}
                <div
                  className="d-flex justify-content-center align-items-center text-center mb-3 mb-md-0"
                  style={{ flex: 1 }}
                >
                  <div className="me-3">
                    <i
                      className="bi bi-currency-rupee display-2"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h3 className="fs-1 fs-md-1 fw-bold mb-0">
                      {" "}
                      {/* Adjusted font size for mobile */}
                      <CountUp
                        start={0}
                        end={event.value}
                        duration={3}
                        separator=","
                      />
                    </h3>
                    <p className="fs-6 fs-md-5">Costs incurred for the event</p>{" "}
                    {/* Adjusted font size for mobile */}
                  </div>
                </div>

                {/* Vertical separator */}
                <div
                  className="vertical-separator mx-4 d-none d-md-block" // Hide on mobile
                  style={{
                    width: "2px",
                    backgroundColor: "#fff",
                    height: "80px",
                  }}
                ></div>

                {/* Section 3 */}
                <div
                  className="d-flex justify-content-center align-items-center text-center"
                  style={{ flex: 1 }}
                >
                  <div className="me-3">
                    <i className="fa fa-globe display-2" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="fs-2 fs-md-2 fw-bold mb-0">{event.eventVenue}</h3>{" "}
                    {/* Adjusted font size for mobile */}
                    <p className="fs-6 fs-md-5 text-center">
                      Where  our CSR initiative for
                      community support
                    </p>{" "}
                    {/* Adjusted font size for mobile */}
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
            {event.description}
          </div>

          {/* <div className="bodytext aos-init aos-animate">
            The Tata group’s activities relate to education, livelihoods and
            skill development, rural development, water and sanitation,
            healthcare, and strengthening services.
          </div> */}
        </div>
      </div>

      <div className="container">
        <div className="containerBody mt-2 py-2  ">
          <h2 className="text-primary pb-1 fw-light" style={{ fontSize: "22px" }}>
            Capturing the Essence of Our Community Efforts
          </h2>
          <div className="yellow-line" />
        </div>

        <div className="row justify-content-center">
          <div
            className="col-10 col-md-9 mt-2 mb-5"
          // style={{
          //   maxHeight: "35rem",
          //   overflowY: "scroll",
          //   scrollbarWidth: "thin",
          // }}
          >
            <div
              style={{
                columnCount: columnCount, // Three columns for medium and larger screens
                columnGap: "10px", // Adjust spacing between columns
              }}
            >
              {event.images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    breakInside: "avoid",
                    marginBottom: "10px",
                  }}
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