import React from 'react'
import "./Word.css"
const Word = () => {
  return (
    <>
      <div className="word my-5 py-5 bg-light">
        <div className="container text-center">
          <h2 className='heading'>WORD OF THE DAY</h2>
          <div className="details">
            <h2 className="actualWord pt-4 pb-3" >bad-havaasii</h2>
            <p className='transliteration pb-4'>बद-हवासी <span style={{color: "#638f91"}}>•</span> بد حواسی</p>
            <span className="text-muted means">means</span>
            <h4 className='meaning pt-1'>harassed</h4>
            <div className="example mt-5">
              <img className='img-fluid' src="https://i.ibb.co/0Cm5Z9n/image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Word