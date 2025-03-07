import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../../../public/SampleRequest/HeroImage.png";
import SampleForm from "./SampleForm";

const RequestSample = () => {
  return (
    <>
      <div className="md:min-h-screen">
        <div className="relative h-full overflow-hidden">
          <motion.img
            src={HeroImage}
            alt="Support Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="object-cover md:h-full h-[600px] w-screen"
          />
          <div className="absolute inset-0 pointer-events-none bg-black/60"></div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:text-6xl text-4xl absolute w-full text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2"
          >
            Request a Sample or Evaluation Unit
          </motion.h1>
        </div>
      </div>
      <SampleForm />
    </>
  );
};

export default RequestSample;
