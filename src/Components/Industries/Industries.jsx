import React, { useState } from "react";
import "./Industries.scss";
const Industeries = () => {
  const [activeDiv, setActiveDiv] = useState("div1");

  const handleLinkClick = (e, divId) => {
    e.preventDefault(); // Prevents default scrolling behavior
    setActiveDiv(divId);
  };

  return (
    <>
      <div style={{ marginTop: "15%" }}>
        <h2 style={{ marginLeft: "11%", fontSize: "40px" }}>
          Frontline <br /> industries run
          <br /> on Beekeeper
        </h2>
        <div style={{ display: "flex", height: "100vh" }}>
          {/* Left Side Links */}
          <div
            style={{
              width: "20%",
              padding: "20px",
              marginLeft: "10%",
            }}
          >
            <a
              className="hs"
              href="#"
              onClick={(e) => handleLinkClick(e, "div1")}
            >
              Hospitality
            </a>
            <br />
            <a
              className="hs"
              href="#"
              onClick={(e) => handleLinkClick(e, "div2")}
            >
              Retail
            </a>
            <br />
            <a
              className="hs"
              href="#"
              onClick={(e) => handleLinkClick(e, "div3")}
            >
              Manufacturing
            </a>
            <br />
            <a
              className="hs"
              href="#"
              onClick={(e) => handleLinkClick(e, "div4")}
            >
              Construction
            </a>
            <br />
            <a
              className="hss"
              href="#"
              onClick={(e) => handleLinkClick(e, "div5")}
            >
              Healthcare
            </a>
          </div>

          {/* Right Side Content */}
          <div style={{ flex: 1, padding: "20px" }}>
            {activeDiv === "div1" && (
              <img className="img-s" src="/Images/img1.webp" />
            )}
            {activeDiv === "div2" && (
              <img className="img-s" src="/Images/img3.png" />
            )}
            {activeDiv === "div3" && (
              <img className="img-s" src="/Images/img2.webp" />
            )}
            {activeDiv === "div4" && (
              <img className="img-s" src="/Images/img5.png" />
            )}
            {activeDiv === "div5" && (
              <img className="img-s" src="/Images/img4.png" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Industeries;
