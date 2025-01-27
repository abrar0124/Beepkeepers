import "./Frontline.scss";
import Backbone from "../backbone/Backbone";
import { Link } from "react-router-dom";
import Drive from "../Drive/Drive";
import Fixfooter from "../Fixfooter/Fixfooter";
import Connectivity from "../Connectivity/Connectivity";
import Industeries from "../Industries/Industries";
import Fule from "../Fule/Fule";
import Beep from "../Pages/Beep";
import Footer from "../Pages/Footer";
import Get_Data from "../Get_Data/Get_Data";
import ScrollButton from "../Ebookparts/Scrollbutton";
function Frontline() {
  return (
    <>
      <div className="Front-container">
        <div>
          <h2
            className="front"
            style={{ fontSize: "50px", marginTop: "100px" }}
          >
            Why frontline <br /> businesses love <br />
            Beekeeper
          </h2>
          <Link to="/Producttour" className="Freepic" target="_blank">
            Product tour <img src="/Images/arrow2.jpeg" />
          </Link>
        </div>
        <div>
          <img
            src="/Images/mobile.webp"
            style={{ width: "60%", marginLeft: "39%", cursor: "pointer" }}
          />
        </div>
      </div>
      <Backbone />
      <Drive />
      <Connectivity />
      <Get_Data />
      <Industeries />
      <Fule />
      <Backbone />
      <ScrollButton />
      <Beep />
      <Footer />
      <Fixfooter />
    </>
  );
}
export default Frontline;
