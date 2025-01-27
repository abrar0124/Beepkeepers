import React from "react";
import { motion } from "framer-motion";

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      onClick={scrollToTop}
      style={{
        border: "none",
        // borderRadius: "50%",
        marginTop: "15%",
        marginLeft: "50%",
        width: "60px",
        height: "60px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 10px",
        background: "none",
      }}
    >
      <img
        className="arrowImg"
        src="/Images/eer.png"
        alt="Right arrow"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </motion.button>
  );
};

export default ScrollButton;
