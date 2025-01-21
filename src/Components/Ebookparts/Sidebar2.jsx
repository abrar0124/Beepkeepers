import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductList from "./Productlist";

const Sidebar2 = () => {
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);

  return (
    <div style={{ display: "flex" }}>
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
          flex: "1",
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
              <label>
                <input type="checkbox" /> Hospitality
              </label>
              <br />
              <label>
                <input type="checkbox" /> Retail
              </label>
              <br />
              <label>
                <input type="checkbox" /> Travel
              </label>
              <br />
              <label>
                <input type="checkbox" /> NGOs
              </label>
              <br />
              <label>
                <input type="checkbox" /> Services
              </label>
              <br />
              <label>
                <input type="checkbox" /> Logistics
              </label>
              <br />
              <label>
                <input type="checkbox" /> Industry
              </label>
              <br />
              <label>
                <input type="checkbox" /> Healthcare
              </label>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      <div style={{ flex: "3", padding: "20px" }}>
        {" "}
        <ProductList />
      </div>
    </div>
  );
};
export default Sidebar2;
