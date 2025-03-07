import React from "react";
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

const RecentPressRelease = () => {
  return (
    <div>
      {/* Contact Section */}
      <div className="md:p-6 md:bg-white bg-gray-200  px-2 mb-5 mt-10 md:h-[70vh] h-full flex justify-center min-w-[100vw]">
        <div className="bg-gray-200 w-full py-5 h-max md:px-5 flex flex-col">
          <h2 className="text-4xl text-[#0A5587] my-4">Recent Press Release</h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
            <div className="flex flex-col rounded-tr-4xl h-[270px] md:w-[400px] w-[370px] justify-start items-start bg-white p-4 shadow-lg">
              <button className="text-gray-800 rounded-tr-2xl rounded-bl-2xl text-start mt-2 font-semibold py-2 px-4 rounded-md mb-2">
                New Partnership Announced
              </button>
              <p className="text-gray-700 flex mt-1 justify-center items-center gap-3 text-md">
                BOULDER, CO, June 12, 2023 -- Zonit, a leading innovator and
                provider of power distribution and management in the data center
                and critical control panels, is happy to announce the...
              </p>
              <Link className="flex text-red-500 py-3 justify-center items-center gap-2 underline underline-offset-2">
                Read It <MoveUpRight className="h-4 w-6" />
              </Link>
            </div>

            <div className="flex flex-col rounded-tr-4xl h-[270px] md:w-[400px] w-[370px] justify-start items-start bg-white p-4 shadow-lg">
              <button className="text-gray-800 rounded-tr-2xl rounded-bl-2xl text-start mt-2 font-semibold py-2 px-4 rounded-md mb-2">
                Jay Bradley Joins Zonit as New VP of Sales and Marketing
              </button>
              <p className="text-gray-700 flex mt-1 justify-center items-center gap-3 text-md">
                BOULDER, CO, June 12, 2023 -- Zonit, a leading innovator and
                provider of power distribution and management in the data center
                and critical control panels, is happy to announce the...
              </p>
              <Link className="flex text-red-500 py-3 justify-center items-center gap-2 underline underline-offset-2">
                Read It <MoveUpRight className="h-4 w-6" />
              </Link>
            </div>

            <div className="flex flex-col rounded-tr-4xl h-[270px] md:w-[400px] w-[370px] justify-start items-start bg-white p-4 shadow-lg">
              <button className="text-gray-800 rounded-tr-2xl rounded-bl-2xl text-start mt-2 font-semibold py-2 px-4 rounded-md mb-2">
                Zonit Unveils Improved Market Leading Universal Dual-Locking
                Power Cords
              </button>
              <p className="text-gray-700 flex mt-1 justify-center items-center gap-3 text-md">
                Boulder, CO - May 9, 2023 - Zonit Structured Solutions LLC, a
                Boulder-based manufacturer of at-the-rack data center
                infrastructure solutions and power-path reliability products,
                has announced the release of its...
              </p>
              <Link className="flex text-red-500 py-3 justify-center items-center gap-2 underline underline-offset-2">
                Read It <MoveUpRight className="h-4 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPressRelease;
