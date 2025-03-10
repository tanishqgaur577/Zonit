import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pattern from "../../../../public/sectionpattern.png";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse", // Animates every time on scroll
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-800 to-black text-white text-center py-10 px-4 animate-on-scroll">
        <h1 className="text-2xl lg:text-4xl">
          Join the digital revolution with Zonit. <br /> We're more than just
          technology; we’re your partner in keeping your digital life alive and
          thriving.
        </h1>
      </div>

      {/* Case Study Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 animate-on-scroll">
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-red-700 text-sm font-bold mb-4">READ IT</h2>
          <p className="text-gray-600 mb-12">
            In these two compelling case studies, organizations facing critical
            data center challenges found their solutions in Zonit’s
            groundbreaking zLock locking power cords...
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Card */}
            <div className="p-6 bg-gray-50 border rounded-lg shadow-md animate-on-scroll">
              <h3 className="bg-red-700 text-white text-lg font-bold px-4 py-2 w-max rounded-tr-xl rounded-bl-xl">
                Local Government
              </h3>
              <p className="text-gray-700 my-4">
                In this case study, a local government data center was
                struggling with frequent IT outages...
              </p>
              <a
                href="#"
                className="text-red-700 font-bold hover:underline inline-flex items-center"
              >
                Read the full Case Study →
              </a>
            </div>
            {/* Second Card */}
            <div className="p-6 bg-gray-50 border rounded-lg shadow-md animate-on-scroll">
              <h3 className="bg-blue-900 text-white text-lg font-bold px-4 py-2 w-max rounded-tr-xl rounded-bl-xl">
                Soft Layer / IBM Cloud
              </h3>
              <p className="text-gray-700 my-4">
                Here, SoftLayer / IBM Cloud sought to expedite server rack
                deployments...
              </p>
              <a
                href="#"
                className="text-blue-900 font-bold hover:underline inline-flex items-center"
              >
                Read the full Case Study →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(to right, #1E3A8A, #001521), url(${pattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
        className="text-white py-8 px-10 flex justify-start items-start flex-col animate-on-scroll"
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Elevate Your Data Centre’s Reliability with Zonit
        </h2>
        <p className="text-gray-300 max-w-4xl text-lg mb-8">
          When it comes to safeguarding your data center's mission-critical
          operations, zLock stands as the top choice...
        </p>
        <a
          href="#"
          className="bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600"
        >
          Request a Sample →
        </a>
      </div>
    </div>
  );
};

export default SecondSection;
