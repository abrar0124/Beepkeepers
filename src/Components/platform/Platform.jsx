import React, { useState } from "react";
function Platform() {
  const [activeDiv, setActiveDiv] = useState("div1");

  const handleLinkClick = (e, divId) => {
    e.preventDefault(); // Prevents default scrolling behavior
    setActiveDiv(divId);
  };
  return (
    <>
      <h2 style={{ fontSize: "40px", textAlign: "center" }}>
        Simplify frontline work with our all-in-one platform
      </h2>
      <p style={{ textAlign: "center" }}>
        Bring communication, employee engagement, and work management together
        in one seamless platform designed to streamline
        <br /> every aspect of frontline operations.
      </p>
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
          <h2>Communication</h2>
          <a
            className="hs"
            href="#"
            onClick={(e) => handleLinkClick(e, "div1")}
          >
            Steam and documents
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
            Secure chats
          </a>
          <br />
          <a
            className="hs"
            href="#"
            onClick={(e) => handleLinkClick(e, "div4")}
          >
            Inline translations
          </a>
          <br />
          <a
            className="hss"
            href="#"
            onClick={(e) => handleLinkClick(e, "div5")}
          >
            Surveys and polls
          </a>
        </div>

        {/* Right Side Content */}
        <div style={{ flex: 1, padding: "20px" }}>
          {activeDiv === "div1" && (
            <img className="img-s" src="/Images/andriod3.webp" />
          )}
          {activeDiv === "div2" && (
            <img className="img-s" src="/Images/andriod4.webp" />
          )}
          {activeDiv === "div3" && (
            <img className="img-s" src="/Images/andriod7.webp" />
          )}
          {activeDiv === "div4" && (
            <img className="img-s" src="/Images/andriod6.webp" />
          )}
          {activeDiv === "div5" && (
            <img className="img-s" src="/Images/img4.png" />
          )}
        </div>
      </div>
    </>
  );
}
export default Platform;
