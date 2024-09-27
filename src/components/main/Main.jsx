import React from "react";
import Carousel from "./Carousel";
import "./Main.css"; // Import external CSS
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Event from "./Event";

function Main() {
  return (
    <div>
      <Carousel />

      <div className="container custom-container">
        <div className="containerBody py-5">
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

        <MDBContainer className="py-4 mx-auto">
          <h2 className="text-primary  pb-2" style={{ fontSize: "22px" }}>
            Our Approach
          </h2>
          <hr />

          <MDBRow className="justify-content-center">
            {/* Card 1 */}
            <MDBCol md="6" lg="3" sm="12" className="mb-4">
              <MDBCard className=" text-center h-100">
                <MDBCardImage
                  src="https://www.tatasustainability.com/images/CSR-Main/icon1.svg"
                  alt="CSR Icon"
                  className="img-fluid mx-auto"
                  // style={{ maxWidth: "100px" }}
                  top
                />
                <MDBCardBody >
                  
                  <h5 className="fw-bold fs-5 text-secondary py-2">
                    Beyond Compliance
                  </h5>
                  <p className="fst-italic text-secondary fs-6">
                    While all CSR interventions shall fully comply with the
                    relevant laws of the land, they will strive to meet core
                    needs, even beyond what is mandated.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            {/* Card 2 */}
            <MDBCol md="6" lg="3" sm="12" className="mb-4">
              <MDBCard className="shadow-sm text-center h-100">
                <MDBCardImage
                  src="https://www.tatasustainability.com/images/CSR-Main/icon1.svg"
                  alt="CSR Icon"
                  className="img-fluid mx-auto"
                  style={{ maxWidth: "100px" }}
                  top
                />
                <MDBCardBody>
                  
                  <h5 className="fw-bold fs-5 text-secondary py-2">
                    Beyond Compliance
                  </h5>
                  <p className="fst-italic text-secondary fs-6">
                    While all CSR interventions shall fully comply with the
                    relevant laws of the land, they will strive to meet core
                    needs, even beyond what is mandated.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            {/* Card 3 */}
            <MDBCol md="6" lg="3" sm="12" className="mb-4">
              <MDBCard className="shadow-sm text-center h-100">
                <MDBCardImage
                  src="https://www.tatasustainability.com/images/CSR-Main/icon1.svg"
                  alt="CSR Icon"
                  className="img-fluid mx-auto"
                  style={{ maxWidth: "100px" }}
                  top
                />
                <MDBCardBody>
                  
                  <h5 className="fw-bold fs-5 text-secondary py-2">
                    Beyond Compliance
                  </h5>
                  <p className="fst-italic text-secondary fs-6">
                    While all CSR interventions shall fully comply with the
                    relevant laws of the land, they will strive to meet core
                    needs, even beyond what is mandated.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            {/* Card 4 */}
            <MDBCol md="6" lg="3" sm="12" className="mb-4">
              <MDBCard className="shadow-sm text-center h-100">
                <MDBCardImage
                  src="https://www.tatasustainability.com/images/CSR-Main/icon1.svg"
                  alt="CSR Icon"
                  className="img-fluid mx-auto"
                  style={{ maxWidth: "100px" }}
                  top
                />
                <MDBCardBody>
                  
                  <h5 className="fw-bold fs-5 text-secondary py-2">
                    Beyond Compliance
                  </h5>
                  <p className="fst-italic text-secondary fs-6">
                    While all CSR interventions shall fully comply with the
                    relevant laws of the land, they will strive to meet core
                    needs, even beyond what is mandated.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <hr />
        </MDBContainer>
        <MDBContainer className=" mt-5 mb-5 mx-auto">
          <h2 className="text-primary pb-1 " style={{ fontSize: "22px" }}>
            Events
          </h2>{" "}
          <hr />
          <Event />
        </MDBContainer>
      </div>
    </div>
  );
}

export default Main;