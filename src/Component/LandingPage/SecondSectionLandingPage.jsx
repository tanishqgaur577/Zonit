import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import serverRack from "../../../public/Products/serverRack.png";
import Ellipse from "../../../public/Products/Ellipse.png";
import zlockcable from "../../../public/Products/zlockcable.png";
import pattern from "../../../public/Homepage/cardPatterns.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
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
  const sectionRef = useRef(null);
  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate the section when it enters the viewport
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100, z: -1 }, // ✅ Start state
      {
        opacity: 1,
        y: 0,
        z: 1,
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
        Our <span className="font-semibold">Products</span>
      </h1>
      <p className="text-black text-[18px] text-center mt-2.5 mb-2.5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
      <div className="flex  md:flex-row items-center justify-center mt-14 lg:pr-24">
        {/* Server Rack img with Clickable Sections */}
        <div className=" md:w-1/2 flex justify-center  relative">
          <div className="h-[200px] w-[300px] bg-blue-100/25 -left-32 -top-2.5 absolute rounded-full"></div>
          <img src={Ellipse} className="absolute h-full -left-5 " alt="" />
          <div className="p-4 rounded-lg relative">
            <div
              className="h-8 w-34 md:h-10 md:w-42  absolute z-10  md:top-36 md:-left-5 top-24 -left-20  cursor-pointer"
              onClick={() => handleClick(1)}
            ></div>
            <div
              className="h-8 w-34 md:h-10 md:w-42  absolute z-10  md:top-50 md:-left-5 -left-20 top-34 cursor-pointer"
              onClick={() => handleClick(2)}
            ></div>
            <div
              className="h-8 w-34 md:h-10 md:w-42  absolute z-10  md:top-64 md:-left-5 -left-20 top-44 cursor-pointer"
              onClick={() => handleClick(3)}
            ></div>
            <div
              className="h-8 w-34 md:h-10 md:w-42  absolute z-10  md:top-78 md:-left-5 -left-20 top-54 cursor-pointer"
              onClick={() => handleClick(4)}
            ></div>
            <div
              className="h-8 w-34 md:h-10 md:w-42  absolute z-10  md:top-92 md:-left-5 -left-20 top-62 cursor-pointer"
              onClick={() => handleClick(5)}
            ></div>

            <img
              src={serverRack}
              alt="Server Rack"
              className="md:w-[250px] md:h-[500px] w-[150px] h-[330px] -left-26 relative md:-left-20"
            />
          </div>
        </div>

        {/* Animated Product Card */}
        <div className="relative md:w-[320px] md:h-[450px] flex items-center  justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.id}
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{
                minHeight: window.innerWidth < 768 ? "300px" : "440px", // Adjust for mobile
                opacity: 1,
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              exit={{
                maxHeight: 0,
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              className="absolute w-[180px] md:w-[320px] flex flex-col justify-around bg-gradient-to-r from-red-700 to-black text-white md:p-8 p-3 rounded-lg shadow-lg overflow-hidden 
  h-[80px] md:h-[100px]" // Smaller height for mobile
              style={{
                backgroundImage: `url(${pattern}), linear-gradient(to right, #B91C1C, #000)`,
                backgroundBlendMode: "overlay",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center gap-4 md:mb-6 mb-2">
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

export default SecondSectionLandingPage;
