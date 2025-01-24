import { Link } from "react-router-dom";
import "./Exp.scss";
import Platform from "../platform/Platform";
import Activated from "../Activated/Activated";
import Connectivity from "../Connectivity/Connectivity";
import Fule from "../Fule/Fule";
import Backbone from "../backbone/Backbone";
import Beep from "../Pages/Beep";
import Footer from "../Pages/Footer";
function Exp() {
  return (
    <>
      <div className="Exp">
        <h4
          style={{
            fontSize: "20px",
            textAlign: "center",
            paddingTop: "10%",
            color: "white",
          }}
        >
          The #1 frontline employee ap
        </h4>
        <h2
          className="cr"
          style={{ textAlign: "center", fontSize: "50px", color: "white" }}
        >
          Create a frontline experience that fuels
          <br /> performance
        </h2>
        <p style={{ color: "white", textAlign: "center", fontSize: "20px" }}>
          Everything your frontline needs — right at their fingertips, built for
          the way they work.
        </p>
        <Link
          to="/Producttour"
          style={{ marginLeft: "43%" }}
          className="Freepic"
          target="_blank"
        >
          Product tour <img src="/Images/arrow2.jpeg" />
        </Link>
        <img
          src="/Images/platform.webp"
          style={{ marginLeft: "14%", width: "70%", marginTop: "2%" }}
        />
      </div>
      <Platform />
      <Activated />
      <Connectivity />
      <Fule />
      <Backbone />
      <Beep />
      <Footer />
    </>
  );
}
export default Exp;
