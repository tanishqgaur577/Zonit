import React, { useEffect, useRef } from "react";
import heroImage from "../../../public/careers/careersHero.png";
import { motion } from "framer-motion";
import { gsap } from "gsap";

import BlogSection from "../Common/Blogs";
import FAQ from "../Common/FAQ";
import ContactForm from "../Common/GetInTouch";
import SecondCareersSection from "./SecondSectionCareers";
import CountOnUs from "./CountOnUs";
import CurrentOpenings from "./OpeningSection";

const Careers = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);
  return (
    <>
      <div ref={containerRef} className="min-h-screen ">
        <div className="relative  h-full w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Support Background"
            fill
            className="object-cover md:h-full h-[600px] w-screen"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-black/40"></div>
          <h1
            ref={textRef}
            className="text-5xl absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2"
          >
            Careers
          </h1>
        </div>
      </div>
      <SecondCareersSection />
      <CurrentOpenings />
      <CountOnUs />
      <ContactForm />
    </>
  );
};

export default Careers;
