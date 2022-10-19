import React from "react";
import "./Footer.css"
const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-light py-3">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-3 text-center">
            </div> */}
            <div className="col-md-6 d-flex justify-content-center align-items-center ">
              <p>Copyright &copy; {year} RLC NITJ</p>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <p className="px-2">Follow Us:</p>
              <ul className="list-unstyled d-flex justify-content-center social-media align-items-center">
                <li>
                  <a href="https://instagram.com/rlc_nitj" className="px-2 text-decoration-none">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/rlc_nitj" className="px-2 text-decoration-none">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
