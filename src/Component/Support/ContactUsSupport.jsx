import React from "react";
import Mail from "../../../public/Support/mailSupport.png";
import call from "../../../public/Support/callSupport.png";

const ContactUsSupport = () => {
  return (
    <div>
      {/* Contact Section */}
      <div className=" md:p-6 p-2 mt-10 md:h-[70vh]  flex justify-center  min-w-[100vw]">
        <div className=" bg-gray-200 w-full py-5 h-max px-5 flex flex-col ">
          <h2 className="text-xl font-semibold text-red-500">Count on Us</h2>
          <h1 className="text-3xl font-bold text-[#024269] mt-2">
            We are here to help
          </h1>
          <p className="text-gray-600 mt-4 text-xl">
            If you have any questions or need assistance, please don’t hesitate
            to contact us. We are dedicated to addressing any inquiries or
            feedback promptly.
          </p>
          <p className="text-gray-600 mt-2 text-2xl">
            Thank you for choosing Zonit.
          </p>

          <div className="flex flex-row gap-6 h-[230px] justify-center mt-6">
            <div className="flex flex-col rounded-tr-4xl justify-start  md:h-[200px] md:w-[400px] h-[120px] w-[340px] items-center bg-white md:p-4 px-4 shadow-lg">
              <button className="bg-red-600 rounded-tr-2xl rounded-bl-2xl text-white md:mt-5 mt-2 font-semibold py-2 px-4 rounded-md mb-2">
                Email Us
              </button>
              <p className="text-gray-700 flex md:mt-4 mt-2  justify-center items-center gap-3 md:text-xl text-md">
                <img src={Mail} alt="" className="md:h-10 md:w-10 h-7 w-7 " />
                info@zonit.com
              </p>
            </div>

            <div className="flex flex-col rounded-tr-4xl justify-start  md:h-[200px] md:w-[400px] h-[120px] w-[340px] items-center bg-white md:p-4 px-4 shadow-lg">
              <button className="bg-blue-600 rounded-tr-2xl rounded-bl-2xl text-white md:mt-5 mt-2 font-semibold py-2 px-4 rounded-md mb-2">
                Call Us
              </button>
              <p className="text-gray-700 flex md:mt-4 mt-2  justify-center items-center gap-3 md:text-xl text-md">
                {" "}
                <img src={call} alt="" className="md:h-10 md:w-10 h-7 w-7 " />
                +1 (720) 266-0050
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSupport;
