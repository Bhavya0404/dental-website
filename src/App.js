import AboutUs from "./Components/AboutUs";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Reviews from "./Components/Reviews";
import Services from "./Components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Services />
      <AboutUs />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
