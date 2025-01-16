import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Sidebar.scss";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [showOptions3, setShowOptions3] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={`sidebar-container ${isMobile ? "mobile" : ""}`}>
        {/* Sidebar toggle button */}
        <div className={`sidebar ${isOpen ? "open" : "close"}`}>
          <div className="sidebar-header">
            <button className="toggle-button" onClick={toggleSidebar}>
              <img
                style={{ width: "25px", cursor: "pointer" }}
                src={isOpen ? "Images/cross.png" : "Images/three2.png"}
                alt="toggle-icon"
                className="toggle-icon"
              />
            </button>
          </div>

          {/* Sidebar content - shown only when `isOpen` is true */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="Sideee1"
            >
              <input
                className="inpp1"
                type="text"
                placeholder="Let’s find what you are looking for?"
              />

              <div className="Side2">
                <span>Why choose keeper</span>
                <button
                  className="buts"
                  onClick={() => setShowOptions1(!showOptions1)}
                  style={{ cursor: "pointer" }}
                >
                  {showOptions1 ? "×" : "+"}
                </button>
              </div>
              {showOptions1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="options-sections"
                >
                  <label>
                    <input type="checkbox" />
                    Why choose keeper
                  </label>
                </motion.div>
              )}
              <div className="Side2">
                <span>Solution</span>
                <button
                  className="buts"
                  onClick={() => setShowOptions3(!showOptions3)}
                  style={{ cursor: "pointer" }}
                >
                  {showOptions3 ? "×" : "+"}
                </button>
              </div>
              {showOptions3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="options-sections"
                >
                  <label>
                    <input type="checkbox" />
                    Capabilities
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" /> Employee communications
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" />
                    Employee engagement
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" />
                    Hiring and onboarding
                  </label>
                </motion.div>
              )}

              <div className="Side2">
                <span>Products</span>
                <button
                  className="buts"
                  onClick={() => setShowOptions2(!showOptions2)}
                  style={{ cursor: "pointer" }}
                >
                  {showOptions2 ? "×" : "+"}
                </button>
              </div>
              {showOptions2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="options-sections"
                >
                  <label>
                    <input type="checkbox" />
                    Frontline Success Platform
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" /> Comunication
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" />
                    Employees
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" /> Work
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" /> Security
                  </label>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
