import React from "react";
import docs from "../../../public/Support/docs.png";
import { MoveUpRight } from "lucide-react";
const Guides = () => {
  return (
    <div className="relative min-h-[80vh] text-black flex justify-around md:py-7  flex-col  items-center w-full bg-white">
      <h1 className="text-3xl font-semibold">User Guides</h1>
      <div className="h-[48vh] py-6 md:px-24 px-5 relative md:w-[50%] w-[90%] shadow-2xl">
        <div className="absolute h-18 rounded-tr-3xl -bottom-8 -left-5 rounded-bl-3xl w-18 bg-red-700"></div>
        <div className="absolute h-18 rounded-tr-3xl -top-8 -right-5 rounded-bl-3xl w-18 bg-indigo-800"></div>
        <h1 className="bg-red-700 rounded-bl-3xl rounded-tr-3xl w-max px-4 py-3 text-2xl text-white font-semibold">
          ZLock Docs
        </h1>
        <div className=" gap-2 flex flex-col mt-4">
          <div className="flex justify-start gap-5 items-center">
            <img src={docs} className="h-14 w-14" alt="" />
            <h1 className="text-lg">A-LOCK User Guide</h1>
          </div>
          <div className="flex justify-start gap-5 items-center">
            <img src={docs} className="h-14 w-14" alt="" />
            <h1 className="text-lg">A-LOCK User Guide</h1>
          </div>
          <div className="flex justify-start gap-5 items-center">
            <img src={docs} className="h-14 w-14" alt="" />
            <h1 className="text-lg">A-LOCK User Guide</h1>
          </div>
          <div className="flex justify-start gap-5 items-center">
            <img src={docs} className="h-14 w-14" alt="" />
            <h1 className="text-lg">A-LOCK User Guide</h1>
          </div>
        </div>
        <button className="flex justify-center text-red-600 text-xl bottom-2  absolute right-5 items-center gap-3">
          Explore More <MoveUpRight className="h-5 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Guides;
