import React from "react";
import "./Sassfile.scss";
function Whychoosekeeper() {
  return (
    <>
      <div
        className="Whycontainer"
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10%",
          padding: "20px",
          cursor: "pointer",
          borderRadius: "100px",
        }}
      >
        <div className="child1">
          <p className="pp1" style={{ fontWeight: "bold" }}>
            Why choose Beekeeper
          </p>
          <p className="pp2">
            See why Beekeeper is the trusted choice for enhancing the deskless
            worker experience.
          </p>
          <a href="" className="joinbutton">
            Read More <img src="/Images/arrow2.jpeg"></img>
          </a>
        </div>

        <div>
          <img
            src="/Images/pic1.webp"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <p className="pp2">
            How the traffic control company boosts frontline retention by 68%
            with Beekeeper and eduMe
          </p>
          <img
            className="saba3"
            style={{ width: "30px", marginLeft: "250px" }}
            src="/Images/arrow2.jpeg"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Whychoosekeeper;
