import React from "react";
import Plug from "../../../public/Products/plug.png";
import server from "../../../public/Products/server.png";
import timer from "../../../public/Products/timer.png";
import serverRack from "../../../public/Products/serverRack.png";
import zlockcable from "../../../public/Products/zlockcable.png";
import Ellipse from "../../../public/Products/Ellipse.png";
const SecondSectionProduct = () => {
  return (
    <div className="bg-white pb-10  px-4">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="flex justify-start mb-4 ">
              <img src={Plug} alt="" className="h-12 w-12 " />
            </div>
            <h3 className="text-xl text-start border-l-8 border-blue-600 pl-3.5 font-bold text-gray-900">
              Versatile Plug and Cord Solutions
            </h3>
            <p className="text-gray-600 mt-4 text-start">
              Give your data center an extra layer of security with dual-locking
              connectors that are universally compatible to ensure a secure and
              reliable connection across all your devices. Say goodbye to
              compatibility concerns and hello to seamless integration.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="flex justify-start mb-4">
              <img src={timer} alt="" className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-start border-l-8 border-red-700 pl-3.5">
              Millisecond Transfer Speeds
            </h3>
            <p className="text-gray-600 mt-4 text-start">
              Experience the power of speed with Zonit. Our products boast
              millisecond transfer speeds, ensuring that your data center
              remains agile and always ready for action. Say goodbye to downtime
              and hello to uninterrupted operations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="flex justify-start mb-4">
              <img src={server} alt="" className="h-12 w-12" />
            </div>
            <h3 className="text-xl text-start border-l-8 border-amber-400 pl-3.5 font-bold text-gray-900">
              Rack-Based Power Distribution
            </h3>
            <p className="text-gray-600 mt-4 text-start">
              Ensure reliable, robust, and efficient power distribution without
              compromising on reliability. Zonit offers cost-effective solutions
              for maintaining uptime in a streamlined and clutter-free data
              center.
            </p>
          </div>
        </div>

        {/* Middle Section with Image */}
        <div className="flex flex-col md:flex-row items-center justify-around ">
          {/* Server Rack Image */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="h-[300px] w-[300px] bg-blue-100/25 -left-32 -top-2.5 absolute rounded-full"></div>
            <img src={Ellipse} className="absolute h-full left-1 " alt="" />
            <div className=" p-4 rounded-lg shadow-md">
              <img
                src={serverRack} // Replace with your image URL
                alt="Server Rack"
                className="w-[250px] h-[500px]"
              />
            </div>
          </div>

          {/* Z-Lock Card */}
          <div className="w-[300px] bg-gradient-to-r from-red-700 to-black text-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={zlockcable} // Replace with your Z-Lock icon
                alt="Z-Lock"
                className="w-16 bg-white rounded-full h-16"
              />
            </div>
            <h3 className="text-3xl font-semibold">Z-Lock</h3>
            <p className="text-gray-300 mb-6">
              Zonit’s locking connectors are universally compatible, providing a
              secure and dependable connection across all your devices. With
              Zonit, compatibility and accidental disconnects are concerns of
              the past.
            </p>
            <a
              href="#"
              className="text-yellow-400 font-bold inline-flex items-center hover:underline"
            >
              Learn More About Z-LOCK →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionProduct;
