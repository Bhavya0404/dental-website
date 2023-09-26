import Navbar from "./Components/Navbar";
import ServicePage from "./Components/ServicePage";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/dental-website" element={<Homepage />} />
          <Route path="/endo" element={<ServicePage />} />
          <Route path="/implant" element={<ServicePage />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
