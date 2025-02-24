import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/LandingPage/HomePage";
import Footer from "./Component/Common/Footer";
import Support from "./Component/Support/Support";
import Navbar from "./Component/Common/Navbar";
import Powerfull from "./Component/PowerfullInfo/Powerfull";
import About from "./Component/About/About";
import RequestSample from "./Component/RequestSample/RequestSample";
import Zlock from "./Component/Products/ZLock/Products";
import Product from "./Component/Products/Product";
import Careers from "./Component/Careers/Careers";
import BuyZonetProduct from "./Component/BuyZonetProduct/BuyZonetProduct";
import Compliance from "./Component/ComplianceandEthics/Compliance";
import Press from "./Component/Press/Press";
import Patent from "./Component/Patents/Patent";
const App = () => {
  return (
    <Router>
      <div className=" overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/powerfullInfo" element={<Powerfull />} />
          <Route path="/about" element={<About />} />
          <Route path="/requestSample" element={<RequestSample />} />
          <Route path="/Zlock" element={<Zlock />} />
          <Route path="/products" element={<Product />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/buyProduct" element={<BuyZonetProduct />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/press" element={<Press />} />
          <Route path="/patents" element={<Patent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
