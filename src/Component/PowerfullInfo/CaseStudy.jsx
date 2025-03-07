import React from "react";
import docs from "../../../public/Support/docs.png";
import { MoveUpRight } from "lucide-react";
const CaseStudy = () => {
  return (
    <div className="relative min-h-[70vh] text-black flex justify-around py-7 flex-col  items-center w-full bg-white">
      <h1 className="md:text-3xl text-2xl font-semibold">Case Study & Document Library</h1>
      <div className="h-[48vh] py-6 md:px-24  md:block flex flex-col justify-center items-center relative md:w-[50%] w-[90%] shadow-2xl">
        <div className="absolute h-18 rounded-tr-3xl md:-top-10 -top-10 -right-9 z-10 rounded-bl-3xl w-18 bg-red-700"></div>
        <div className="absolute h-18 rounded-tr-3xl md:-top-8 -top-6 -right-5 z-7 rounded-bl-3xl w-18 bg-indigo-900"></div>
        <h1 className="bg-red-700 rounded-bl-3xl rounded-tr-3xl w-max px-4 py-3 text-2xl text-white font-semibold">
          ZLock Docs
        </h1>
        <div className=" gap-2 flex flex-col mt-4">
          <div className="flex justify-start gap-5 items-center">
            <img src={docs} className="md:h-14 md:w-14 h-10 w-10" alt="" />
            <h1 className="text-lg">A-LOCK User Guide</h1>
          </div>
          <div className="flex justify-start gap-5 items-center">
            <img src={docs} className="md:h-14 md:w-14 h-10 w-10" alt="" />
            <h1 className="text-lg">A-LOCK User Guide</h1>
          </div>
          <div className="flex justify-start gap-5 items-center">
            <img src={docs} className="md:h-14 md:w-14 h-10 w-10" alt="" />
            <h1 className="text-lg">A-LOCK User Guide</h1>
          </div>
          <div className="flex justify-start gap-5 items-center">
            <img src={docs} className="md:h-14 md:w-14 h-10 w-10" alt="" />
            <h1 className="text-lg">A-LOCK User Guide</h1>
          </div>
        </div>
        <button className="flex justify-center text-red-600 text-xl bottom-5  absolute right-5 items-center gap-3">
          Explore More <MoveUpRight className="h-5 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CaseStudy;
