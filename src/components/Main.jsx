import React from "react";
import Languages from "./Languages";

import "./Main.css";
const Main = () => {
  return (
    <>
      <div className="main mb-">
        <div className="content">
          <div className="slide text-center d-flex align-items-center justify-content-center">
            <div className="bg"></div>
            <div className="heading">
              <h1 className="head mb-4">Regional Languages Club</h1>
              <h2 className="tagline my-4">Embracing Diversity</h2>
            </div>
          </div>
          <Languages />
        </div>
      </div>
    </>
  );
};

export default Main;
