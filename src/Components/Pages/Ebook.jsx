import React, { useState } from "react";
import "./Sassfile.scss";
import { motion } from "framer-motion";

const Ebook = () => {
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);

  const array = [
    {
      id: 1,
      img: "/Images/img1.webp",
      description:
        "Fuel your frontline: A buyer’s guide for internal communications software",
    },
    {
      id: 2,
      img: "/Images/img2.webp",
      description:
        "Fuel your frontline: A buyer’s guide for internal communications software",
    },
    {
      id: 3,
      img: "/Images/img3.png",
      description:
        "Fuel your frontline: A buyer’s guide for internal communications software",
    },
    {
      id: 4,
      img: "/Images/img4.png",
      description:
        "Fuel your frontline: A buyer’s guide for internal communications software",
    },
    {
      id: 5,
      img: "/Images/img5.png",
      description:
        "Fuel your frontline: A buyer’s guide for internal communications software",
    },
    {
      id: 6,
      img: "/Images/img6.webp",
      description:
        "Fuel your frontline: A buyer’s guide for internal communications software",
    },
    {
      id: 7,
      img: "/Images/img7.webp",
      description:
        "Fuel your frontline: A buyer’s guide for internal communications software",
    },
    {
      id: 8,
      img: "/Images/img8.jpg",
      description:
        "Fuel your frontline: A buyer’s guide for internal communications software",
    },
    {
      id: 9,
      img: "/Images/img9.jpg",
      description:
        "Fuel your frontline: A buyer’s guide for internal communications software",
    },
  ];

  return (
    <>
      <div
        style={{
          marginLeft: "130px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh",
          gap: "31px",
          padding: "10px",
          marginTop: "20%",
        }}
      >
        <div
          className="Sidee1"
          style={{
            width: "20%",
            padding: "10px",
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
            <span style={{ cursor: "pointer" }}>Function</span>
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
              transition={{ duration: 0.5, ease: "easeInOut" }}
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
            <span style={{ cursor: "pointer" }}>Industry</span>
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
        </div>

        {/* Products Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "50px",
            width: "75%",
          }}
        >
          {array.map((item) => (
            <div
              key={item.id}
              style={{
                width: "20%",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
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
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p style={{ marginTop: "10px", fontSize: "14px", color: "#333" }}>
                {item.description}
              </p>
              <a href="" className="joinbutton">
                Read More <img src="/Images/arrow2.jpeg"></img>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ebook;
