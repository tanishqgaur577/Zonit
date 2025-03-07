import React from "react";
import one from "../../../public/Homepage/1.png";
import two from "../../../public/Homepage/2.png";
import three from "../../../public/Homepage/3.png";
import four from "../../../public/Homepage/4.png";
import five from "../../../public/Homepage/5.png";
import six from "../../../public/Homepage/6.png";
import eight from "../../../public/Homepage/8.png";
import World from "../../../public/Homepage/World.png";
import dexten from "../../../public/Homepage/daxten.png";
import ready from "../../../public/Homepage/ready.png";
import applan from "../../../public/Homepage/applan.png";
import { MoveRight } from "lucide-react";

const Partners = () => {
  return (
    <div className=" mt-24 ">
      <h1 className="text-[#005487] text-4xl text-center">
        Our <span className="font-semibold">Partners</span>
      </h1>
      <p className="text-center text-black my-3.5 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
      <div className="flex justify-center items-center">
        <button className="my-3 border-2 border-red-600 rounded-full md:px-5 px-2 text-sm md:text-lg py-2 text-center text-red-600 font-semibold flex gap-3 hover:bg-red-600 hover:text-white cursor-pointer transition duration-800 justify-center items-center">
          Buy Products Through Our Partners <MoveRight className="text-sm" />
        </button>
      </div>
      <div className=" py-10 px-5 flex-col bg-gradient-to-b relative from-[#015384]  to-[#00131E] flex justify-center items-center w-screen lg:min-h-[80vh] mt-8">
        <img
          src={one}
          className="lg:h-10 lg:w-10 h-6 w-6 absolute hover:scale-200 transition duration-700 top-28 left-22 lg:top-76 lg:left-104"
          alt=""
        />
        <img
          src={two}
          className="lg:h-10 lg:w-10 h-6 w-6 absolute hover:scale-200 transition duration-700 top-32 left-16 lg:top-82 lg:left-94"
          alt=""
        />
        <img
          src={three}
          className="lg:h-10 lg:w-10 h-6 w-6 absolute hover:scale-200 transition duration-700 top-38 left-16 lg:top-82 lg:left-114"
          alt=""
        />
        <img
          src={four}
          className="lg:h-10 lg:w-10 h-6 w-6 absolute hover:scale-200 transition duration-700 top-40 left-22 lg:top-92 lg:left-94"
          alt=""
        />
        <img
          src={five}
          className="lg:h-10 lg:w-10 h-6 w-6 absolute hover:scale-200 transition duration-700 top-38 left-28 lg:top-100 lg:left-104  "
          alt=""
        />
        <img
          src={six}
          className="lg:h-10 lg:w-10 h-6 w-6 absolute hover:scale-200 transition duration-700 top-32 left-28 lg:top-94 lg:left-114"
          alt=""
        />
        <img
          src={eight}
          className="lg:h-10 lg:w-10 h-6 w-6 absolute  lg:top-88 lg:left-104 hover:scale-200 transition duration-700 top-34 left-22"
          alt=""
        />
        <img
          src={applan}
          className="lg:h-16 lg:w-16 h-10 w-10 absolute  lg:top-78 lg:left-190 hover:scale-200 transition duration-700 top-34 left-46"
          alt=""
        />
        <img
          src={dexten}
          className="lg:h-16 lg:w-16 h-10 w-10 absolute  lg:top-78 lg:left-226 hover:scale-200 transition duration-700 top-34 left-62"
          alt=""
        />
        <img
          src={ready}
          className="lg:h-16 lg:w-16 h-10 w-10 absolute  lg:top-140 lg:left-270 hover:scale-200 transition duration-700 top-52 left-72"
          alt=""
        />
        <img
          src={World}
          className="lg:h-[70%] h-[100%]  w-[100%] object-cover  lg:left-270 lg:w-[70%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Partners;
