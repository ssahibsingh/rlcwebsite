import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about mb-5 pb-5">
        <div className="container">
          <h1 className="heading text-center headColor">About</h1>
          <div className="content my-5 text-center mx-auto">
            <p >
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
        </div>
      </div>
    </>
  );
};

export default About;
