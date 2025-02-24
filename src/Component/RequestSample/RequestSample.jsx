import React from "react";
import HeroImage from "../../../public/SampleRequest/HeroImage.png";
import SampleForm from "./SampleForm";
const RequestSample = () => {
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
          <h1 className="text-6xl absolute text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2">
            Request a Sample or Evaluation Unit
          </h1>
        </div>
      </div>
      <SampleForm />
    </>
  );
};

export default RequestSample;
