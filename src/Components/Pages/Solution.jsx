import React from "react";
import "./Sassfile.scss";
import { motion } from "framer-motion";
import Header from "../../Header/Header";

function Solution() {
  return (
    <>
      <motion.div
        className="Solution-con"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ width: "1000px", height: "auto", padding: "30px" }}
      >
        <div>
          <motion.p
            whileHover={{ scale: 1.1 }}
            className="Para1"
            style={{ transition: "transform 1s ease-out" }}
          >
            Capabilities
          </motion.p>
          <motion.p
            className="Para2"
            whileHover={{ scale: 1.2 }}
            style={{ transition: "transform 1s ease-out" }}
          >
            Beekeeper brings essential <br /> capabilities together — from{" "}
            <br />
            communication to compliance — <br /> empowering every aspect <br />
            of frontline success.
          </motion.p>
          <p className="Para3">Employee communications</p>
          <br />
          <p className="Para3">Employee engagement</p>
          <br />
          <p className="Para3">Hiring and onboarding</p>
          <br />
          <p className="Para3">Tasks and productivity</p>
        </div>

        <div>
          <motion.p
            className="Para1"
            whileHover={{ scale: 1.2 }}
            style={{ transition: "transform 1s ease-out" }}
          >
            Industry
          </motion.p>
          <motion.p
            className="Para2"
            whileHover={{ scale: 1.2 }}
            style={{ transition: "transform 1s ease-out" }}
          >
            Beekeeper brings essential <br /> capabilities together — from{" "}
            <br />
            communication to compliance — <br /> empowering every aspect <br />
            of frontline success.
          </motion.p>

          <p className="Para3">Employee communications</p>
          <br />
          <p className="Para3">Employee engagement</p>
          <br />
          <p className="Para3">Hiring and onboarding</p>
          <br />
          <p className="Para3">Tasks and productivity</p>
          <br />
        </div>
        <div>
          <motion.p
            className="Para1"
            whileHover={{ scale: 1.2 }}
            style={{ transition: "transform 1s ease-out" }}
          >
            Department
          </motion.p>
          <motion.p
            className="Para2"
            whileHover={{ scale: 1.2 }}
            style={{ transition: "transform 1s ease-out" }}
          >
            Beekeeper brings essential <br /> capabilities together — from{" "}
            <br />
            communication to compliance — <br /> empowering every aspect <br />
            of frontline success.
          </motion.p>

          <p className="Para3">Employee communications</p>
          <br />
          <p className="Para3">Employee engagement</p>
        </div>

        <motion.div whileHover={{ backgroundColor: "white" }} className="imgss">
          <motion.img
            className="sabaa"
            whileHover={{ scale: 1.2 }}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
              transition: "transform 1s ease-out",
            }}
            src="/Images/Fuel.webp"
          />
          <motion.p
            whileHover={{ scale: 1.2 }}
            style={{
              fontSize: "17px",
              padding: "3px",
              transition: "transform 1s ease-out",
              textAlign: "center",
            }}
          >
            How the traffic control comp <br /> boosts frontline retention by
            <br /> with Beekeeper and eduMe
          </motion.p>
          <img
            className="saba3"
            style={{ width: "30px", marginLeft: "240px" }}
            src="/Images/arrow2.jpeg"
          ></img>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Solution;
