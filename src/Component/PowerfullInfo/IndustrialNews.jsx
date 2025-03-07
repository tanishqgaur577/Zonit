import React from "react";
import Mail from "../../../public/Support/mailSupport.png";
import call from "../../../public/Support/callSupport.png";

const IndustrialNews = () => {
  return (
    <div>
      {/* Contact Section */}
      <div className=" p-6 mt-10 md:h-[70vh] h-[100vh] flex justify-center  min-w-[100vw]">
        <div className=" bg-gray-100 w-full py-8 h-max px-8 flex flex-col ">
          <h2 className="text-3xl font-semibold  text-blue-900">
            Industrial News
          </h2>
          <p className="mt-4  text-xl">
            Stay updated with our curated news, where we deliver the latest
            insights on data center power trends. From emerging technologies to
            global initiatives, our curated news section offers a comprehensive
            view of the evolving landscape, empowering you to make informed
            decisions in the dynamic realm of data center power.
          </p>

          <div className="flex flex-col md:flex-row gap-6  md:h-[100px] justify-center mt-6">
            <div className="flex flex-col rounded-tr-4xl justify-start  md:h-[200px] md:w-[320px] h-[150px] w-[220px] md:p-9 p-2 items-center bg-white  shadow-lg">
              <p className="text-xl ">
                <span className="text-blue-400 cursor-pointer underline underline-thickness-thin underline-offset-2">
                  Power problems are the main cause of data center downtime
                </span>
                : Networking, April 12, 2023
              </p>
            </div>

            <div className="flex flex-col rounded-tr-4xl md:h-[200px] md:w-[320px] h-[150px] w-[220px] md:p-9 p-2 justify-start items-center bg-white  shadow-lg">
              <p className="text-xl">
                <span className="text-blue-400 cursor-pointer underline underline-thickness-thin underline-offset-2">
                  Cloud outages are on the rise. Here’s why{" "}
                </span>
                : Fortune, June 7,2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialNews;
