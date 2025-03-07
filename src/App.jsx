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
import ZATSAI from "./Component/Products/ZATS-AI/Products";
import ZMicro from "./Component/Products/ZATS-Micro/Products";
import ZIndu from "./Component/Products/ZATS-INDU/Products";
import ZPDS from "./Component/Products/ZPDS/Products";
import Product from "./Component/Products/Product";
import Careers from "./Component/Careers/Careers";
import BuyZonetProduct from "./Component/BuyZonetProduct/BuyZonetProduct";
import Compliance from "./Component/ComplianceandEthics/Compliance";
import Press from "./Component/Press/Press";
import Patent from "./Component/Patents/Patent";
import Insight from "./Component/Insight/Insight";
import ScrollToTop from "./ScrollToTop";
const App = () => {
  return (
    <Router>
      <div className=" overflow-hidden">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/powerfullInfo" element={<Powerfull />} />
          <Route path="/about" element={<About />} />
          <Route path="/requestSample" element={<RequestSample />} />
          <Route path="/Zlock" element={<Zlock />} />
          <Route path="/zats-ai-infrastructure" element={<ZATSAI />} />
          <Route path="/zats-micro" element={<ZMicro />} />
          <Route path="/zats-industrial" element={<ZIndu />} />
          <Route path="/z-pds" element={<ZPDS />} />
          <Route path="/products" element={<Product />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/buyProduct" element={<BuyZonetProduct />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/press" element={<Press />} />
          <Route path="/patents" element={<Patent />} />
          <Route path="/insight" element={<Insight />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
