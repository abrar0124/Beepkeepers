import React from "react";
import "./Sassfile.scss";
import { motion } from "framer-motion";

function Resources() {
  return (
    <>
      <motion.div
        className="Solution-con"
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ width: "1000px", height: "auto" }}
      >
        <div>
          <div className="p-hover">
            <motion.p
              whileHover={{ scale: 1.1 }}
              className="Para1"
              style={{ transition: "transform 1s ease-out" }}
            >
              Resource center
            </motion.p>
            <motion.p
              className="Para2"
              whileHover={{ scale: 1.1 }}
              style={{ transition: "transform 1s ease-out" }}
            >
              Explore resources for actionable
              <br />
              guides, templates, success stories, <br />
              and more designed to support every
              <br /> step of your journey to frontline.
            </motion.p>
          </div>

          <p className="Para3">Employee communications</p>
          <br />
          <p className="Para3">Employee engagement</p>
          <br />
          <p className="Para3">Hiring and onboarding</p>
          <br />
          <p className="Para3">Tasks and productivity</p>
        </div>

        <div>
          <div className="p-hover">
            <motion.p
              className="Para1"
              whileHover={{ scale: 1.1 }}
              style={{ transition: "transform 1s ease-out" }}
            >
              Blog
            </motion.p>
            <motion.p
              className="Para2"
              whileHover={{ scale: 1.1 }}
              style={{ transition: "transform 1s ease-out" }}
            >
              Discover daily insights about <br /> the digital transformation
              and the
              <br /> future of frontline work at every time <br />
              Explore resources for actionable
            </motion.p>
          </div>
          <p className="Para3">Employee communications</p>
          <br />
          <p className="Para3">Employee engagement</p>
          <br />
          <p className="Para3">Hiring and onboarding</p>
          <br />
          <p className="Para3">Tasks and productivity</p>
          <br />
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
            src="/Images/girl.webp"
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
            style={{ width: "30px", marginLeft: "160px" }}
            src="/Images/arrow2.jpeg"
          ></img>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Resources;
