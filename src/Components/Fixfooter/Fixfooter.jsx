import { Link } from "react-router-dom";

function Fixfooter() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          bottom: 0,
          width: "99%",
        }}
      >
        {/* Cookie Policy Section */}
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <p style={{ marginRight: "10px", marginBottom: 0 }}>
            Cookies make the internet better. That's why we use them to improve
            your experience on our site. If you don't like cookies in your
            browser, that's ok too!
          </p>
          <Link to="" style={{ marginTop: "20px", color: "black" }}>
            Cookie Policy
          </Link>
        </div>
        {/* Actions and Image Section */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            style={{
              backgroundColor: "skyblue",
              marginRight: "10px",
              border: "none",
              color: "white",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            Accept
          </button>
          <a href="" style={{ marginRight: "10px" }}>
            Preference
          </a>
          <img
            src="/Images/person.png"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            alt="User"
          />
        </div>
      </div>
    </>
  );
}

export default Fixfooter;
