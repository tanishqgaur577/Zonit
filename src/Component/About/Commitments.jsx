import React from "react";
import Mail from "../../../public/Support/mailSupport.png";
import call from "../../../public/Support/callSupport.png";

const Commitments = () => {
  return (
    <div>
      {/* Contact Section */}
      <div className=" p-6 mt-10 h-[70vh] flex justify-center  min-w-[100vw]">
        <div className=" bg-[#0A5587] w-full py-5 h-max  px-5 flex flex-col ">
          <h2 className="text-4xl  text-white text-center my-4 ">
            Our <span className="font-semibold">Commitments</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-6 h-[100px] justify-center mt-6">
            <div className="flex flex-col rounded-tr-4xl justify-start  h-[200px] w-[400px] items-center bg-white p-4 shadow-lg">
              <button className="bg-red-600 rounded-tr-2xl rounded-bl-2xl text-white mt-2 font-semibold py-2 px-4 rounded-md mb-2">
                Towards our Customer
              </button>
              <p className="text-gray-700 flex mt-1  justify-center items-center gap-3 text-md">
                We are committed to delivering products and solutions that
                exceed your expectations. Your success is our success, and we
                are here to support you every step of the way.
              </p>
            </div>

            <div className="flex flex-col rounded-tr-4xl h-[200px] w-[400px] justify-start items-center bg-white p-4 shadow-lg">
              <button className="bg-[#0A5587] rounded-tr-2xl rounded-bl-2xl text-white mt-2 font-semibold py-2 px-4 rounded-md mb-2">
                Towards our Employees
              </button>
              <p className="text-gray-700 flex mt-1 justify-center items-center gap-3 text-md">
                {" "}
                We provide a dynamic and inclusive work environment where
                creativity and innovation thrive. We invest in the professional
                growth and well-being of our team members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitments;
