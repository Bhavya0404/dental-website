import Slider from "./Carousel/Slider"
import Services from "./Services";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import Footer from "./Footer";


import React from 'react'

const Homepage = () => {
  return (
    <div>
        <Slider />
        <Services />
        <AboutUs />
        <Reviews />
        <Footer />
    </div>
  )
}

export default Homepage
