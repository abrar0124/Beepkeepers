import "./Sassfile.scss";
import "./Footer.scss";

function Beep(props) {
  // const {type}=props;

  return (
    <>
      {/* iftyope===p<p>{children} */}
      <div className="bep">
        <h2 className="bh2" style={{ textAlign: "center", fontSize: "40px" }}>
          Ready to get started with Beekeeper?
        </h2>
        <p
          className="ss"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "18px",
            padding: "2px",
          }}
        >
          Join 1200+ companies transforming frontline work with Beekeeper. Start
          your journey today to make every <br /> task easier, every team
          stronger, and every shift smoother.
        </p>

        <div
          className="sdsd"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div>
            <a href="" className="joinbutton1">
              Try it free <img src="/Images/arrow2.jpeg" />
            </a>
          </div>
          <div>
            <a href="" className="joinbutton2">
              Shedule a demo
              <img src="/Images/chita.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Beep;
