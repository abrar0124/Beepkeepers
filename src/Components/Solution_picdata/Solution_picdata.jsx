import ScrollButton from "../Ebookparts/Scrollbutton";
import Get_Data from "../Get_Data/Get_Data";
import Beep from "../Pages/Beep";
import Footer2 from "../Pages/Footer";
import Loginapi from "../Pages/Loginapi";
import Products_Pic from "./Products_pic";
function Solution_picdata() {
  return (
    <>
      <Loginapi />
      <Products_Pic />
      <Get_Data />
      <ScrollButton />
      <Beep />
      <Footer2 />
    </>
  );
}
export default Solution_picdata;
