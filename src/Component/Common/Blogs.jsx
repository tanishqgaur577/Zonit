import { motion } from "framer-motion";
import press from "../../../public/press.png";
import React, { useState, useRef, useEffect } from "react";
import blogImage from "../../../public/blogImage.png";
import speaker from "../../../public/speaker.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

export default function LatestInsights() {
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
          stagger: 0.5,
        },
      }
    );

    // Refresh ScrollTrigger when elements are updated
    ScrollTrigger.refresh();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl  text-[#005487]">
        Latest <span className="text-[#005487] font-semibold">Insights</span>
      </h2>
      <p className="text-gray-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
        {/* First Card with Image */}
        <motion.div
          ref={sectionRef}
          whileHover={{
            scale: 1.01,
            y: -8,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
          }}
          transition={{ duration: 0.3 }}
          className=" text-white p-6 rounded-lg flex justify-around items-start px-5 flex-col shadow-lg w-[320px]"
        >
          {" "}
          <img
            src={blogImage}
            width={400}
            height={300}
            alt="Server Room"
            className="w-full h-auto"
          />
          <div className="p-4 text-left">
            <h3 className="font-semibold text-gray-900">
              Lorem Ipsum is a dummy text
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Lorem ipsum is a dummy text lorem ipsum is a dummy text.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Feb 18, 2025 — ⏳ 2 minute read
            </p>
          </div>
        </motion.div>

        {/* Second Card */}

        <motion.div
          ref={sectionRef}
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
          }}
          className="bg-[#063755] text-white p-6 rounded-lg flex justify-around items-start px-5 flex-col shadow-lg w-[320px]"
        >
          {" "}
          <img src={speaker} alt="" className="h-18 w-18" />
          <p className=" gap-4 flex items-center justify-center text-xl font-semibold">
            ZAnnouncement From{" "}
          </p>
          <img src="/public/zonit-white-logo.png" className="h-4 w-20" alt="" />
          <p className="text-md mt-2 text-left text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque.{" "}
          </p>
        </motion.div>

        {/* Third Card */}
        <motion.div
          ref={sectionRef}
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
          }}
          className="bg-[#063755] text-white p-6 rounded-lg flex justify-around items-start px-5 flex-col shadow-lg w-[320px]"
        >
          {" "}
          <img src={press} alt="" className="h-18 w-18" />
          <p className=" text-xl text-left font-semibold">
            Zonit Unveils Improved Market Leading Universal Dual-Locking Power
            Cords{" "}
          </p>
          <p className="text-md mt-2 text-left text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque.{" "}
          </p>
        </motion.div>
      </div>

      <button className="mt-8 px-6 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition">
        <Link to="/insight">View more →</Link>
      </button>
    </section>
  );
}
