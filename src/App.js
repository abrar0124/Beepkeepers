// import React from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Whychoosekeeper from "./Components/Pages/Whychoosekeeper";
// import Products from "./Components/Pages/Products";
// import Pricing from "./Components/Pages/Pricing";
// import Solution from "./Components/Pages/Solution";
// import Resources from "./Components/Pages/Resources";
// import About from "./Components/Pages/About";
// import Ebook from "./Components/Pages/Ebook";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Ebook />} />
//           <Route path="/whychoosekeeper" element={<Whychoosekeeper />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/solution" element={<Solution />} />
//           <Route path="/resources" element={<Resources />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React from "react";
import Header from "./Header/Header";
import Ebook from "./Components/Pages/Ebook";

function App() {
  return (
    <div className="App">
      <Header />
      <Ebook />
    </div>
  );
}

export default App;
