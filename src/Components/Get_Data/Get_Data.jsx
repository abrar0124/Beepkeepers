import React, { useRef, useState } from "react";
import { Sample_Data } from "../Sample_Data/Sample_Data";
import "./Get_Data.scss";
import { motion } from "framer-motion";

const ITEM_WIDTH = 200;

function Get_Data() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <>
      <div className="Get_Container" style={{ position: "relative" }}>
        <p
          className="Get_p"
          style={{ textAlign: "center", fontWeight: 600, fontSize: "30px" }}
        >
          Leading certifications and compliance
        </p>
        {/* Scrollable Container */}
        <div
          ref={containerRef}
          style={{
            width: "900px",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            padding: "0 50px", // Added padding to account for buttons
          }}
        >
          <div className="Get_Content-box">
            {Sample_Data.map((item) => (
              <div key={item.id} className="Get_card">
                <img
                  src={item.img}
                  style={{
                    width: "500px", // Adjusted the width for better fitting
                    height: "90%", // Ensures image aspect ratio is maintained
                    cursor: "pointer",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left Button */}
        <motion.button
          className="scrollBtn"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleScroll(-ITEM_WIDTH)}
          style={{
            position: "absolute",
            top: "65%",
            left: "160px",
          }}
        >
          <img
            className="arrowImg"
            src="/Images/left1.png"
            alt="Left arrow"
            style={{
              height: "80%",
            }}
          />
        </motion.button>

        {/* Right Button */}
        <motion.button
          className="scrollBtn"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleScroll(ITEM_WIDTH)}
          style={{
            position: "absolute",
            top: "65%",
            right: "160px",
          }}
        >
          <img
            className="arrowImg"
            src="/Images/right1.png"
            alt="Right arrow"
            style={{
              height: "80%",
            }}
          />
        </motion.button>
      </div>
    </>
  );
}
export default Get_Data;
