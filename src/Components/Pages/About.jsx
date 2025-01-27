import React from "react";
import "./Sassfile.scss";
import { motion } from "framer-motion";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <motion.div
        className="Solution-con"
        initial={{ opacity: 0, y: 100 }} // firstly element is invisible and shifted full element in lower place
        animate={{ opacity: 1, y: 0 }} // then anfter animation element is 100% visible and element commes its original position.
        transition={{ duration: 1 }}
        style={{
          width: "1150px",
          height: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <div className="p-hover">
            <Link
              to={"/About_divs"}
              style={{ textDecoration: "none", color: "black" }}
            >
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
            </Link>
          </div>
          <Link
            to={"/About_divs"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="Para3">Employee communications</p>
            <br />
            <p className="Para3">Employee engagement</p>
            <br />
            <p className="Para3">Hiring and onboarding</p>
            <br />
            <p className="Para3">Tasks and productivity</p>
          </Link>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Link
            to={"/About_divs"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="Para3">Employee communications</p>
            <br />
            <p className="Para3">Employee engagement</p>
            <br />
            <p className="Para3">Hiring and onboarding</p>
            <br />
            <p className="Para3">Tasks and productivity</p>
            <br />
          </Link>
        </div>
        <motion.div whileHover={{ backgroundColor: "white" }} className="imgss">
          <Link
            to={"/About_divs"}
            style={{ textDecoration: "none", color: "black" }}
          >
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
              src="/Images/Pic2.webp"
            />
          </Link>
          <Link
            to={"/About_divs"}
            style={{ textDecoration: "none", color: "black" }}
          >
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
          </Link>
          <Link
            to={"/About_divs"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className="saba3"
              style={{ width: "30px", marginLeft: "255px" }}
              src="/Images/arrow2.jpeg"
            ></img>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
export default About;
