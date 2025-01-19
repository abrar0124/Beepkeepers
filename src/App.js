import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginapi from "./Components/Pages/Loginapi";
import Header from "./Header/Header";
import Ebook from "./Components/Pages/Ebook";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/loginapi" element={<Loginapi />} />
        </Routes>
        <Ebook />
      </Router>
    </>
  );
}

export default App;
