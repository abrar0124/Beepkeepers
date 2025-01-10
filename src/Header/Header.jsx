import React, { useState } from "react";
import "./Header.scss";
import Whychoosekeeper from "../Components/Pages/Whychoosekeeper";
import Products from "../Components/Pages/Products";
import Pricing from "../Components/Pages/Pricing";
import Solution from "../Components/Pages/Solution";
import About from "../Components/Pages/About";
import Resources from "../Components/Pages/Resources";

function Header() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <>
      <div className="header">
        <div className="header-logo" style={{ display: "flex" }}>
          <img
            src="/Images/logo1.png"
            alt=""
            style={{ width: "90px", paddingTop: "20px", marginLeft: "30px" }}
          />
          <p className="p1">BEEKEEPER</p>
        </div>
        <div className="header-menu">
          <ul>
            <li
              onMouseOver={() => setActiveLink("find-talent")}
              onMouseLeave={() => setActiveLink(null)}
            >
              <a href="" className="a-link-double">
                Why choose keeper
              </a>
              {activeLink === "find-talent" && (
                <div className="headerlink-dropdown">
                  <Whychoosekeeper />
                </div>
              )}
            </li>
            <li
              onMouseOver={() => setActiveLink("new1")}
              onMouseLeave={() => setActiveLink(null)}
            >
              <a href="" className="a-link-double">
                Products
              </a>
              {activeLink === "new1" && (
                <div className="headerlink-dropdown1">
                  <Products />
                </div>
              )}
            </li>
            <li
              onMouseOver={() => setActiveLink("Find-work")}
              onMouseLeave={() => setActiveLink(null)}
            >
              <a href="" className="a-link-double">
                Solution
              </a>
              {activeLink === "Find-work" && (
                <div className="headerlink-dropdown2">
                  <Solution />
                </div>
              )}
            </li>
            <li
              onMouseOver={() => setActiveLink("New-things")}
              onMouseLeave={() => setActiveLink(null)}
            >
              <a href="" className="a-link-double">
                Pricing
              </a>
              {activeLink === "New-things" && (
                <div className="headerlink-dropdown">
                  <Pricing />
                </div>
              )}
            </li>
            <li
              onMouseOver={() => setActiveLink("Resources")}
              onMouseLeave={() => setActiveLink(null)}
            >
              <a href="" className="a-link-double">
                Resources
              </a>
              {activeLink === "Resources" && (
                <div className="headerlink-dropdown1">
                  <Resources />
                </div>
              )}
            </li>

            <li
              onMouseOver={() => setActiveLink("Enterprise")}
              onMouseLeave={() => setActiveLink(null)}
            >
              <a href="" className="a-link-double">
                About
              </a>
              {activeLink === "Enterprise" && (
                <div className="headerlink-dropdown">
                  <About />
                </div>
              )}
            </li>
          </ul>
        </div>

        <img
          src="/Images/search.png"
          alt=""
          style={{ width: "2%", marginRight: "1%" }}
        />

        <button className="header-icons">Shedule a demo</button>
      </div>
    </>
  );
}

export default Header;
