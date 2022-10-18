import React from 'react'
import {Navbar, Main, About, Magazine, Quote, Word, Footer} from '../components'
const Home = () => {
  return (
    <>
        <Navbar />
        <Main />
        <About />
        <Quote/>
        <Word />
        {/* <Magazine /> */}
        
        <Footer />
    </>
  )
}

export default Home