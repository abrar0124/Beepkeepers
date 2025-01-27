import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Header from "./Header/Header";
import Whychoose from "./pages/Whychoose";
import Productz from "./pages/Productz";
import Solutionz from "./pages/Solutionz";
import Pricingz from "./pages/Pricingz";
import Resourcez from "./pages/Resourcez";
import Aboutz from "./pages/Aboutz";
import Frontlines from "./pages/Frontlines";
import Producttour from "./pages/Productstour";
import Exps from "./pages/Exps";
import Solution_Picture from "./pages/Solution_picture";
import Resources_compos from "./pages/Resources_compos";
import About_divs from "./pages/About_divs";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/whychoose" element={<Whychoose />} />
          <Route path="/Productz" element={<Productz />} />
          <Route path="/Solutionz" element={<Solutionz />} />
          <Route path="/Pricingz" element={<Pricingz />} />
          <Route path="/Resourcez" element={<Resourcez />} />
          <Route path="/Aboutz" element={<Aboutz />} />
          <Route path="/Frontlines" element={<Frontlines />} />
          <Route path="/Producttour" element={<Producttour />} />
          <Route path="/Exps" element={<Exps />} />
          <Route path="/Solution_Picture" element={<Solution_Picture />} />
          <Route path="/Resources_compos" element={<Resources_compos />} />
          <Route path="/About_divs" element={<About_divs />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
