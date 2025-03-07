import React from "react";
import heroImage from "../../../public/pressheroImage.png";
import RecentPressRelease from "./RecentPressRelease";
import CountOnUs from "../Careers/CountOnUs";
import ContactForm from "../Common/GetInTouch";
const Press = () => {
  return (
    <>
      <div className="min-h-screen ">
        <div className="relative  h-full w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Support Background"
            fill
            className="object-cover md:h-full h-[600px] w-screen"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-black/70"></div>
          <h1 className="text-5xl absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2">
            Press
          </h1>
        </div>
      </div>
      <div className="w-full md:px-24 px-4 flex md:flex-row flex-col  ">
        <h1 className="text-3xl text-[#005487]  md:text-center flex-1 font-normal">
          Press Releases from Zonit
        </h1>
        <p className="flex-1 text-lg">
          Welcome to Zonit’s news and updates hub, where you’ll find the latest
          information on our cutting-edge data center power distribution
          solutions. With a focus on efficiency, reliability, and security,
          Zonit is your partner for powering the future of data centers. We are
          dedicated to providing innovative solutions that meet the evolving
          needs of data center operators and IT professionals worldwide.
        </p>
      </div>
      <RecentPressRelease />
      <CountOnUs />
      <div className="mb-20"></div>
      <ContactForm />
    </>
  );
};

export default Press;
