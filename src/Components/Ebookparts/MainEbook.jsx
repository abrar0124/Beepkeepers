import React from "react";
import Header2 from "../Ebookparts/Header2";
import Sidebar2 from "../Ebookparts/Sidebar2";
import ScrollButton from "../Ebookparts/Scrollbutton";
import Beep from "../Pages/Beep";
import Footer from "../Pages/Footer";

const MainEbook = () => {
  return (
    <>
      <Header2 />
      <div className="EbookMain">
        <Sidebar2 />
      </div>
      <ScrollButton />
      <Beep />
      <Footer />
    </>
  );
};
export default MainEbook;
