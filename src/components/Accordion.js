import React from 'react'
import ImageCarousel from './ImageCarousel'

export default function Accordion({ item, index, activeIndex, handleAccordionClick }) {
    return (
        <div className="accordion-item mt-2" key={item.id}>
            <h2 className="accordion-header" id={`heading${index}`}>
                <button
                    className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={activeIndex === index}
                    aria-controls={`collapse${index}`}
                    onClick={() => handleAccordionClick(index)}
                >
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <div>
                            <span className="Event-title">{item.eventName}</span>
                            <span> - </span>
                            <span className="text-muted fs-6">Tuesday</span>
                            <em className="ml-2 fs-6 text-muted Event-data">{item.date}</em>
                            <span className="Event-place fs-6 ml-2">{item.location}</span>
                            <div>
                                <span className="fw-bold ml-2 fs-6">{item.partner}</span>
                                <span className="fw-bold Event-category fs-6 ml-2">{item.category}</span>
                            </div>
                        </div>
                        <i className={`fa ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                    </div>
                </button>
            </h2>
            <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <ul className="list-inline mt-0">
                        <li className="list-inline-item text-muted">{item.date}</li>
                        -
                        <li className="list-inline-item fw-bold" style={{ color: '#3d69ad' }}>{item.location}</li>
                    </ul>
                    <div className="row">
                        <ImageCarousel images={item.images} />
                        {/* Right Side: Content */}
                        <div className="col-lg-6 mt-3">
                            <span>{item.time}</span>
                            <h4>{item.eventName}</h4>
                            <ul className="list-unstyled">
                                <li className="fw-bold" style={{ color: '#3d69ad', textDecoration: 'underline', fontSize: '1.2rem' }}>
                                    {item.category}
                                </li>
                                <li className="fw-bold" style={{ color: '#3d69ad', fontSize: '1.2rem' }}>
                                    <span className="fw-normal text-dark">Partner:</span> {item.partner}
                                </li>
                                <li>{item.date}, <span className="fw-bold">{item.location}</span></li>
                            </ul>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
