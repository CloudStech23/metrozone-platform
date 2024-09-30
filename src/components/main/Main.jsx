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
  const cardData = [
    {
      id: 1,
      title: "Health-Care",
      imageUrl: "fas fa-heartbeat",
      description: [
        "10 years of impactful healthcare services.",
        "Benefiting over 250,000 individuals.",
        "Organized events in Srinagar, Jammu, Anantnag.",
        "Campaign fund raised: INR 4,00,000.",
      ],
    },
    {
      id: 2,
      title: "Sports and Recreation",
      imageUrl: "fas fa-trophy",
      description: [
        "8 years of promoting sports in communities.",
        "Direct impact on 100,000 participants.",
        "Events held in Jammu, Poonch, and Udhampur.",
        "Campaign fund raised: INR 6,50,000.",
      ],
    },
    {
      id: 3,
      title: "Education and Training",
      imageUrl: "fas fa-graduation-cap",
      description: [
        "12 years of advancing education and skill development.",
        "Reaching over 300,000 students.",
        "Workshops conducted in Pulwama, Baramulla, and Kathua.",
        "Campaign fund raised: INR 5,00,000.",
      ],
    },
    {
      id: 4,
      title: "Army",
      imageUrl: "fas fa-user-shield",
      description: [
        "7 years of organizing army-based community programs.",
        "Engaged 150,000 beneficiaries.",
        "Events organized in Rajouri, Kargil, and Kupwara.",
        "Campaign fund raised: INR 8,00,000.",
      ],
    },
  ];
  

  return (
    <div>
      <Carousel />

      <div className="container custom-container">
        <div className="containerBody py-5">
          <div
            className="bodytextPara"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Metrozone Group's CSR initiatives are designed to address both local
            and global challenges, focusing on the empowerment of underserved
            communities. Our programmes are aligned with international
            sustainability goals and are executed in collaboration with
            governments, NGOs, and other key stakeholders to drive impactful
            change.
          </div>

          <div className="bodytextPara aos-init aos-animate">
            In the last fiscal year, Metrozone Group dedicated INR 1,095 crore
            to CSR efforts, positively transforming the lives of over 11.7
            million individuals across various sectors.
          </div>

          <div className="bodytext aos-init aos-animate">
            Our projects span education, livelihood enhancement, skill
            development, rural development, clean water and sanitation,
            healthcare initiatives, and the improvement of essential services in
            underserved regions.
          </div>
        </div>

        <div className="container mx-5 mb-5 d-xl-block d-none">
          <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/10/Vivekananda%E2%80%99s-neverending-hope-from-the-youth.jpg" alt="" style={{height:'22rem',width:"77rem",filter:'sepia(100%)'}} />
        </div>

        <MDBContainer className="py-4 mx-auto ">
          <h2
            className="text-primary  pb-2"
            style={{
              fontSize: "22px",
              borderBottom: "5px solid #2968da",
              fontFamily: "Lato, sans-serif",
            }}
          >
            Our Approach
          </h2>

          <MDBRow className="justify-content-center align-items-stretch">
            {cardData.map((card, index) => (
              <MDBCol
                md="6"
                lg="3"
                sm="12"
                key={card.id}
                className="mb-4 d-flex flex-column "
              >
                <div className="text-center bg-light h-100 p-4 position-relative">
                  {/* Icon */}
                  <i
                    class={card.imageUrl}
                    style={{ fontSize: "3.5rem", color: "rgb(12 68 168)" }}
                  ></i>

                  {/* Title */}
                  <h5 className="fw-bold fs-5 text-secondary py-2">
                    {card.title}
                  </h5>

                  {/* Bullet points */}
                  <ul className="text-start ps-4">
                    {card.description.map((point, idx) => (
                      <li key={idx} className=" text-secondary h6">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Add vertical line between the cards, except for the last one */}
                  {index !== cardData.length - 1 && (
                    <div
                      className="vertical-separator d-none d-lg-block"
                      style={{
                        width: "1px",
                        backgroundColor: "#ccc",
                        height: "70%", // Adjust height to control how long the line appears
                        position: "absolute",
                        right: "-1px",
                        top: "50%", // Position it from the middle
                        transform: "translateY(-50%)", // Center it vertically
                      }}
                    ></div>
                  )}
                </div>
              </MDBCol>
            ))}
          </MDBRow>
          <hr />
        </MDBContainer>
        <MDBContainer className=" mb-5 mx-auto" style={{ marginTop: "5rem" }}>
          <Event />
        </MDBContainer>
      </div>
    </div>
  );
}

export default Main;
