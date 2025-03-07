import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "../../../public/Patent/PatentHeroImage.png";
import PatentedProducts from "./PatentProducts";
import CountOnUs from "../Careers/CountOnUs";
import ContactForm from "../Common/GetInTouch";

const Patent = () => {
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
      <div ref={containerRef} className="min-h-screen">
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Support Background"
            className="object-cover md:h-full h-[600px] w-screen"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-black/70"></div>
          <h1
            ref={textRef}
            className="text-5xl absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2"
          >
            Patents
          </h1>
        </div>
      </div>
      <div className="w-full lg:px-24 px-5 flex flex-col lg:flex-row">
        <h1 className="text-3xl text-[#005487] lg:text-center mb-3 flex-1 font-normal">
          Where Innovation Fuels Performance
        </h1>
        <p className="flex-1 text-lg">
          Zonit provides innovative power distribution units for data centers.
          Zonit technology is used in products sold by the company and its
          resellers that may be covered by one or more U.S. and international
          patents. Products listed below may be sold individually or in
          combination with other products. This list is provided to satisfy
          virtual patent marking requirements in a variety of jurisdictions.
          This information serves as notice under 35 U.S.C. § 287(a). Zonit may
          have additional patent applications pending.
        </p>
      </div>
      <PatentedProducts />
      <CountOnUs />
      <ContactForm />
    </>
  );
};

export default Patent;
