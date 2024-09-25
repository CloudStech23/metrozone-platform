import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon
} from "mdb-react-ui-kit";
import imgHigh from "../Images/EDUCATION.jpeg";
import letter from "../Images/APPRECIATION LETTER BY ISKCON TEMPLE PRESIDENT NAGPUR.jpeg";
import img1 from "../Images/EDUCATION SPONSORSHIP.jpeg";
import img2 from "../Images/EDUCATION 2.jpeg";
import img3 from "../Images/Medicines Sponsorship for Medical Camp at Kashmir 2022 .jpeg";
import img4 from "../Images/Archery Compettion during Vijay Diwas 2015.jpeg";
import img5 from "../Images/NMO LETTER.jpeg";
import img6 from "../Images/mountains-55067_640.webp";
import img7 from "../Images/EDUCATION_44.jpeg";

function Accordion() {
  const highlightsData = [
    {
      title: "Collaboration summit between government and startup founders",
      date: "26 Jan 24",
      image: imgHigh,
    },
    {
      title: "Collaboration summit between government and startup founders",
      date: "26 Jan 24",
      image: imgHigh,
    },
    {
      title: "Collaboration summit between government and startup founders",
      date: "26 Jan 24",
      image: imgHigh,
    },
    {
      title: "Collaboration summit between government and startup founders",
      date: "26 Jan 24",
      image: imgHigh,
    },
    // ... other highlights data
  ];

  const imageGridData = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
  ];

  // State management for the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="mt-5">
      <MDBRow className="gx-4">
        {/* Event Details Section */}
        <MDBCol md="8" sm="12">
          <h4 className="mb-3">Event Details</h4>
          <div className="accordion" id="accordionExample">
            {/* Accordion Item */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span>Government Startup Summit - New Delhi - 26 Jan 24</span>
                  <span className="accordion-icon" aria-hidden="true">
                    <MDBIcon fas icon="chevron-down" />
                  </span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {/* Three-Part Layout */}
                  <MDBRow>
                    {/* Second: Image Grid with Scroll */}
                    <MDBCol
                      md="7"
                      className="mb-3"
                      style={{
                        maxHeight: "400px",
                        overflowY: "scroll",
                        scrollbarWidth: "thin",
                      }}
                    >
                      <div
                        style={{
                          columnCount: 2,
                          columnGap: "2px",
                        }}
                      >
                        {imageGridData.map((image, index) => (
                          <div
                            key={index}
                            style={{
                              breakInside: "avoid",
                              marginBottom: "2px",
                            }}
                            onClick={() => openModal(image)}
                          >
                            <MDBCardImage
                              src={image.src}
                              alt={image.alt}
                              fluid
                              style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                cursor: "pointer", // Cursor pointer for clickable images
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </MDBCol>

                    {/* Third: Description Box */}
                    <MDBCol md="5" className="mb-3">
                      <div
                        style={{
                          padding: "15px",
                          borderRadius: "10px",
                        }}
                        className="shadow p-3 mb-5 bg-body rounded"
                      >
                        <MDBTypography tag="h6">
                          Categories: Government
                        </MDBTypography>
                        <p>
                          A summit focused on fostering collaboration between
                          government bodies and startup founders. Opening
                          keynote by Minister of Commerce, panel discussions
                          with top startup CEOs, and workshops on scaling
                          startups. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Numquam iure sed dolore omnis
                          tempora, excepturi magnam! Eligendi, aspernatur
                          tempore! Enim.
                        </p>
                        <MDBTypography tag="strong">Outcomes:</MDBTypography>
                        <ul>
                          <li>Launch of new startup funding schemes</li>
                          <li>MOU between government and startup bodies</li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>
              </div>
            </div>
          </div>
        </MDBCol>

        {/* Highlights Section */}
        <MDBCol md="4" sm="12" className="mt-4 mt-md-0">
          <MDBTypography tag="h4" className="mb-3">
            Highlights
          </MDBTypography>
          <div
            style={{
              maxHeight: "400px",
              overflowY: "auto",
              border: "1px solid black",
              padding: "15px",
              borderRadius: "10px",
            }}
            className="shadow"
          >
            <MDBRow className="g-3">
              {highlightsData.map((highlight, index) => (
                <MDBCol size="12" key={index}>
                  <MDBCard className="h-100">
                    <MDBCardBody className="d-flex justify-content-between align-items-center">
                      {/* Left Section: Text Info */}
                      <div style={{ paddingRight: "10px" }}>
                        <MDBTypography
                          tag="h6"
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "normal" }}
                        >
                          {highlight.title}
                        </MDBTypography>
                        <MDBTypography tag="small" className="text-muted">
                          {highlight.date}
                        </MDBTypography>
                      </div>
                      {/* Right Section: Image */}
                      <div style={{ flexShrink: 0 }}>
                        <MDBCardImage
                          src={highlight.image}
                          alt="Highlight"
                          fluid
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>

      {/* Modal for displaying larger image */}
      {modalIsOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <MDBCardImage
              src={selectedImage.src}
              alt="Selected"
              className="modal-image"
            />
            <MDBTypography tag="h6" className="modal-description">
              {selectedImage.alt}
            </MDBTypography>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 600px;
          width: 90%;
          text-align: center;
          position: relative;
        }
        .modal-image {
          max-width: 100%;
          height: auto;
        }
        .modal-description {
          margin: 15px 0;
          font-size: 1.2rem;
        }
        .close-button {
          background-color: #ff4d4d;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Accordion;
