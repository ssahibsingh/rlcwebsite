import React from 'react'
import Marquee from "react-fast-marquee";
import data from "../data/language"
import "./Languages.css"

const Languages = () => {
  return (
    <>
      <div className='container my-5 py-5'>
        <Marquee speed={30} pauseOnHover={true} gradientWidth={30}>
          <div className="languages d-flex">
            {data.language.map((item) => {
              return (
                <a className="language mx-3 text-center text-decoration-none " key={item.id} href={item.link} target="_blank" rel="noreferrer">
                  <img src={item.img} alt={item.name} className="mb-3 img-fluid" />
                  <p>{item.name}</p>
                </a>
              );
            })}
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default Languages