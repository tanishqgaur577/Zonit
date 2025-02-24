// import React from "react";
// import asian from "../../../public/Homepage/AsianPartner.png";
// import australia from "../../../public/Homepage/AustrailianPartner.png";
// import NorthAmericanPartner1 from "../../../public/Homepage/NorthAmericanPartner1.png";
// import NorthAmericanPartner2 from "../../../public/Homepage/NorthAmericanPartner2.png";
// import zonitlogo from "../../../public/zonit-logo.png";
// const Partners = () => {
//   return (
//     <div className=" py-10 px-5  mt-8">
//       <div className="text-xl font-semibold flex justify-center gap-4 items-center text-center text-blue-900">
//         <img src={zonitlogo} alt="" className="h-7 w-36" />{" "}
//         <h1 className="text-[#005487] font-semibold text-3xl">Partners</h1>
//       </div>
//       <p className="text-center text-gray-600 mb-10 mt-3">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
//       </p>

//       <div className=" w-[100vw] md:h-[80vh] flex justify-center items-end px-8 gap-18 ">
//         <div className="w-[20%] gap-4 flex flex-col">
//           <h1 className="text-center text-[#005487] font-semibold text-3xl">
//             Asian Partners
//           </h1>
//           <img src={asian} className="h-[450px] w-full" alt="" />
//         </div>
//         <div className="flex w-[40%] flex-col gap-5 ">
//           <h1 className="text-center text-[#005487] font-semibold text-3xl">
//             North American Partners
//           </h1>
//           <div className="flex wf-full gap-5">
//             <img
//               src={NorthAmericanPartner1}
//               className="w-1/2 h-[550px]"
//               alt=""
//             />
//             <img
//               src={NorthAmericanPartner2}
//               className="w-1/2 h-[550px]"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="w-[20%] gap-4 flex flex-col ">
//           <h1 className="text-center text-[#005487] font-semibold text-3xl">
//             Australia Partners
//           </h1>
//           <img src={australia} className="w-full h-[450px]" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;

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
        <button className="my-3 border-2 border-red-600 rounded-full px-5 py-2 text-center text-red-600 font-semibold flex gap-3 hover:bg-red-600 hover:text-white cursor-pointer transition duration-800 justify-center items-center">
          Buy Products Through Our Partners <MoveRight />
        </button>
      </div>
      <div className=" py-10 px-5 flex-col bg-gradient-to-b relative from-[#015384]  to-[#00131E] flex justify-center items-center min-h-[80vh] mt-8">
        <img
          src={one}
          className="h-10 w-10 absolute hover:scale-200 transition duration-700 top-76 left-104"
          alt=""
        />
        <img
          src={two}
          className="h-10 w-10 absolute hover:scale-200 transition duration-700 top-82 left-94"
          alt=""
        />
        <img
          src={three}
          className="h-10 w-10 absolute hover:scale-200 transition duration-700 top-82 left-114"
          alt=""
        />
        <img
          src={four}
          className="h-10 w-10 absolute hover:scale-200 transition duration-700 top-92 left-94"
          alt=""
        />
        <img
          src={five}
          className="h-10 w-10 absolute hover:scale-200 transition duration-700 top-100 left-104  "
          alt=""
        />
        <img
          src={six}
          className="h-10 w-10 absolute hover:scale-200 transition duration-700 top-94 left-114"
          alt=""
        />
        <img
          src={eight}
          className="h-10 w-10 absolute  top-88 left-104 hover:scale-200 transition duration-700"
          alt=""
        />
        <img
          src={applan}
          className="h-16 w-16 absolute  top-78 left-190 hover:scale-200 transition duration-700"
          alt=""
        />
        <img
          src={dexten}
          className="h-16 w-16 absolute  top-78 left-226 hover:scale-200 transition duration-700"
          alt=""
        />
        <img
          src={ready}
          className="h-16 w-16 absolute  top-140 left-270 hover:scale-200 transition duration-700"
          alt=""
        />
        <img src={World} className="h-[70%] object-cover w-[70%]" alt="" />
      </div>
    </div>
  );
};

export default Partners;
