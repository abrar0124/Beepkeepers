import React from "react";
import "./Sassfile.scss";
function Products() {
  return (
    <>
      <div
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
        <div className="child1">
          <p className="pp1" style={{ fontWeight: "bold" }}>
            Frontline Success Platform
          </p>
          <p className="pp2">
            See why Beekeeper is the trusted choice for enhancing the deskless
            worker experience.
          </p>
          <a href="" className="joinbutton">
            Read More <img src="/Images/arrow2.jpeg"></img>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="child1">
            <p className="pp1" style={{ fontWeight: "bold" }}>
              Security
              <div>
                <p className="pp2">
                  See why Beekeeper is the trusted choice for enhancing the
                  deskless worker experience.
                </p>
                <div>
                  <a href="" className="joinbutton">
                    Read More <img src="/Images/arrow2.jpeg"></img>
                  </a>
                </div>
              </div>
            </p>
          </div>

          <div className="child1">
            <p className="pp1" style={{ fontWeight: "bold" }}>
              Integrations
              <div>
                <p className="pp2">
                  See why Beekeeper is the trusted choice for enhancing the
                  deskless worker experience.
                </p>
                <div>
                  <a href="" className="joinbutton">
                    Read More <img src="/Images/arrow2.jpeg"></img>
                  </a>
                </div>
              </div>
            </p>
          </div>
        </div>

        <div className="child1">
          <img
            src="/Images/pic1.webp"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <a href="" className="joinbutton">
            Read More <img src="/Images/arrow2.jpeg"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Products;
