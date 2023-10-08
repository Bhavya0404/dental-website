import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PedodonticsDetail from "./Components/ServicePages/PedodonticsDetail";
import EndodonticsDetails from "./Components/ServicePages/EndodonticsDetails";
import OralSurgeryDetails from "./Components/ServicePages/OralSurgeryDetails";
import ProsthodonticsDetails from "./Components/ServicePages/ProsthodonticsDetails";
import PeriodonticsDetails from "./Components/ServicePages/PeriodonticsDetails";
import OrthodonticsDetails from "./Components/ServicePages/OrthodonticsDetails";
import SmileDesigningDetails from "./Components/ServicePages/SmileDesigningDetails";
import DentalImplantsDetails from "./Components/ServicePages/DentalImplantsDetails";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/dental-website" element={<Homepage />} />
          <Route path="/dental-website/endodontics" element={<EndodonticsDetails />} />
          <Route path="/dental-website/oral-surgery" element={<OralSurgeryDetails />} />
          <Route path="/dental-website/pedodontics" element={<PedodonticsDetail />} />
          <Route path="/dental-website/prosthodontics" element={<ProsthodonticsDetails />} />
          <Route path="/dental-website/periodontics" element={<PeriodonticsDetails />} />
          <Route path="/dental-website/orthodontics" element={<OrthodonticsDetails />} />
          <Route path="/dental-website/smile-designing" element={<SmileDesigningDetails />} />
          <Route path="/dental-website/dental-implants" element={<DentalImplantsDetails />} /> 
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
