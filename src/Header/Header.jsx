import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Whychoosekeeper from "../Components/Pages/Whychoosekeeper";
import Products from "../Components/Pages/Products";
import Pricing from "../Components/Pages/Pricing";
import Solution from "../Components/Pages/Solution";
import About from "../Components/Pages/About";
import Resources from "../Components/Pages/Resources";
import { motion } from "framer-motion";
import Sidebar from "../Components/Pages/Sidebar";

function Header() {
  const [activeLink, setActiveLink] = useState(null);

  const handleMouseOver = (link) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  return (
    <>
      <div className="header" style={{ cursor: "pointer" }}>
        {/* Logo Section */}
        <div className="header-logo" style={{ display: "flex" }}>
          <motion.img
            className="ssaa"
            whileHover={{ scale: 0.7 }}
            src="/Images/logo1.png"
            alt="Beekeeper Logo"
            style={{
              width: "90px",
              height: "59px",
              paddingTop: "20px",
              marginLeft: "30px",
              transition: "transform 1s ease-out",
            }}
          />
          <p className="p1" style={{ transition: "transform 1s ease-out" }}>
            <Link to="/" className="abeep">
              BEEKEEPER
            </Link>
          </p>
        </div>

        {/* Menu Section */}
        <div className="header-menu">
          <ul>
            <motion.li
              whileHover={{ scale: 0.8 }}
              style={{ transition: "transform 1s ease-out" }}
              onMouseOver={() => handleMouseOver("why-choose-keeper")}
              onMouseLeave={handleMouseLeave}
            >
              {/* <a href="#" className="a-link-double">
                Why choose keeper
              </a> */}
              <Link to="whychoose" className="a-link-double">
                Why choose keeper
              </Link>
              {activeLink === "why-choose-keeper" && (
                <div className="headerlink-dropdown">
                  <Whychoosekeeper />
                </div>
              )}
            </motion.li>

            <motion.li
              whileHover={{ scale: 0.8 }}
              style={{ transition: "transform 1s ease-out" }}
              onMouseOver={() => handleMouseOver("products")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/Productz" className="a-link-double">
                Products
              </Link>
              {activeLink === "products" && (
                <div className="headerlink-dropdown1">
                  <Products />
                </div>
              )}
            </motion.li>

            <motion.li
              whileHover={{ scale: 0.8 }}
              style={{ transition: "transform 1s ease-out" }}
              onMouseOver={() => handleMouseOver("solution")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/Solutionz" className="a-link-double">
                Solution
              </Link>
              {activeLink === "solution" && (
                <div className="headerlink-dropdown2">
                  <Solution />
                </div>
              )}
            </motion.li>

            <motion.li
              whileHover={{ scale: 0.8 }}
              style={{ transition: "transform 1s ease-out" }}
              onMouseOver={() => handleMouseOver("pricing")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/Pricingz" className="a-link-double">
                Pricing
              </Link>
              {activeLink === "pricing" && (
                <div className="headerlink-dropdown">
                  <Pricing />
                </div>
              )}
            </motion.li>

            <motion.li
              whileHover={{ scale: 0.8 }}
              style={{ transition: "transform 1s ease-out" }}
              onMouseOver={() => handleMouseOver("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/Resourcez" className="a-link-double">
                Resources
              </Link>
              {activeLink === "resources" && (
                <div className="headerlink-dropdown3">
                  <Resources />
                </div>
              )}
            </motion.li>

            <motion.li
              whileHover={{ scale: 0.8 }}
              style={{ transition: "transform 1s ease-out" }}
              onMouseOver={() => handleMouseOver("about")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/Aboutz" className="a-link-double">
                About
              </Link>
              {activeLink === "about" && (
                <div className="headerlink-dropdown4">
                  <About />
                </div>
              )}
            </motion.li>

            {/* Replace Loginapi dropdown with router Link */}
            <motion.li
              whileHover={{ scale: 0.8 }}
              style={{ transition: "transform 1s ease-out" }}
            >
              <Link to="/login" className="a-link-double">
                Login
              </Link>
            </motion.li>
          </ul>
        </div>

        <Sidebar />
        {/* Search Icon and Demo Button */}
        <motion.img
          className="sss"
          whileHover={{ scale: 0.7 }}
          src="/Images/search.png"
          alt="Search"
          style={{
            width: "2.5%",
            marginRight: "1%",
            transition: "transform 1s ease-out",
          }}
        />
        <motion.button
          whileHover={{ scale: 0.7 }}
          style={{ transition: "transform 1s ease-out" }}
          className="header-icons"
        >
          Schedule a demo
        </motion.button>
      </div>
    </>
  );
}

export default Header;
