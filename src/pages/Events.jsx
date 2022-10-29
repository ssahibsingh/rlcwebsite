import React from "react";
import "./style.css";
const Events = () => {
  return (
    <>
      <div className="eventPage minHeight">
        <div className="header">
          <div className="bgImg"></div>
          <h1 className="my-3 text-center py-3 headColor heading d-flex justify-content-center align-items-center">
            Events
          </h1>
        </div>
        <div className="content">
          <div className="my-5">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div
                  className="col-md-4 card border-0 shadow-sm bg-light"
                  style={{ width: "18rem" }}
                >
                  <div>
                    <img
                      src="https://picsum.photos/300/300"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <span className="badge text-bg-danger">Upcoming</span>
                      <h3 className="display-6 fs-5 fw-bold card-text">
                        Some Event
                      </h3>
                      <p className="eventDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis ut soluta suscipit qui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5 pt-5">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div
                  className="col-md-4 card border-0 shadow-sm bg-light mx-5 my-3"
                  style={{ width: "18rem" }}
                >
                  <div>
                    <img
                      src="https://picsum.photos/300/300"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 className="display-6 fs-5 fw-bold card-text">
                        Some Event
                      </h3>
                      <p className="eventDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis ut soluta suscipit qui.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card border-0 shadow-sm bg-light mx-5 my-3"
                  style={{ width: "18rem" }}
                >
                  <div>
                    <img
                      src="https://picsum.photos/300/300"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 className="display-6 fs-5 fw-bold card-text">
                        Some Event
                      </h3>
                      <p className="eventDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis ut soluta suscipit qui.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card border-0 shadow-sm bg-light mx-5 my-3"
                  style={{ width: "18rem" }}
                >
                  <div>
                    <img
                      src="https://picsum.photos/300/300"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 className="display-6 fs-5 fw-bold card-text">
                        Some Event
                      </h3>
                      <p className="eventDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis ut soluta suscipit qui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
