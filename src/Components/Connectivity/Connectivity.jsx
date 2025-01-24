import "./Connectivity.scss";
import { motion } from "framer-motion";

function Connectivity() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="connectivity-container">
      <p className="connectivity-header">
        The only platform built for how the frontline actually <br /> works
      </p>
      <div className="connectivity-flex">
        {[
          {
            imgSrc: "/Images/star1.webp",
            title: "Total connectivity and access",
            description:
              "Beekeeper ensures smooth communication across all levels of your organization, from HQ to the frontline, regardless of device or location, keeping your team connected and engaged.",
          },
          {
            imgSrc: "/Images/star2.webp",
            title: "Flexible integration one place",
            description:
              "Beekeeper ensures smooth communication across all levels of your organization, from HQ to the frontline, regardless of device or location, keeping your team connected and engaged.",
          },
          {
            imgSrc: "/Images/star9.webp",
            title: "Insightful analytics Use",
            description:
              "Beekeeper ensures smooth communication across all levels of your organization, from HQ to the frontline, regardless of device or location, keeping your team connected and engaged.",
          },
          {
            imgSrc: "/Images/star11.webp",
            title: "No-fuss implementation time",
            description:
              "Beekeeper ensures smooth communication across all levels of your organization, from HQ to the frontline, regardless of device or location, keeping your team connected and engaged.",
          },
          {
            imgSrc: "/Images/star5.webp",
            title: "Reliable Performance content",
            description:
              "Beekeeper ensures smooth communication across all levels of your organization, from HQ to the frontline, regardless of device or location, keeping your team connected and engaged.",
          },
          {
            imgSrc: "/Images/star6.webp",
            title: "Data security you can trust",
            description:
              "Beekeeper ensures smooth communication across all levels of your organization, from HQ to the frontline, regardless of device or location, keeping your team connected and engaged.",
          },
        ].map((item, index) => (
          <div className="connectivity-item" key={index}>
            <motion.button
              className="scrollBtn"
              whileHover={{ scale: 1.2 }}
              onClick={scrollToTop}
            >
              <img className="commentsImg" src={item.imgSrc} alt="icon" />
            </motion.button>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Connectivity;
