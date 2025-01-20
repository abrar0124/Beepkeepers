import React, { useState } from "react";
import "./Sassfile.scss";
import { motion } from "framer-motion";
import Beep from "./Beep";
import Footer2 from "./Footer";

const Ebook = () => {
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);

  const array = [
    {
      id: 1,
      img: "/Images/img1.webp",
      description: "Fuel your frontline: A buyer’s guide for internal software",
    },
    {
      id: 2,
      img: "/Images/img2.webp",
      description:
        "Fuel your frontline: A buyer’s guide for internal  software",
    },
    {
      id: 3,
      img: "/Images/img3.png",
      description: "Fuel your frontline: A buyer’s guide for internal software",
    },
    {
      id: 4,
      img: "/Images/img4.png",
      description:
        "Fuel your frontline: A buyer’s guide for internal  software",
    },
    {
      id: 5,
      img: "/Images/img5.png",
      description:
        "Fuel your frontline: A buyer’s guide for internal  software",
    },
    {
      id: 6,
      img: "/Images/img6.webp",
      description:
        "Fuel your frontline: A buyer’s guide for internal  software",
    },
    {
      id: 7,
      img: "/Images/img7.webp",
      description:
        "Fuel your frontline: A buyer’s guide for internal  software",
    },
    {
      id: 8,
      img: "/Images/img8.jpg",
      description:
        "Fuel your frontline: A buyer’s guide for internal  software",
    },
    {
      id: 9,
      img: "/Images/img9.jpg",
      description: "Fuel your frontline: A buyer’s guide for internal software",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <img
        className="Sabba"
        style={{
          marginTop: "13%",
          marginLeft: "65%",
          cursor: "pointer",
        }}
        src="/Images/Saba1.svg"
      />
      <motion.h2
        whileHover={{ scale: 1.2 }}
        className="hh2"
        style={{ marginLeft: "9.5%", fontSize: "45px", cursor: "pointer" }}
      >
        eBook
      </motion.h2>
      <motion.div
        className="Divsss"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          marginLeft: "130px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh",
          gap: "31px",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="Sidee1"
          style={{
            padding: "60px",
          }}
        >
          <input className="inp1" type="text" placeholder="Search" />
          <div
            className="Side2"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <span className="fun" style={{ cursor: "pointer" }}>
              Function
            </span>
            <div>
              <button
                className="buts"
                style={{ cursor: "pointer" }}
                onClick={() => setShowOptions1(!showOptions1)}
              >
                {showOptions1 ? "×" : "+"}
              </button>
            </div>
          </div>
          {showOptions1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                padding: "5px",
                marginTop: "10px",
                borderRadius: "5px",
              }}
            >
              <label>
                <input type="checkbox" /> Business Leader
              </label>
              <br />
              <label>
                <input type="checkbox" /> HR
              </label>
              <br />
              <label>
                <input type="checkbox" /> Operations
              </label>
              <br />
              <label>
                <input type="checkbox" /> Communication
              </label>
            </motion.div>
          )}

          <div
            className="Side2"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <span className="fun" style={{ cursor: "pointer" }}>
              Industry
            </span>
            <div>
              <button
                className="buts"
                style={{ cursor: "pointer" }}
                onClick={() => setShowOptions2(!showOptions2)}
              >
                {showOptions2 ? "×" : "+"}
              </button>
            </div>
          </div>
          {showOptions2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                padding: "5px",
                marginTop: "10px",
                borderRadius: "5px",
              }}
            >
              <label>
                <input type="checkbox" /> Manufacturing
              </label>
              <br />
              <label>
                <input type="checkbox" /> Transportation
              </label>
              <br />
              <label>
                <input type="checkbox" /> Construction
              </label>
              <br />
              <label>
                <input type="checkbox" /> Food Industry
              </label>

              <br />
              <label htmlFor="option4">
                <input type="checkbox" /> Hospitality
              </label>
              <br />
              <label htmlFor="option4">
                <input type="checkbox" /> Retail
              </label>
              <br />
              <label htmlFor="option4">
                <input type="checkbox" /> Travel
              </label>
              <br />
              <label htmlFor="option4">
                <input type="checkbox" /> NGOs
              </label>
              <br />
              <label htmlFor="option4">
                <input type="checkbox" /> Services
              </label>
              <br />
              <label htmlFor="option4">
                <input type="checkbox" /> Logistics{" "}
              </label>
              <br />
              <label htmlFor="option4">
                <input type="checkbox" id="option4" /> Industry
              </label>
              <br />
              <label htmlFor="option4">
                <input type="checkbox" id="option4" /> Healthcare
              </label>
            </motion.div>
          )}
        </motion.div>

        <div
          className="Products"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {array.map((item) => (
            <div
              className="arr1"
              key={item.id}
              style={{
                width: "23%",
                padding: "10px",
                borderRadius: "8px",
                textAlign: "left",
                fontWeight: "bold",
                cursor: "pointer",
                marginLeft: "9px",
              }}
            >
              <motion.img
                className="imgs"
                whileHover={{ scale: "1.12" }}
                src={item.img}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <motion.p
                whileHover={{ scale: 1.2 }}
                style={{
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "#333",
                  transition: "transform 1s ease-out",
                }}
              >
                {item.description}
              </motion.p>
              <a href="" className="joinbutton">
                Read More <img src="/Images/arrow2.jpeg" alt="arrow" />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.button
        className="www1"
        whileHover={{ scale: 1.2 }}
        onClick={scrollToTop}
        style={{
          border: "none",
          borderRadius: "50%",
          marginTop: "15%",
          marginLeft: "50%",
          width: "60px",
          height: "60px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 10px",
        }}
      >
        <img
          className="www"
          src="/Images/eer.png"
          alt="Right arrow"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </motion.button>
      <Beep />
      <Footer2 />
    </>
  );
};

export default Ebook;
