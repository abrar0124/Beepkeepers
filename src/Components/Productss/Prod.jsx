import React from "react";
import { motion } from "framer-motion";

const array = [
  {
    id: 1,
    img: "/Images/img1.webp",
    description: "Fuel your frontline: A buyer’s guide for internal software",
  },
  {
    id: 2,
    img: "/Images/img2.webp",
    description: "Fuel your frontline: A buyer’s guide for internal software",
  },
  {
    id: 3,
    img: "/Images/img3.png",
    description: "Fuel your frontline: A buyer’s guide for internal software",
  },
  {
    id: 4,
    img: "/Images/img4.png",
    description: "Fuel your frontline: A buyer’s guide for internal software",
  },
  {
    id: 5,
    img: "/Images/img5.png",
    description: "Fuel your frontline: A buyer’s guide for internal software",
  },
  {
    id: 6,
    img: "/Images/img6.webp",
    description: "Fuel your frontline: A buyer’s guide for internal software",
  },
  //   {
  //     id: 7,
  //     img: "/Images/img7.webp",
  //     description: "Fuel your frontline: A buyer’s guide for internal software",
  //   },
  {
    id: 8,
    img: "/Images/img8.jpg",
    description: "Fuel your frontline: A buyer’s guide for internal software",
  },
  {
    id: 9,
    img: "/Images/img9.jpg",
    description: "Fuel your frontline: A buyer’s guide for internal software",
  },
];

function Prod() {
  return (
    <>
      <div
        className="Products"
        style={{
          marginTop: "10%",
          gap: "40px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {array.map((item) => (
          <div
            className="arr1"
            key={item.id}
            style={{
              width: "17%",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "left",
              fontWeight: "bold",
              cursor: "pointer",
              marginLeft: "9px",
            }}
          >
            <motion.img
              className="imgs"
              whileHover={{ scale: 1.12 }}
              src={item.img}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <motion.p
              whileHover={{ scale: 1.2 }}
              style={{
                marginTop: "10px",
                fontSize: "16px",
                color: "#333",
                transition: "transform 1s ease-out",
              }}
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Prod;
