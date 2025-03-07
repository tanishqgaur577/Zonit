// import React from "react";
// import serverRack from "../../../public/Products/serverRack.png";
// import Ellipse from "../../../public/Products/Ellipse.png";
// import ZAiPOWER from "../../../public/Homepage/ZAiPOWER.png";
// import zonitsolution from "../../../public/Homepage/zonitsolution.png";
// const ThirdSectionLandingPage = () => {
//   return (
//     <div className="my-10">
//       <h1 className="text-[#005487] text-3xl text-center">
//         <span className="font-semibold">Solutions</span>
//       </h1>
//       <p className="text-black text-[18px] text-center mt-2.5 mb-2.5">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
//       </p>

//       <div className="flex flex-col md:flex-row items-center justify-center lg:pl-24 gap-5 mt-7">
//         {/* Z-Lock Card */}
//         <div className="w-[320px] h-[450px] bg-gradient-to-r from-red-700 to-black text-white p-8 rounded-lg shadow-lg">
//           <div className="flex items-center gap-4 mb-6">
//             <img
//               src={ZAiPOWER} // Replace with your Z-Lock icon
//               alt="Z-Lock"
//               className="w-16 bg-white rounded-full h-16"
//             />
//           </div>
//           <h3 className="text-3xl font-semibold mb-4">ZAI Power Redundancy</h3>
//           <p className="text-gray-300 text-lg mb-6">
//             Zonit is providing power redundancy for N+1, N+2 AI GPU Servers with
//             our Z-ATS-AI and AI PowerTray for multiple Fortune 100 Customers.
//           </p>
//           <a
//             href="#"
//             className="text-yellow-400 text-[18px] font-bold inline-flex items-center hover:underline"
//           >
//             Learn More About Z-LOCK →
//           </a>
//         </div>

//         {/* Server Rack Image */}
//         <div className="w-full md:w-1/2 flex justify-center relative ml-4">
//           <div className="h-[300px] w-[300px] bg-blue-100/25 -right-44 -bottom-2.5 absolute rounded-full"></div>
//           <img src={Ellipse} className="absolute h-full -right-14 " alt="" />
//           <div className=" p-4 rounded-lg ">
//             <img
//               src={zonitsolution} // Replace with your image URL
//               alt="Server Rack"
//               className="w-[250px] h-[500px] ml-18 relative left-8"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThirdSectionLandingPage;

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import serverRack from "../../../public/Homepage/zonitsolution.png";
import Ellipse from "../../../public/Products/Ellipse.png";
import zlockcable from "../../../public/Products/zlockcable.png";
import pattern from "../../../public/Homepage/cardPatterns.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const products = [
  {
    id: 1,
    title: "ZAI Power Redundancy",
    desc: "Zonit is providing power redundancy for N+1, N+2 AI GPU Servers with our Z-ATS-AI and AI PowerTray for multiple Fortune 100 Customers.",
    img: zlockcable,
  },
  {
    id: 2,
    title: "3-Phase Power Distribution",
    desc: "Optimize data center efficiency with Zonit's 3-Phase Power Distribution solutions, ensuring balanced loads, reduced energy losses, and improved redundancy for mission-critical operations.",
    img: zlockcable,
  },
  {
    id: 3,
    title: "Power Redundancy For C",
    desc: "Zonit's Power Redundancy solutions for C enable seamless failover, preventing downtime and ensuring uninterrupted power supply for critical infrastructure.",
    img: zlockcable,
  },
];

const ThirdSectionLandingPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const sectionRef = useRef(null);
  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate the section when it enters the viewport
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 }, // ✅ Start state
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 50%", // ✅ Ensure animation happens within a visible range
          scrub: 1, // ✅ Smooth animation while scrolling
          toggleActions: "play none none none",
        },
      }
    );

    // Refresh ScrollTrigger when elements are updated
    ScrollTrigger.refresh();
  }, []);

  const handleClick = (id) => {
    const product = products.find((p) => p.id === id);
    setSelectedProduct(product);
  };

  return (
    <div ref={sectionRef} className="my-10">
      <h1 className="text-[#005487] text-3xl text-center">
        <span className="font-semibold">Solutions</span>{" "}
      </h1>{" "}
      <p className="text-black text-[18px] text-center mt-2.5 mb-2.5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.{" "}
      </p>
      <div className="flex md:flex-row items-center justify-center mt-14 lg:pr-24">
        {/* Server Rack img with Clickable Sections */}
        <div className=" md:w-1/2 flex justify-center relative">
          <div className="h-[200px] w-[300px] bg-blue-100/25 -left-32 -top-2.5 absolute rounded-full"></div>
          <img src={Ellipse} className="absolute h-full -left-5 " alt="" />
          <div className="p-4 rounded-lg relative">
            <div
              className="h-10 w-30 md:h-12 md:w-48  absolute z-10 top-32 left-5 md:top-50 md:-left-7 cursor-pointer"
              onClick={() => handleClick(1)}
            ></div>
            <div
              className="h-10 w-30 md:h-12 md:w-48  absolute z-10 top-44 left-5 md:top-64 md:-left-7 cursor-pointer"
              onClick={() => handleClick(2)}
            ></div>
            <div
              className="h-10 w-30 md:h-12 md:w-48  absolute z-10 top-54 left-5 md:top-80 md:-left-7 cursor-pointer"
              onClick={() => handleClick(3)}
            ></div>

            <img
              src={serverRack}
              alt="Server Rack"
              className="md:w-[250px] md:h-[500px] w-[220px] h-[330px] relative md:-left-18 -left-0"
            />
          </div>
        </div>

        {/* Animated Product Card */}
        <div className="relative w-[320px] h-[420px]  flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.id}
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{
                minHeight: window.innerWidth < 768 ? "360px" : "400px", // Adjust for mobile
                opacity: 1,
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              exit={{
                maxHeight: 0,
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              className="absolute w-[190px] md:w-[320px] flex flex-col justify-around bg-gradient-to-r from-red-700 to-black text-white md:p-8 p-3 rounded-lg shadow-lg overflow-hidden 
              h-[80px] md:h-[100px]"
              style={{
                backgroundImage: `url(${pattern}), linear-gradient(to right, #B91C1C, #000)`,
                backgroundBlendMode: "overlay",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center md:gap-4 gap-2 md:mb-6 mb-2">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.title}
                  className="md:w-16 md:h-16 w-10 h-10 bg-white rounded-full "
                />
              </div>
              <h3 className="md:text-3xl text-lg font-semibold">
                {selectedProduct.title}
              </h3>
              <p className="text-gray-300 md:text-lg text-[12px] md:mb-6 mb-2">
                {selectedProduct.desc}
              </p>
              <a
                href="#"
                className="text-yellow-400 md:text-[18px] text-[10px] font-bold inline-flex items-center hover:underline"
              >
                Learn More About {selectedProduct.title} →
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionLandingPage;
