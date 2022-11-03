import React from "react";
import "./style.css";
const Contact = () => {
  return (
    <>
      <div className="contactPage minHeight">
        <div className="container">
          <h1 className="my-3 text-center py-3 headColor">Contact Us</h1>
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-4 col-md-6 col-12 link-cards">
              <div className="m-3 p-3 shadow-sm text-center">
              <i className="fa-regular fa-envelope fs-2"></i>
                <h4 class="my-2 headColor">Our Email Address</h4>
                <a class="text-decoration-none links fs-5" href="mailto:rlc.nitj@gmail.com">
                  rlc.nitj@gmail.com
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 link-cards">
              <div className="m-3 p-3 shadow-sm text-center">
              <i className="fa-brands fa-instagram fs-2"></i>
                <h4 class="my-2 headColor">Our Instagram Handle</h4>
                <a class="text-decoration-none links fs-5" href="https://instagram.com/rlc_nitj">
                  @rlc_nitj
                </a>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 my-3 text-center">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Message"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button className="btn btn-lg">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
