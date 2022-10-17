import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Quote = () => {
  return (
    <>
      <div className="quote my-5">
        <div className="container">
          <h1 className="heading text-center">Shaers</h1>
          <Carousel interval={2000} indicators={false} className="my-5">
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="https://images.unsplash.com/photo-1661956602868-6ae368943878"
                alt=""
              />
              <Carousel.Caption>
                <h3></h3>
                <p>
                  
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="https://images.unsplash.com/photo-1665674997432-126b376cb8e0"
                alt=""
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Quote;
