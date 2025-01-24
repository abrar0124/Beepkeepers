import "./Backbone.scss";
import { motion } from "framer-motion";
function Backbone() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            cursor: "pointer",
            marginTop: "10%",
          }}
        >
          Frontline workers are the backbone of your business,
          <br />
          but often lack the support and info they need to excel.
        </h2>
        <div className="backdone-con">
          <div>
            <motion.button
              className="scrollBtn"
              whileHover={{ scale: 1.2 }}
              onClick={scrollToTop}
            >
              <img
                className="commentsImg"
                src="/Images/comment1.webp"
                style={{ width: "150%" }}
              />
            </motion.button>
            <p
              className="paragrapgh1"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Ineffective communication
            </p>
            <p className="paragrapgh2">
              Traditional desk-based communication
              <br />
              tools fail the frontline, leading to
              <br />
              information gaps that cause errors and
              <br /> erode trust.
            </p>
          </div>
          <div>
            <motion.button
              className="scrollBtn"
              whileHover={{ scale: 1.2 }}
              onClick={scrollToTop}
            >
              <img
                className="commentsImg"
                src="/Images/comment2.webp"
                style={{ width: "150%" }}
              />
            </motion.button>
            <p
              className="paragrapgh1"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Negative experiences
            </p>
            <p className="paragrapgh2">
              Poor onboarding, unfilled shifts, and
              <br /> burnout impact morale. A bad deskless
              <br /> worker experience hurts productivity,
              <br /> culture, and retention.
            </p>
          </div>
          <div>
            <motion.button
              className="scrollBtn"
              whileHover={{ scale: 1.2 }}
              onClick={scrollToTop}
            >
              <img
                className="commentsImg"
                src="/Images/comment3.webp"
                style={{ width: "150%" }}
              />
            </motion.button>
            <p
              className="paragrapgh1"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Hard-to-access tools
            </p>
            <p className="paragrapgh2">
              Difficulty accessing critical information
              <br />
              frustrates workers and increases safety
              <br /> risks, downtime, and compliance failures.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Backbone;
