import React from "react";
import heroImage from "../../../public/Compliance/heroImage.png";
import CountOnUs from "../Careers/CountOnUs";
import ContactForm from "../Common/GetinTouch";
import ExcellenceSection from "./ExcellenceSection";
const Compliance = () => {
  return (
    <>
      <div className="min-h-screen ">
        <div className="relative  h-full w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Support Background"
            fill
            className="object-cover w-full"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-black/50"></div>
          <h1 className="text-5xl absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2">
            Compliance and Ethics
          </h1>
        </div>
      </div>
      <ExcellenceSection />
      <CountOnUs />
      <ContactForm />
    </>
  );
};

export default Compliance;
