import React from "react";

const Pricings = () => {
  return (
    <section
      className="solutions"
      style={{
        margin: "20% 1% 0",
        fontSize: "24px",
        cursor: "pointer",
        lineHeight: "1.6",
      }}
      aria-labelledby="solutions-title"
    >
      <h2 id="solutions-title" className="solutions-title">
        Pricings
      </h2>
      <ul className="solutions-features">
        <li className="feature-item">✅Secure and Reliable</li>
        <li className="feature-item">👍 Easy to Use</li>
        <li className="feature-item">💰 Affordable Pricing</li>
        <li className="feature-item"> 📳24/7 Customer Support</li>
      </ul>
    </section>
  );
};

export default Pricings;
