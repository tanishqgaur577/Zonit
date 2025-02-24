import React from "react";
import one from "../../../../public/Products/zlock/1.png";
import two from "../../../../public/Products/zlock/2.png";
import three from "../../../../public/Products/zlock/3.png";
import four from "../../../../public/Products/zlock/4.png";

const ZlockFeature = () => {
  return (
    <div className=" py-16">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-2 ">
        {/* First Row */}
        <div className="relative h-[300px]">
          {/* Left Image */}
          <img
            src={one} // Replace with the actual image URL
            alt="Tailored Solutions"
            className="   shadow-md"
          />
          <div className="absolute -bottom-8 z-10 -left-9  bg-red-700 w-18 h-18 rounded-tr-3xl rounded-bl-3xl"></div>
        </div>
        <div className="bg-[#303E48] text-white p-6 flex justify-center items-center flex-col  relative">
          <div className="absolute -top-8 -left-9  bg-red-700 w-18 h-18 rounded-tr-3xl rounded-bl-3xl"></div>
          <h4 className="text-xl text-center w-max font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Hassle-free Locking Technology{" "}
          </h4>
          <p className="text-gray-300 px-9">
            zLock provides a seamless experience with advanced locking
            technology that requires no clips or extra hardware. It's a
            straightforward, simple, and effective solution to keep your power
            cords securely connected.k
          </p>
        </div>

        {/* Second Row */}
        <div className="bg-[#0A5587] flex justify-center items-center flex-col text-white p-6  relative ">
          <div className="absolute -top-4 -left-4 bg-blue-900 w-12 h-12 "></div>
          <h4 className="text-xl text-center w-max font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Universal Compatibility
          </h4>
          <p>
            Say goodbye to compatibility concerns. zLock features
            non-proprietary connectors to ensure universal compatibility, so it
            seamlessly integrates with any brand of Power Distribution Unit
            (PDU) or IT hardware, providing freedom and flexibility without
            compromise or limitations.
          </p>
        </div>
        <div className="relative h-[300px]">
          {/* Left Image */}
          <img
            src={two} // Replace with the actual image URL
            alt="Tailored Solutions"
            className="h-full w-full shadow-md"
          />
        </div>

        {/* third Row */}
        <div className="relative h-[300px]">
          {/* Left Image */}
          <img
            src={three} // Replace with the actual image URL
            alt="Tailored Solutions"
            className=" shadow-md"
          />
          <div className="absolute -bottom-8 z-10 -left-9  bg-red-700 w-18 h-18 rounded-tr-3xl rounded-bl-3xl"></div>
        </div>
        <div className="bg-[#303E48] text-white p-6 flex justify-center items-center flex-col  relative">
          <div className="absolute -top-8 -left-9  bg-red-700 w-18 h-18 rounded-tr-3xl rounded-bl-3xl"></div>
          <h4 className="text-xl text-center w-max font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Easy Release
          </h4>
          <p className="text-gray-300">
            zLock features convenient, easy-to-reach tabs that make releasing
            the lock a breeze from either side of the plug.  zLock ensures
            effortless, hassle-free cable management, even in the most
            challenging data center environments.
          </p>
        </div>

        {/* fourth Row */}
        <div className="bg-[#0A5587] flex justify-center items-center flex-col text-white p-6  relative h-[300px]">
          <div className="absolute -top-4 -left-4 bg-blue-900 w-12 h-12 "></div>
          <h4 className="text-xl text-center w-max font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Sustainable Solution​
          </h4>
          <p>
            zLock is reliable and eco-friendly. It’s not just a one-time
            solution. It's reusable, allowing you to redeploy it on future
            projects, making it a cost-effective choice as well.
          </p>
        </div>
        <div className="relative h-[300px]">
          {/* Left Image */}
          <img
            src={four} // Replace with the actual image URL
            alt="Tailored Solutions"
            className="h-full w-full shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ZlockFeature;
