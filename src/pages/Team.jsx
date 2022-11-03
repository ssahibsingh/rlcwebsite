import React from "react";
import "./style.css";

import director from "../assets/images/director.png";
const Team = () => {
  return (
    <>
      <div className="teamPage minHeight">
        <div className="container">
          <h1 className="my-3 text-center py-3 headColor">Our Team</h1>
          <div className="row my-5">
            <div className="col-md-4 col-sm-6 col-12 ">
              <div className="mx-2 my-3 text-center">
                <img src={director} className="teamImg" alt="" />
                <h5 className="mt-2">Binod Kumar</h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 ">
              <div className="mx-2 my-3 text-center">
                <img src={director} className="teamImg" alt="" />
                <h5 className="mt-2">Binod Kumar</h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 ">
              <div className="mx-2 my-3 text-center">
                <img src={director} className="teamImg" alt="" />
                <h5 className="mt-2">Binod Kumar</h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 ">
              <div className="mx-2 my-3 text-center">
                <img src={director} className="teamImg" alt="" />
                <h5 className="mt-2">Binod Kumar</h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 ">
              <div className="mx-2 my-3 text-center">
                <img src={director} className="teamImg" alt="" />
                <h5 className="mt-2">Binod Kumar</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
