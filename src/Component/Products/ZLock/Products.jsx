import zlockLogo from "../../../../public/Products/zlockLogoWhite.png";
import ZlockFeature from "./ZlockFeature";
import ZlockGuide from "./ZlockGuide";
import React, { useRef, useEffect } from "react";
import HeroImage from "../../../../public/Products/heroImage.png";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import SpecificationsPage from "../Specification";
import ContactForm from "../../Common/GetInTouch";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="md:min-h-screen md:mb-0 mb-10 ">
        <div className="relative h-full overflow-hidden">
          <img
            ref={heroRef}
            src={HeroImage}
            alt="Support Background"
            fill
            className="object-cover md:h-full h-[600px] w-screen"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-black/60"></div>
          <h1
            className="md:text-6xl text-3xl w-full absolute text-center flex justify-center items-center flex-col text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2"
            ref={textRef}
          >
            <img src={zlockLogo} alt="" className="h-14 w-62 mb-2.5" />Z Lock |
            Secure Your Data Center Power
          </h1>
        </div>
      </div>
      <FirstSection />
      <ZlockFeature />
      <SecondSection />
      <SpecificationsPage />
      <ZlockGuide />
      <ContactForm />
    </>
  );
};

export default Products;
