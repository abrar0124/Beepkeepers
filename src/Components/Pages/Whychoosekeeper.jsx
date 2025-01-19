import React from "react";
import "./Sassfile.scss";
import { motion } from "framer-motion";
import Header from "../../Header/Header";
function Whychoosekeeper() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // firstly element is invisible and shifted full element in lower place
        animate={{ opacity: 1, y: 0 }} // then anfter animation element is 100% visible and element commes its original position.
        transition={{ duration: 1 }} // take time for smooth animation.
        className="Whycontainer"
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          padding: "20px",
          cursor: "pointer",
          borderRadius: "100px",
        }}
      >
        <motion.div
          className="child1"
          whileHover={{ scale: 1.1 }}
          style={{ transition: "transform 1s ease-out" }}
        >
          <p className="pp1" style={{ fontWeight: "bold" }}>
            Why choose Beekeeper
          </p>
          <p className="pp2">
            See why Beekeeper is the trusted choice for enhancing the deskless
            worker experience.
          </p>
          <a href="" className="joinbutton">
            Read More <img src="/Images/arrow2.jpeg"></img>
          </a>
        </motion.div>

        <motion.div whileHover={{ backgroundColor: "white" }} className="imgss">
          <motion.img
            className="sabaa"
            whileHover={{ scale: 1.2 }}
            style={{
              width: "100%",
              transition: "transform 1s ease-out",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
            src="/Images/pic1.webp"
          />
          <motion.p
            whileHover={{ backgroundColor: "white", scale: 0.9 }}
            style={{
              fontSize: "17px",
              padding: "3px",
              transition: "transform 1s ease-out",
            }}
          >
            How the traffic control comp <br /> boosts frontline retention by
            <br /> with Beekeeper and eduMe
          </motion.p>
          <img
            className="saba3"
            style={{ width: "30px", marginLeft: "160px" }}
            src="/Images/arrow2.jpeg"
          ></img>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Whychoosekeeper;
