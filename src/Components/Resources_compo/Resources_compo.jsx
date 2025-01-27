import Loginapi from "../Pages/Loginapi";
import Resources_div from "../Resources_div/Resources_div";
import Products_Pic from "../Solution_picdata/Products_pic";
import Beep from "../Pages/Beep";
import Footer2 from "../Pages/Footer";
import Get_Data from "../Get_Data/Get_Data";
import ScrollButton from "../Ebookparts/Scrollbutton";

function Resources_compo() {
  return (
    <>
      <Loginapi />
      <Resources_div />
      <Products_Pic />
      <Get_Data />
      <ScrollButton />
      <Beep />
      <Footer2 />
    </>
  );
}
export default Resources_compo;
