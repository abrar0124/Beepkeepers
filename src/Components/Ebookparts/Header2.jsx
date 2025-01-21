import React from "react";
import { motion } from "framer-motion";

const Header2 = () => {
  return (
    <div className="Header">
      <img
        className="Sabba"
        style={{
          marginLeft: "65%",
          marginTop: "5%",
          cursor: "pointer",
        }}
        src="/Images/Saba1.svg"
        alt="Logo"
      />
      <motion.h2
        whileHover={{ scale: 1.2 }}
        className="hh2"
        style={{ marginLeft: "9.5%", fontSize: "45px", cursor: "pointer" }}
      >
        eBook
      </motion.h2>
    </div>
  );
};

export default Header2;
