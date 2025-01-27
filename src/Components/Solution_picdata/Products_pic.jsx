import { Link } from "react-router-dom";
import Producttour from "../../pages/Productstour";

function Products_Pic() {
  return (
    <>
      <div
        style={{
          paddingTop: "5%",
          padding: "4%",
          display: "flex",
          backgroundColor: "wheat",
        }}
      >
        <div>
          <p style={{ fontSize: "40px", fontWeight: 600 }}>
            You might
            <br /> also be <br />
            interested in
          </p>
          <Link
            to="/Producttour"
            className="Freepic"
            target="_blank"
            style={{ color: "white", backgroundColor: "black" }}
          >
            View Resources
          </Link>
        </div>
        <div>
          <Producttour />
        </div>
      </div>
    </>
  );
}
export default Products_Pic;
