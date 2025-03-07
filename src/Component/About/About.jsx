import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../../../public/AboutUs/HeroImage.png";
import OurCompany from "./OurCompany";
import CompanyImages from "./CompanyImages";
import Companies from "./Companies";
import LeadershipTeam from "./LeadershipTeam";
import Commitments from "./Commitments";
import ContactForm from "../Common/GetInTouch";

const About = () => {
  return (
    <>
      <div className="md:min-h-screen ">
        <div className="relative  h-full w-full overflow-hidden">
          <motion.img
            src={HeroImage}
            alt="Support Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="object-cover md:h-full h-[600px] w-screen"
          />
          <div className="absolute inset-0  pointer-events-none bg-black/50"></div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl absolute text-center w-full text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2"
          >
            About Us
          </motion.h1>
        </div>
      </div>
      <OurCompany />
      <CompanyImages />
      <Companies />
      <LeadershipTeam />
      <Commitments />
      <ContactForm />
    </>
  );
};

export default About;
