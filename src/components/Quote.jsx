import React from "react";
import mushaira2023 from "../assets/images/carousel/Mushaira 2023.jpg";
import utkansh2023 from "../assets/images/carousel/Utkansh 2023.jpg";
import lohri2023 from "../assets/images/carousel/Lohri 2023.jpg";
import utkansh20232 from "../assets/images/carousel/Utkansh 2023 (1).jpg";

const Quote = () => {
  return (
    <>
      <div className="quote my-5">
        <div className="container">
          <h1 className="heading text-center headColor">Previous Events</h1>
          <div className="row justify-content-center">
            <div className="col-11">
              {/* <div id="carouselExample" class="carousel slide mt-2">
                <div class="carousel-inner">
                  <div class="carousel-item active text-center">
                    <img
                      src={mushaira2023}
                      class="d-block carousel-img"
                      alt="Musahira 2023"
                      title="Musahira 2023"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={utkansh2023}
                      class="d-block carousel-img"
                      alt="Utkansh 2023"
                      title="Utkansh 2023 - Folk Orchestra"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={utkansh20232}
                      class="d-block carousel-img"
                      alt="Utkansh 2023"
                      title="Utkansh 2023 - Folk Orchestra"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={lohri2023}
                      class="d-block carousel-img"
                      alt="Utkansh 2023"
                      title="Utkansh 2023 - Folk Orchestra"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div> */}
              <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div class="carousel-inner text-center">
                  <div class="carousel-item active">
                    <img
                      src={mushaira2023}
                      class="d-block carousel-img"
                      alt="Mushaira 2023"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="headColor fw-bold">
                        <span class="carousel-bg-text rounded px-2">Mushaira 2023</span>
                      </h5>
                    </div>
                  </div>
                  <div class="carousel-item text-center">
                    <img
                      src={utkansh2023}
                      class="d-block carousel-img"
                      alt="Utkansh 2023"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="headColor fw-bold">
                        <span class="carousel-bg-text rounded px-2">Utkansh 2023</span>
                      </h5>
                    </div>
                  </div>
                  <div class="carousel-item text-center">
                    <img
                      src={utkansh20232}
                      class="d-block carousel-img"
                      alt="Utkansh 2023"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="headColor fw-bold">
                        <span class="carousel-bg-text rounded px-2">Utkansh 2023</span>
                      </h5>
                    </div>
                  </div>
                  <div class="carousel-item text-center">
                    <img
                      src={lohri2023}
                      class="d-block carousel-img"
                      alt="Lohri 2023"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="headColor fw-bold">
                        <span class="carousel-bg-text rounded px-2">Lohri 2023</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
