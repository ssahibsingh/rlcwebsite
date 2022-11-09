import React from "react";
import "./style.css";
import coordinator from "../assets/images/coordinator.png";
import director from "../assets/images/director.png";

const AboutPage = () => {
  return (
    <>
      <div className="aboutPage">
        <div className="container">
          <h1 className="my-3 text-center py-3 headColor">About Us</h1>
          <div className="content mx-auto">
            <div className="px-4 text-center">
              <p>
                Considering how important Language is in society, and how quickly
                we are forgetting our Regional Languages, RLC is an
                initiative for the Promotion and Preservation of literature
                written in Regional Languages of India, and to build a community
                of students from different cultural and lingual backgrounds where
                they can discuss their works of literature and learn from each
                other.
              </p>
              <p>

                The focus of the club is to Read, Learn and Appreciate the works
                of Literature written in Regional Languages. In short, this is a
                poetry and literature club for regional languages of India
              </p>
            </div>

            <div className="motive my-5 px-4 text-center">
              <h2 className="text-center headColor">Motive</h2>
              <p>To Promote and Preserve Regional Literature of India</p>
            </div>
            <div className="motive my-5 px-4 text-center">
              <h2 className="text-center headColor">Activities</h2>
              <ul className="list-unstyled">
                <li>Book Club</li>
                <li>Monthly Magazine</li>
                <li>Talks with Prominent Personalities</li>
                <li>Publishing Writings from NITJ</li>
                <li>Competitions</li>
                <li>Theatrical Acts</li>
              </ul>
            </div>

            <div className="my-4">
              <h2 className="headColor text-center">
                Patron and Faculty Coordinator
              </h2>
              <div className="d-flex justify-content-center">
                <div className="row mt-5">
                  <div className="col-md-6 d-flex justify-content-center text-center">
                    <div>
                      <img
                        className="img-fluid facultyImg"
                        src={director}
                        alt=""
                      />
                      <h4 className="display-5 name fs-4 pt-2">
                        Dr Binod Kumar Kanaujia
                      </h4>
                      <h5 className="display-6 designation fs-5">
                        Director, NITJ
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center text-center">
                    <div>
                      <img
                        className="img-fluid facultyImg"
                        src={coordinator}
                        alt=""
                      />
                      <h4 className="display-5 name fs-4 pt-2">
                        Dr Jagwinder Singh
                      </h4>
                      <h5 className="display-6 designation fs-5">
                        Associate Professor & HOD H&M
                      </h5>
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

export default AboutPage;
