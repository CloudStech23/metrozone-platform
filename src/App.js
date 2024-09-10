import './App.css';
import { useEffect, useState } from 'react';
import { db } from './Firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import Accordion from './components/Accordion.js';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setAccordionData(eventList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="custom-bg d-flex align-items-center mt-4">
        <div className="container text-left">
          <h2 className="custom-title">Corporate Social Responsibility</h2>
        </div>
      </div>
      <section id="tc-Schedule" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="text-center text-primary mb-4">
                <h3
                  className="display-5 fw-bold"
                  style={{ fontFamily: 'Mingzat, sans-serif' }}
                >
                  Top Event to Attend: Follow Our Conference Schedule
                </h3>
              </div>
              <div className="text-center h6 mb-5">
                <p>
                  Corporate social responsibility (CSR) is a business model where companies integrate social and environmental concerns into their operations and interactions with stakeholders
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="event-container">
              <div className="accordion" id="accordionExample">
                {accordionData.map((item, index) => (
                 <Accordion
                    key={index}
                    item={item}
                    index={index}
                    activeIndex={activeIndex}
                    handleAccordionClick={handleAccordionClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
