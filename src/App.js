import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginapi from "./Components/Pages/Loginapi";
import Header from "./Header/Header";
import Ebook from "./Components/Pages/Ebook";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* <Ebook /> */}
      </Router>
    </>
  );
}

export default App;
