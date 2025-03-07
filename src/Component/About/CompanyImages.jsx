import React from "react";
import one from "../../../public/AboutUs/1.png";
import two from "../../../public/AboutUs/2.png";
import three from "../../../public/AboutUs/3.png";
import four from "../../../public/AboutUs/4.png";
import five from "../../../public/AboutUs/5.png";

const CompanyImages = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-2 ">
        {/* First Row */}
        <div className="relative h-[300px] bg-red-400">
          {/* Left Image */}
          <img
            src={one} // Replace with the actual image URL
            alt="Tailored Solutions"
            className=" shadow-md"
          />
          <div className="absolute -bottom-8 z-10 -left-9  bg-red-700 w-18 h-18 rounded-tr-3xl rounded-bl-3xl"></div>
        </div>
        <div className="bg-[#303E48] text-white p-6 flex justify-center items-center flex-col  relative">
          <div className="absolute -top-8 -left-9  bg-red-700 w-18 h-18 rounded-tr-3xl rounded-bl-3xl"></div>
          <h4 className="text-xl text-center w-max font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Tailored Solutions for Your Needs
          </h4>
          <p className="text-gray-300">
            Our commitment to understanding your unique requirements is what
            sets us apart. We take pride in delivering tailored solutions that
            fit perfectly into your data center environment. Explore our use
            cases to see how Zonit has helped various industries achieve greater
            reliability, uptime, and efficiency in their mission-critical
            operations.
          </p>
          <a
            href="#"
            className="text-white font-semibold underline mt-4 inline-block"
          >
            Learn More About Zonit Products ↗
          </a>
        </div>

        {/* Second Row */}
        <div className="bg-[#0A5587] flex justify-center items-center flex-col text-white p-6  relative h-[300px]">
          <div className="absolute -top-4 -left-4 bg-blue-900 w-12 h-12 "></div>
          <h4 className="text-xl text-center w-max font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Trusted Partnerships
          </h4>
          <p>
            Zonit collaborates with leading technology partners to ensure we
            bring you the latest innovations in data center management. Our
            strong partnerships are a testament to our dedication to providing
            top-notch solutions for your critical infrastructure.
          </p>
          <a
            href="#"
            className="text-white font-semibold underline mt-4 inline-block"
          >
            Find a Zonit Premier Partner ↗
          </a>
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
            Stay Informed
          </h4>
          <p className="text-gray-300">
            Stay up-to-date with the industry trends and insights. Read our blog
            to explore topics like cord management, backup, and data center
            capacity, ensuring you are always informed about the latest
            developments in the data center arena.
          </p>
          <a
            href="#"
            className="text-white font-semibold underline mt-4 inline-block"
          >
            Read Zonit blogs ↗
          </a>
        </div>

        {/* fourth Row */}
        <div className="bg-[#0A5587] flex justify-center items-center flex-col text-white p-6  relative h-[300px]">
          <div className="absolute -top-4 -left-4 bg-blue-900 w-12 h-12 "></div>
          <h4 className="text-xl text-center w-max font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Discover Real World use cases
          </h4>
          <p>
            Explore our use cases to see how Zonit’s solutions can help
            businesses like yours overcome challenges and optimize your data
            center operations. From healthcare to telecommunications, our
            products have made a difference.
          </p>
          <a
            href="#"
            className="text-white font-semibold underline mt-4 inline-block"
          >
            Read the case studies ↗
          </a>
        </div>
        <div className="relative h-[300px]">
          {/* Left Image */}
          <img
            src={four} // Replace with the actual image URL
            alt="Tailored Solutions"
            className="h-full w-full shadow-md"
          />
        </div>
        {/* five Row */}

        {/* third Row */}
        <div className="relative h-[300px]">
          {/* Left Image */}
          <img
            src={five} // Replace with the actual image URL
            alt="Tailored Solutions"
            className=" shadow-md h-full w-full"
          />
          <div className="absolute -bottom-8 z-10 -left-9  bg-red-700 w-18 h-18 rounded-tr-3xl rounded-bl-3xl"></div>
        </div>
        <div className="bg-[#303E48] text-white p-6 flex justify-center items-center flex-col  relative">
          <div className="absolute -top-8 -left-9  bg-red-700 w-18 h-18 rounded-tr-3xl rounded-bl-3xl"></div>
          <h4 className="text-xl text-center w-max font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Why Zonit ?
          </h4>
          <p className="text-gray-300">
            Choose Zonit as your trusted partner for data center solutions and
            experience unmatched reliability, efficiency, and security. Elevate
            your data center’s performance with Zonit’s cutting-edge products
            and expertise. Your mission-critical operations deserve nothing
            less.d about the latest developments in the data center arena.
          </p>
          <a
            href="#"
            className="text-white font-semibold underline mt-4 inline-block"
          >
            Get a Sample today ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyImages;
