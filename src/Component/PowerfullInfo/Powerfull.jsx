import React from "react";
import heroImage from "../../../public/powerfull/heroImage.png";
import { motion } from "framer-motion";
import CaseStudy from "./CaseStudy";
import BlogSection from "../Common/Blogs";
import IndustrialNews from "./industrialNews";
import FAQ from "../Common/FAQ";
import ContactForm from "../Common/GetInTouch";

const Powerfull = () => {
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
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-black/40"></div>
          <h1 className="text-5xl absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2">
            Powerful Info
          </h1>
        </div>
      </div>
      <CaseStudy />
      <BlogSection />
      <IndustrialNews />
      <FAQ />
      <ContactForm />
    </>
  );
};

export default Powerfull;
