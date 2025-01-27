import { motion } from "framer-motion";
import "./File.scss";
import { Link } from "react-router-dom";
function Resources_div() {
  return (
    <>
      <div className="resources_div">
        <div>
          <img
            className="sabaa"
            style={{
              width: "530px",
              height: "400px",
              cursor: "pointer",
              borderRadius: "8px",
              transition: "transform 1s ease-out",
            }}
            src="/Images/girl.webp"
          />
        </div>
        <div>
          <h2 style={{ fontSize: "50px" }}>What we’ll cover</h2>
          <p>
            Creating engagement from day one with innovative employee onboarding
            <br />
            strategies Digitizing processes to empower employees to get the job
            <br />
            done well Practical strategies to create a safe and supportive work
            <br />
            environment Aligning core organizational values to motivate your
            <br />
            workforce
          </p>
          <p style={{ fontSize: "20px" }}>
            If you’re an HR professional or business leader looking to optimize
            <br />
            your employee retention strategies and foster a culture of
            <br />
            excellence, this webinar is for you.
          </p>
          <Link
            to="/Producttour"
            className="Freepic"
            target="_blank"
            style={{ color: "black" }}
          >
            Watch replay
          </Link>
        </div>
      </div>
    </>
  );
}
export default Resources_div;
