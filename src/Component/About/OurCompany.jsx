import React from "react";
import company from "../../../public/AboutUs/company.png";
const OurCompany = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Image */}
        <div className="relative">
          <img
            src={company} // Replace with the actual image URL
            alt="Our Company"
            className="rounded-lg "
          />
          <div className="absolute -bottom-2 -left-4 bg-red-700 w-24 h-24 rounded-tr-3xl rounded-bl-3xl"></div>
        </div>

        {/* Right Section: Content */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 flex items-center">
            <span className="inline-block h-6 w-1 bg-red-500 mr-2"></span>
            Our Company
          </h3>
          <p className="text-gray-700 mt-4">
            We are innovators who created game-changing power distribution for
            data centers. Based in Boulder, Colorado, our founder, Bill Pachoud,
            created locking cables, automatic transfer switches, and a power
            distribution system that disrupted the industry with increased
            uptime, reduced risk, improved safety, and lower operating costs. As
            our products became more innovative, the number of our patents
            increased. Today we have more than 150 product and design patents.
          </p>
          <p className="text-gray-500 mt-4">
            Corporations worldwide rely on our products, including more than 80
            of the Fortune 100 Corporations to keep their data centers running
            with our zLock, z-ATS, and z-PDS. At Zonit, we’re more than just a
            technology company — we’re a driving force behind data center
            innovation.
          </p>
        </div>
      </div>

      {/* Lower Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl  text-blue-900">
          Elevate Your Data Center’s{" "}
          <span className="font-bold text-blue-900">Reliability</span> with
          <span className="font-bold text-blue-900"> Zonit</span>
        </h3>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          When it comes to safeguarding your data center’s mission-critical
          operations, Zonit stands as the top choice for cutting-edge solutions.
          Our comprehensive range of products and expertise ensures
          uninterrupted performance, setting us apart as the industry leader.
        </p>
      </div>
    </div>
  );
};

export default OurCompany;
