import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import one from "../../../../public/Products/zlock/1.png";
import two from "../../../../public/Products/zlock/2.png";
import three from "../../../../public/Products/zlock/3.png";
import four from "../../../../public/Products/zlock/4.png";

gsap.registerPlugin(ScrollTrigger);

const ZlockFeature = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    if (!sectionsRef.current.length) {
      console.warn("GSAP: No sections found!");
      return;
    }

    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      gsap.fromTo(
        section,
        { opacity: 0, y: 50, visibility: "hidden" }, // Initial state
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1, // Slight stagger
        }
      );
    });

    console.log("GSAP Initialized with sections:", sectionsRef.current);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First Row */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="order-1 lg:order-none bg-[#303E48] text-white p-6 flex justify-center items-center flex-col relative text-center"
        >
          <h4 className="text-xl font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Hassle-free Locking Technology
          </h4>
          <p className="text-gray-300 px-4 sm:px-9">
            zLock provides a seamless experience with advanced locking
            technology that requires no clips or extra hardware. It's a
            straightforward, simple, and effective solution to keep your power
            cords securely connected.
          </p>
        </div>
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="order-2 lg:order-none relative h-[300px] w-full flex justify-center"
        >
          <img
            src={one}
            alt="Hassle-free Locking Technology"
            className="h-full w-full"
          />
        </div>

        {/* Second Row */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="order-4 lg:order-none relative h-[300px] w-full flex justify-center"
        >
          <img
            src={two}
            alt="Universal Compatibility"
            className="h-full w-full"
          />
        </div>
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="order-3 lg:order-none bg-[#0A5587] text-white p-6 flex justify-center items-center flex-col relative text-center"
        >
          <h4 className="text-xl font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Universal Compatibility
          </h4>
          <p className="px-4 sm:px-9">
            Say goodbye to compatibility concerns. zLock features
            non-proprietary connectors to ensure universal compatibility,
            integrating seamlessly with any brand of Power Distribution Unit
            (PDU) or IT hardware.
          </p>
        </div>

        {/* Third Row */}
        <div
          ref={(el) => (sectionsRef.current[4] = el)}
          className="order-5 lg:order-none bg-[#303E48] text-white p-6 flex justify-center items-center flex-col relative text-center"
        >
          <h4 className="text-xl font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Easy Release
          </h4>
          <p className="text-gray-300 px-4 sm:px-9">
            zLock features convenient, easy-to-reach tabs that make releasing
            the lock a breeze. zLock ensures effortless, hassle-free cable
            management, even in the most challenging data center environments.
          </p>
        </div>
        <div
          ref={(el) => (sectionsRef.current[5] = el)}
          className="order-6 lg:order-none relative h-[300px] w-full flex justify-center"
        >
          <img src={three} alt="Easy Release" className="h-full w-full" />
        </div>

        {/* Fourth Row */}
        <div
          ref={(el) => (sectionsRef.current[6] = el)}
          className="order-8 lg:order-none relative h-[300px] w-full flex justify-center"
        >
          <img
            src={four}
            alt="Sustainable Solution"
            className="h-full w-full"
          />
        </div>
        <div
          ref={(el) => (sectionsRef.current[7] = el)}
          className="order-7 lg:order-none bg-[#0A5587] text-white p-6 flex justify-center items-center flex-col relative text-center"
        >
          <h4 className="text-xl font-bold mb-4 bg-red-700 rounded-tr-2xl rounded-bl-2xl px-4 py-2">
            Sustainable Solution
          </h4>
          <p className="px-4 sm:px-9">
            zLock is reliable and eco-friendly. It’s reusable, allowing you to
            redeploy it on future projects, making it a cost-effective and
            sustainable choice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZlockFeature;
