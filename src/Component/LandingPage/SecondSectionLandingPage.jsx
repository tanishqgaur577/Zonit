// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import serverRack from "../../../public/Products/serverRack.png";
// import Ellipse from "../../../public/Products/Ellipse.png";
// import zlockcable from "../../../public/Products/zlockcable.png";

// const products = [
//   {
//     id: 1,
//     title: "Z-Lock",
//     desc: "Zonit’s locking connectors provide a secure and dependable connection.",
//     img: zlockcable,
//   },
//   {
//     id: 2,
//     title: "Z-ATS Micro",
//     desc: "An advanced micro ATS for power redundancy in small spaces.",
//     img: zlockcable,
//   },
//   {
//     id: 3,
//     title: "Z-ATS Industries",
//     desc: "Reliable power switching solutions for industrial applications.",
//     img: zlockcable,
//   },
//   {
//     id: 4,
//     title: "Z-ATS Infrastructure",
//     desc: "Designed for critical infrastructure with intelligent power management.",
//     img: zlockcable,
//   },
//   {
//     id: 5,
//     title: "Z-ATS PDS",
//     desc: "A scalable power distribution system ensuring stability.",
//     img: zlockcable,
//   },
// ];

// const SecondSectionLandingPage = () => {
//   const [selectedProduct, setSelectedProduct] = useState(products[0]);

//   const handleClick = (id) => {
//     const product = products.find((p) => p.id === id);
//     setSelectedProduct(product);
//   };

//   return (
//     <div className="my-10">
//       <h1 className="text-[#005487] text-3xl text-center">
//         Our <span className="font-semibold">Products</span>
//       </h1>
//       <p className="text-black text-[18px] text-center mt-2.5 mb-2.5">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
//       </p>
//       <div className="flex flex-col md:flex-row items-center justify-center mt-14 lg:pr-24">
//         {/* Server Rack img with Clickable Sections */}
//         <div className="w-full md:w-1/2 flex justify-center relative">
//           <div className="h-[300px] w-[300px] bg-blue-100/25 -left-32 -top-2.5 absolute rounded-full"></div>
//           <img src={Ellipse} className="absolute h-full -left-5 " alt="" />
//           <div className="p-4 rounded-lg relative">
//             <div
//               className="h-10 w-42  absolute z-10 top-36 -left-5 cursor-pointer"
//               onClick={() => handleClick(1)}
//             ></div>
//             <div
//               className="h-10 w-42  absolute z-10 top-50 -left-5 cursor-pointer"
//               onClick={() => handleClick(2)}
//             ></div>
//             <div
//               className="h-10 w-42  absolute z-10 top-64 -left-5 cursor-pointer"
//               onClick={() => handleClick(3)}
//             ></div>
//             <div
//               className="h-10 w-42  absolute z-10 top-78 -left-5 cursor-pointer"
//               onClick={() => handleClick(4)}
//             ></div>
//             <div
//               className="h-10 w-42  absolute z-10 top-92 -left-5 cursor-pointer"
//               onClick={() => handleClick(5)}
//             ></div>

//             <img
//               src={serverRack}
//               alt="Server Rack"
//               className="w-[250px] h-[500px] relative -left-18"
//             />
//           </div>
//         </div>

//         {/* Animated Product Card */}
//         <div className="relative w-[320px] h-[450px] flex items-center justify-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedProduct.id}
//               initial={{ opacity: 0, scale: 0, rotate: 180 }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//                 rotate: 0,
//                 transition: { duration: 0.8, ease: "easeInOut" },
//               }}
//               exit={{
//                 opacity: 0,
//                 scale: 0,
//                 rotate: -180,
//                 transition: { duration: 0.5 },
//               }}
//               className="absolute w-[320px] h-[450px] bg-gradient-to-r from-red-700 to-black text-white p-8 rounded-lg shadow-lg"
//             >
//               <div className="flex items-center gap-4 mb-6">
//                 <img
//                   src={selectedProduct.img}
//                   alt={selectedProduct.title}
//                   className="w-16 bg-white rounded-full h-16"
//                 />
//               </div>
//               <h3 className="text-3xl font-semibold">
//                 {selectedProduct.title}
//               </h3>
//               <p className="text-gray-300 text-lg mb-6">
//                 {selectedProduct.desc}
//               </p>
//               <a
//                 href="#"
//                 className="text-yellow-400 text-[18px] font-bold inline-flex items-center hover:underline"
//               >
//                 Learn More About {selectedProduct.title} →
//               </a>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondSectionLandingPage;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import serverRack from "../../../public/Products/serverRack.png";
import Ellipse from "../../../public/Products/Ellipse.png";
import zlockcable from "../../../public/Products/zlockcable.png";
import pattern from "../../../public/Homepage/cardPatterns.png";
const products = [
  {
    id: 1,
    title: "Z-Lock",
    desc: "Zonit’s locking connectors provide a secure and dependable connection Zonit’s locking connectors provide a secure and dependable connection.",
    img: zlockcable,
  },
  {
    id: 2,
    title: "Z-ATS Micro",
    desc: "An advanced micro ATS for power redundancy in small spaces. An advanced micro ATS for power redundancy in small spaces.",
    img: zlockcable,
  },
  {
    id: 3,
    title: "Z-ATS Industries",
    desc: "Reliable power switching solutions for industrial applications. Reliable power switching solutions for industrial applications.",
    img: zlockcable,
  },
  {
    id: 4,
    title: "Z-ATS Infrastructure",
    desc: " Designed for critical infrastructure with intelligent power management. Designed for critical infrastructure with intelligent power management.",
    img: zlockcable,
  },
  {
    id: 5,
    title: "Z-ATS PDS",
    desc: "A scalable power distribution system ensuring stability. A scalable power distribution system ensuring stability.",
    img: zlockcable,
  },
];

const SecondSectionLandingPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleClick = (id) => {
    const product = products.find((p) => p.id === id);
    setSelectedProduct(product);
  };

  return (
    <div className="my-10">
      <h1 className="text-[#005487] text-3xl text-center">
        Our <span className="font-semibold">Products</span>
      </h1>
      <p className="text-black text-[18px] text-center mt-2.5 mb-2.5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center mt-14 lg:pr-24">
        {/* Server Rack img with Clickable Sections */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="h-[300px] w-[300px] bg-blue-100/25 -left-32 -top-2.5 absolute rounded-full"></div>
          <img src={Ellipse} className="absolute h-full -left-5 " alt="" />
          <div className="p-4 rounded-lg relative">
            <div
              className="h-10 w-42  absolute z-10 top-36 -left-5 cursor-pointer"
              onClick={() => handleClick(1)}
            ></div>
            <div
              className="h-10 w-42  absolute z-10 top-50 -left-5 cursor-pointer"
              onClick={() => handleClick(2)}
            ></div>
            <div
              className="h-10 w-42  absolute z-10 top-64 -left-5 cursor-pointer"
              onClick={() => handleClick(3)}
            ></div>
            <div
              className="h-10 w-42  absolute z-10 top-78 -left-5 cursor-pointer"
              onClick={() => handleClick(4)}
            ></div>
            <div
              className="h-10 w-42  absolute z-10 top-92 -left-5 cursor-pointer"
              onClick={() => handleClick(5)}
            ></div>

            <img
              src={serverRack}
              alt="Server Rack"
              className="w-[250px] h-[500px] relative -left-18"
            />
          </div>
        </div>

        {/* Animated Product Card */}
        <div className="relative w-[320px] h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.id}
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{
                minHeight: "440px", // Set a max height for the animation
                opacity: 1,
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              exit={{
                maxHeight: 0,
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              className="absolute w-[320px] flex flex-col justify-around bg-gradient-to-r from-red-700 to-black text-white p-8 rounded-lg shadow-lg overflow-hidden"
              style={{
                backgroundImage: `url(${pattern}), linear-gradient(to right, #B91C1C, #000)`,
                backgroundBlendMode: "overlay",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.title}
                  className="w-16 bg-white rounded-full h-16"
                />
              </div>
              <h3 className="text-3xl font-semibold">
                {selectedProduct.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {selectedProduct.desc}
              </p>
              <a
                href="#"
                className="text-yellow-400 text-[18px] font-bold inline-flex items-center hover:underline"
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

export default SecondSectionLandingPage;

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     title: "Z-Lock",
//     desc: "Zonit's locking connectors provide a secure and dependable connection.",
//     img: "/Products/zlockcable.png",
//   },
//   {
//     id: 2,
//     title: "Z-ATS Micro",
//     desc: "An advanced micro ATS for power redundancy in small spaces.",
//     img: "/Products/zlockcable.png",
//   },
//   {
//     id: 3,
//     title: "Z-ATS Industries",
//     desc: "Reliable power switching solutions for industrial applications.",
//     img: "/Products/zlockcable.png",
//   },
//   {
//     id: 4,
//     title: "Z-ATS Infrastructure",
//     desc: "Designed for critical infrastructure with intelligent power management.",
//     img: "/Products/zlockcable.png",
//   },
//   {
//     id: 5,
//     title: "Z-ATS PDS",
//     desc: "A scalable power distribution system ensuring stability.",
//     img: "/Products/zlockcable.png",
//   },
// ];

// const SecondSectionLandingPage = () => {
//   const [selectedProduct, setSelectedProduct] = useState(products[0]);
//   const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

//   const handleClick = (id) => {
//     const product = products.find((p) => p.id === id);
//     if (product) {
//       // Calculate rotation based on product position
//       const index = products.indexOf(product);
//       const rotationY = (index - products.indexOf(selectedProduct)) * 360;

//       setRotation({
//         x: -15, // Slight tilt for better 3D effect
//         y: rotationY,
//         z: 0,
//       });

//       // Update the selected product after rotation
//       setTimeout(() => {
//         setSelectedProduct(product);
//         // Reset rotation after product update
//         setRotation({ x: 0, y: 0, z: 0 });
//       }, 600);
//     }
//   };

//   return (
//     <div className="my-10 overflow-hidden">
//       <h1 className="text-[#005487] text-3xl text-center">
//         Our <span className="font-semibold">Products</span>
//       </h1>
//       <p className="text-black text-[18px] text-center mt-2.5 mb-2.5">
//         Explore our innovative power management solutions
//       </p>

//       <div className="flex flex-col md:flex-row items-center justify-center mt-14 lg:pr-24">
//         {/* Server Rack img with Interactive Sections */}
//         <div className="w-full md:w-1/2 flex justify-center relative">
//           <div className="h-[300px] w-[300px] bg-blue-100/25 -left-32 -top-2.5 absolute rounded-full blur-3xl" />
//           <div className="p-4 rounded-lg relative">
//             {products.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 className={`h-14 w-54 absolute z-10 -left-10 cursor-pointer
//                    rounded-lg
//                   flex items-center justify-center overflow-hidden group
//                   ${
//                     index === 0
//                       ? "top-36"
//                       : index === 1
//                       ? "top-52"
//                       : index === 2
//                       ? "top-68"
//                       : index === 3
//                       ? "top-82"
//                       : "top-96"
//                   }`}
//                 onClick={() => handleClick(product.id)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <span className="text-white font-medium relative z-10">
//                   {/* {product.title} */}
//                 </span>
//               </motion.div>
//             ))}

//             <img
//               src="/Products/serverRack.png"
//               alt="Server Rack"
//               width={250}
//               height={500}
//               className="relative -left-18"
//             />
//           </div>
//         </div>

//         {/* 3D Box Card */}
//         <div className="relative w-[320px] h-[480px] perspective-[2000px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedProduct.id}
//               className="absolute w-full h-full"
//               initial={{
//                 rotateX: -90,
//                 rotateY: 180,
//                 scale: 0.5,
//                 opacity: 0,
//               }}
//               animate={{
//                 rotateX: rotation.x,
//                 rotateY: rotation.y,
//                 rotateZ: rotation.z,
//                 scale: 1,
//                 opacity: 1,
//               }}
//               exit={{
//                 rotateX: 90,
//                 rotateY: -180,
//                 scale: 0.5,
//                 opacity: 0,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 20,
//               }}
//               style={{
//                 transformStyle: "preserve-3d",
//               }}
//             >
//               {/* Front face */}
//               <div
//                 className="w-full h-full rounded-xl p-8 absolute
//     bg-gradient-to-r from-[#c71a1a]  to-black
//     border border-white/10 transform-style-preserve-3d"
//                 style={{
//                   backgroundImage: `url(/Homepage/cardPatterns.png), linear-gradient(to right, #c71a1a, #881337, #000)`,
//                   backgroundBlendMode: "overlay",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   transform: "translateZ(20px)",
//                 }}
//               >
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="flex items-center gap-4 mb-6"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md p-2">
//                     <img
//                       src={selectedProduct.img || "/placeholder.svg"}
//                       alt={selectedProduct.title}
//                       width={64}
//                       height={64}
//                       className="w-full h-full object-cover rounded-full"
//                     />
//                   </div>
//                 </motion.div>

//                 <motion.h3
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="text-4xl font-bold text-white mb-4"
//                 >
//                   {selectedProduct.title}
//                 </motion.h3>

//                 <motion.p
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="text-gray-200 text-lg mb-8"
//                 >
//                   {selectedProduct.desc}
//                 </motion.p>

//                 <motion.a
//                   href="#"
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   className="inline-flex items-center gap-2 text-amber-400 text-lg font-semibold
//                     hover:text-amber-300 transition-colors group"
//                 >
//                   <span>Learn More</span>
//                   <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//                 </motion.a>
//               </div>

//               {/* Right side */}
//               {/* <div
//                 className="absolute top-0 right-0 w-[20px] h-full bg-red-950/80
//                   origin-left transform-style-preserve-3d"
//                 style={{
//                   transform: "rotateY(90deg) translateZ(190px)",
//                 }}
//               /> */}

//               {/* Left side */}
//               {/* <div
//                 className="absolute top-0 left-0 w-[20px] h-full bg-red-950/80
//                   origin-right transform-style-preserve-3d"
//                 style={{
//                   transform: "rotateY(-90deg) translateZ(190px)",
//                 }}
//               /> */}

//               {/* Top side */}
//               <div
//                 className="absolute top-0 left-0 w-full h-[20px] bg-red-900/80
//                   origin-bottom transform-style-preserve-3d"
//                 style={{
//                   transform: "rotateX(-90deg) translateZ(240px)",
//                 }}
//               />

//               {/* Bottom side */}
//               <div
//                 className="absolute bottom-0 left-0 w-full h-[20px] bg-red-900/80
//                   origin-top transform-style-preserve-3d"
//                 style={{
//                   transform: "rotateX(90deg) translateZ(240px)",
//                 }}
//               />

//               {/* Back face */}
//               <div
//                 className="absolute w-full h-full rounded-2xl bg-red-950/90
//                   transform-style-preserve-3d"
//                 style={{
//                   transform: "translateZ(-20px) rotateY(180deg)",
//                 }}
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondSectionLandingPage;

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// // Products array remains the same
// const products = [
//   {
//     id: 1,
//     title: "Z-Lock",
//     desc: "Zonit's locking connectors provide a secure and dependable connection.",
//     img: "/Products/zlockcable.png",
//   },
//   {
//     id: 2,
//     title: "Z-ATS Micro",
//     desc: "An advanced micro ATS for power redundancy in small spaces.",
//     img: "/Products/zlockcable.png",
//   },
//   {
//     id: 3,
//     title: "Z-ATS Industries",
//     desc: "Reliable power switching solutions for industrial applications.",
//     img: "/Products/zlockcable.png",
//   },
//   {
//     id: 4,
//     title: "Z-ATS Infrastructure",
//     desc: "Designed for critical infrastructure with intelligent power management.",
//     img: "/Products/zlockcable.png",
//   },
//   {
//     id: 5,
//     title: "Z-ATS PDS",
//     desc: "A scalable power distribution system ensuring stability.",
//     img: "/Products/zlockcable.png",
//   },
// ];

// const SecondSectionLandingPage = () => {
//   const [selectedProduct, setSelectedProduct] = useState(products[0]);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleClick = (id) => {
//     if (isAnimating) return; // Prevent clicking during animation

//     const product = products.find((p) => p.id === id);
//     if (product && product.id !== selectedProduct.id) {
//       setIsAnimating(true);
//       setSelectedProduct(product);
//       // Reset animating state after animation completes
//       setTimeout(() => setIsAnimating(false), 1500);
//     }
//   };

//   return (
//     <div className="my-10 overflow-hidden">
//       <h1 className="text-[#005487] text-3xl text-center">
//         Our <span className="font-semibold">Products</span>
//       </h1>
//       <p className="text-black text-[18px] text-center mt-2.5 mb-2.5">
//         Explore our innovative power management solutions
//       </p>

//       <div className="flex flex-col md:flex-row items-center justify-center mt-14 lg:pr-24">
//         {/* Server Rack Section */}
//         <div className="w-full md:w-1/2 flex justify-center relative">
//           <div className="h-[300px] w-[300px] bg-blue-100/25 -left-32 -top-2.5 absolute rounded-full blur-3xl" />
//           <div className="p-4 rounded-lg relative">
//             {products.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 className={`h-14 w-54 absolute z-10 -left-10 cursor-pointer
//                    rounded-lg
//                   flex items-center justify-center overflow-hidden group
//                   ${
//                     index === 0
//                       ? "top-36"
//                       : index === 1
//                       ? "top-52"
//                       : index === 2
//                       ? "top-68"
//                       : index === 3
//                       ? "top-82"
//                       : "top-96"
//                   }`}
//                 onClick={() => handleClick(product.id)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{
//                   x: 0,
//                   opacity: 1,
//                   scale: selectedProduct.id === product.id ? 1.05 : 1,
//                   backgroundColor:
//                     selectedProduct.id === product.id
//                       ? "rgba(255, 255, 255, 0.2)"
//                       : "rgba(255, 255, 255, 0.1)",
//                 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <span className="text-white font-medium relative z-10">
//                   {/* {product.title} */}
//                 </span>
//               </motion.div>
//             ))}

//             <img
//               src="/Products/serverRack.png"
//               alt="Server Rack"
//               width={250}
//               height={500}
//               className="relative -left-18"
//             />
//           </div>
//         </div>

//         {/* 3D Card Section */}
//         <div className="relative w-[380px] h-[480px] perspective-[2000px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedProduct.id}
//               className="absolute w-full h-full"
//               initial={{
//                 rotateY: -90,
//                 z: -500,
//                 opacity: 0,
//               }}
//               animate={{
//                 rotateY: 0,
//                 z: 0,
//                 opacity: 1,
//               }}
//               exit={{
//                 rotateY: 90,
//                 z: -500,
//                 opacity: 0,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 50,
//                 damping: 15,
//                 mass: 1,
//               }}
//               style={{
//                 transformStyle: "preserve-3d",
//               }}
//             >
//               {/* Card Content */}
//               <motion.div
//                 className="w-[320px] min-h-[460px] rounded-xl p-8 relative
//                   bg-gradient-to-r from-red-700 to-black
//                   shadow-[0_0_15px_rgba(0,0,0,0.2)] backdrop-blur-sm
//                   border border-white/10 overflow-hidden"
//                 style={{
//                   backgroundImage: `url(/Homepage/cardPatterns.png), linear-gradient(to bottom right, #B91C1C, #881337, #000)`,
//                   backgroundBlendMode: "overlay",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0 }}
//               >
//                 {/* Animated particles */}
//                 {/* <div className="absolute inset-0 overflow-hidden">
//                   {[...Array(5)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       className="absolute w-1 h-1 bg-white/30 rounded-full"
//                       animate={{
//                         y: [-20, 500],
//                         x: [-20 + i * 100, 20 + i * 100],
//                         opacity: [0, 1, 0],
//                       }}
//                       transition={{
//                         duration: 2 + i,
//                         repeat: Number.POSITIVE_INFINITY,
//                         repeatType: "loop",
//                         ease: "linear",
//                         delay: i * 0.2,
//                       }}
//                     />
//                   ))}
//                 </div> */}

//                 {/* Product Image */}
//                 <motion.div
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.3, type: "spring" }}
//                   className="flex items-center gap-4 mb-6"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-white p-2 relative overflow-hidden">
//                     <img
//                       src={selectedProduct.img || "/placeholder.svg"}
//                       alt={selectedProduct.title}
//                       width={64}
//                       height={64}
//                       className="w-full h-full object-cover rounded-full  relative z-10"
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Product Title */}
//                 <motion.h3
//                   initial={{ x: -40, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.4, type: "spring" }}
//                   className="text-4xl font-bold text-white mb-4"
//                 >
//                   {selectedProduct.title}
//                 </motion.h3>

//                 {/* Product Description */}
//                 <motion.p
//                   initial={{ x: -40, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.5, type: "spring" }}
//                   className="text-white text-lg mb-8"
//                 >
//                   {selectedProduct.desc}
//                 </motion.p>

//                 {/* Learn More Link */}
//                 <motion.a
//                   href="#"
//                   initial={{ y: 40, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.6, type: "spring" }}
//                   className="inline-flex items-center gap-2 text-amber-400 text-lg font-semibold
//                     hover:text-amber-300 transition-colors group relative"
//                 >
//                   <span>Learn More</span>
//                   <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//                   <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400/50 scale-x-0 group-hover:scale-x-100 transition-transform" />
//                 </motion.a>

//                 {/* 3D effect layers */}
//                 {/* <div className="absolute inset-0 bg-gradient-to-tr from-black/0 to-white/10 pointer-events-none" /> */}
//                 {/* <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/50 pointer-events-none" /> */}
//               </motion.div>

//               {/* Card Shadow */}
//               <motion.div
//                 className="absolute -bottom-10 left-0 right-0 h-20 bg-black/20 blur-xl rounded-full mx-10"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 0.3, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondSectionLandingPage;
