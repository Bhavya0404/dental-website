import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import Footer from "./Footer";

import React from 'react'

const Homepage = () => {
  return (
    <div>
        <Carousel />
        <Services />
        <AboutUs />
        <Reviews />
        <Footer />
    </div>
  )
}

export default Homepage
