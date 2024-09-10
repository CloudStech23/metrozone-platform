import React from 'react';

const ImageCarousel = ({ images }) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false" style={{ width: '45%', height: '40%' }}>
            <ol className="carousel-indicators">
                {images.map((_, index) => (
                    <li
                        key={index}
                        data-target="#carouselExampleIndicators"
                        data-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                    ></li>
                ))}
            </ol>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    >
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={`Slide ${index}`}
                        />
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:"#3d69ad"}}></span>
                <span className="sr-only" >Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:"#3d69ad"}}></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default ImageCarousel;
