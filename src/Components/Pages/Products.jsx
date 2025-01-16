import React from "react";
import "./Sassfile.scss";
import { motion } from "framer-motion";

function Products() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="Products"
        style={{
          width: "900px",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          cursor: "pointer",
          borderRadius: "100px",
        }}
      >
        <motion.div
          className="child1"
          whileHover={{ scale: 1.2 }}
          style={{ transition: "transform 1s ease-out" }}
        >
          <p className="pp1" style={{ fontWeight: "bold" }}>
            Frontline Success Platform
          </p>
          <p className="pp2">
            See why Beekeeper is the trusted choice for enhancing the deskless
            worker experience.
          </p>
          <a href="" className="joinbutton">
            Read More <img src="/Images/arrow2.jpeg" alt="arrow" />
          </a>
        </motion.div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <motion.div
            className="child1"
            whileHover={{ scale: 1.2 }}
            style={{ transition: "transform 1s ease-out" }}
          >
            <p className="pp1" style={{ fontWeight: "bold" }}>
              Security
              <div>
                <p className="pp2">
                  See why Beekeeper is the trusted choice for enhancing the
                  deskless worker experience.
                </p>
                <div>
                  <a href="" className="joinbutton">
                    Read More <img src="/Images/arrow2.jpeg" alt="arrow" />
                  </a>
                </div>
              </div>
            </p>
          </motion.div>

          <motion.div
            className="child1"
            whileHover={{ scale: 1.2 }}
            style={{ transition: "transform  1s ease-out" }}
          >
            <p className="pp1" style={{ fontWeight: "bold" }}>
              Integrations
              <div>
                <p className="pp2">
                  See why Beekeeper is the trusted choice for enhancing the
                  deskless worker experience.
                </p>
                <div>
                  <a href="" className="joinbutton">
                    Read More <img src="/Images/arrow2.jpeg" alt="arrow" />
                  </a>
                </div>
              </div>
            </p>
          </motion.div>
        </div>

        <motion.div whileHover={{ backgroundColor: "white" }} className="imgss">
          <motion.img
            className="sabaa"
            whileHover={{ scale: 1.2 }}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px",
              transition: "transform 1s ease-out",
            }}
            src="/Images/ssa.webp"
            alt="ssa"
          />
          <motion.p
            whileHover={{ scale: 1.2 }}
            style={{
              fontSize: "17px",
              padding: "3px",
              fontWeight: "normal",
              textAlign: "center",
              transition: "transform 1s ease-out ",
            }}
          >
            How the traffic control comp <br /> boosts frontline retention by
            <br /> with Beekeeper and eduMe
          </motion.p>
          <motion.img
            className="saba3"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            style={{ width: "30px", marginLeft: "160px" }}
            src="/Images/arrow2.jpeg"
            alt="arrow"
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Products;
