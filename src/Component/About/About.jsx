import React from "react";
import heroImage from "../../../public/AboutUs/HeroImage.png";
import OurCompany from "./OurCompany";
import CompanyImages from "./CompanyImages";
import Companies from "./Companies";
import LeadershipTeam from "./LeadershipTeam";
import Commitments from "./Commitments";
import ContactForm from "../Common/GetInTouch";

const About = () => {
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
            About Us
          </h1>
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
