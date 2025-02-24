import React from "react";
import HeroImage from "../../../../public/Products/heroImage.png";
import zlockLogo from "../../../../public/Products/zlockLogoWhite.png";
import FirstSection from "./FirstSection";
import ZlockFeature from "./ZlockFeature";
import SecondSection from "./SecondSection";
import ZlockGuide from "./ZlockGuide";
import ContactForm from "../../Common/GetInTouch";
const Products = () => {
  return (
    <>
      <div className="min-h-screen ">
        <div className="relative h-full overflow-hidden">
          <img
            src={HeroImage}
            alt="Support Background"
            fill
            className="object-cover "
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-black/60"></div>
          <h1 className="text-6xl absolute text-center flex justify-center items-center flex-col  text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2">
            <img src={zlockLogo} alt="" className="h-16 w-62 mb-2.5" />
            ZLock | Secure Your Data Center Power
          </h1>
        </div>
      </div>
      <FirstSection />
      <ZlockFeature />
      <SecondSection />
      <ZlockGuide />
      <ContactForm />
    </>
  );
};

export default Products;
