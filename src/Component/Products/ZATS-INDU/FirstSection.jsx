import React from "react";
import zlockImage from "../../../../public/Products/zlockLogo.png";
import zlockcable from "../../../../public/Products/zlockcable.png";
import { MoveRight } from "lucide-react";
const FirstSection = () => {
  return (
    <div className=" flex justify-center md:h-full h-[150vh] md:mb-0 mb-10  items-center flex-col">
      <h1 className="md:text-4xl text-2xl font-bold text-center w-[75%] md:w-[40%] mb-8">
        {" "}
        The World’s First IEC Dual-Locking Power Cord
      </h1>
      <img src={zlockImage} className="h-12 w-48 mb-5" alt="" />

      <div className="md:max-w-7xl w-full  mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Image */}
        <div className="relative">
          <img
            src={zlockcable} // Replace with the actual image URL
            alt="Our Company"
            className="rounded-lg shadow-lg rounded-tr-4xl"
          />
          <div className="absolute -bottom-2 -left-4 bg-red-700 md:w-24 md:h-24 w-18 h-18 rounded-tr-3xl rounded-bl-3xl"></div>
        </div>

        {/* Right Section: Content */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900  flex items-center">
            <span className="inline-block h-6 w-1 bg-red-500 mr-2"></span>
            Elevate your data center’s reliability with Zonit{" "}
          </h3>
          <p className="text-gray-700 mt-4">
            Welcome to Zonit’s zLock, the future of secure data center power.
            Our universally compatible, dual-locking zLock power cords are
            engineered to ensure your data center cables stay connected, no
            matter what challenges come your way.  zLock is your ultimate
            solution for data center connectivity. It securely locks your C13,
            C14, C15, C19, and C20 power cords on both ends, eliminating the
            risk of accidental disconnects and providing unmatched peace of
            mind.
          </p>
        </div>
      </div>
      <div className="w-full md:h-[100px] h-max bg-[#0A5587]  flex justify-center items-center mt-10 pb-3.5">
        <div className="flex  md:w-[80%] w-full md:px-8 px-5 justify-center items-center flex-col md:flex-row">
          <h1 className=" text-white py-3">
            If you’re looking for a single-sided locking power cord, Zonit’s
            A-LOCK is what you need. This single-sided locking power cord locks
            on the outlet end, with a standard non-locking input end.
          </h1>
          <button className="border flex gap-2 justify-center items-center border-white rounded-full text-nowrap px-5 py-2 text-white">
            Buy Now <MoveRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
