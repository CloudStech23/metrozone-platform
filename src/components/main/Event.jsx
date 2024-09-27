import React from "react";
import { MDBCard, MDBCardImage, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
 

const events = [
  {
    event_name: "Nature Photography Workshop",
    date: "25th September 2024",
    location: "New York City",
    category: "Workshop",
    image_url: "https://mdbootstrap.com/img/new/standard/nature/186.webp",
  },
  {
    event_name: "Art and Culture Expo",
    date: "5th October 2024",
    location: "Los Angeles",
    category: "Exhibition",
    image_url: "https://mdbootstrap.com/img/new/standard/nature/185.webp",
  },
  {
    event_name: "Tech Innovation Conference",
    date: "15th November 2024",
    location: "San Francisco",
    category: "Conference",
    image_url: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
  },
  {
    event_name: "Nature Photography Workshop",
    date: "25th September 2024",
    location: "New York City",
    category: "Workshop",
    image_url: "https://mdbootstrap.com/img/new/standard/nature/186.webp",
  },
  {
    event_name: "Art and Culture Expo",
    date: "5th October 2024",
    location: "Los Angeles",
    category: "Exhibition",
    image_url: "https://mdbootstrap.com/img/new/standard/nature/185.webp",
  },
  {
    event_name: "Tech Innovation Conference",
    date: "15th November 2024",
    location: "San Francisco",
    category: "Conference",
    image_url: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
  },
];

function Event() {
  const cardStyle = {
    width: "95%",
    margin: "0 auto",
    position: "relative",
    overflow: "hidden", // Ensures the zoom doesn't overflow the card
    borderRadius: "7px",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "7px",
    transition: "transform 0.3s ease", // Smooth zoom transition
  };

  const imageHoverStyle = {
    transform: "scale(1.1)", // Zoom effect
  };

  return (
    <MDBRow>
      {events.map((event, index) => (
        <MDBCol lg="4" md="6" sm="12" className="mb-4" key={index}>
          <MDBCard style={cardStyle}>
            <div
              className="image-container"
              style={{
                overflow: "hidden", // Ensures zoom effect doesn't break the layout
              }}
            >
              <MDBCardImage
                src={event.image_url}
                position="top"
                alt={event.event_name}
                style={imageStyle}
                className="event-image"
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} // Zoom on hover
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset zoom
              />
            </div>

            {/* Black Blur Background */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "7px",
              }}
            ></div>

            {/* Category (Top Left) */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "#fff",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              {event.category}
            </div>

            {/* Event Name, Location, Date (Bottom Left) */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                color: "#fff",
              }}
            >
              <h4 style={{ margin: 0 }}>{event.event_name}</h4>
              <span style={{ margin: "3px 0" }}>{event.location}</span>
              <span style={{ margin: "3px 0", display: "block" }}>{event.date}</span>
              <Link to="/E_page"><i class="bi bi-arrow-right fs-4 text-white"></i></Link>
            </div>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
}

export default Event;
